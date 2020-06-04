import React, {Component} from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import {Nav, NavItem} from 'reactstrap'
import {NavLink, withRouter} from 'react-router-dom'
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

import IntlMessages from '../../helpers/IntlMessages'

import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames,
  changeSelectedMenuHasSubItems,
} from '../../redux/actions'

import menuItems from '../../constants/menu'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedParentMenu: '',
      viewingParentMenu: '',
    }
  }

  handleWindowResize = (event) => {
    if (event && !event.isTrusted) {
      return
    }
    const {containerClassnames} = this.props
    const nextClasses = this.getMenuClassesForResize(containerClassnames)
    this.props.setContainerClassnames(
      0,
      nextClasses.join(' '),
      this.props.selectedMenuHasSubItems,
    )
  }

  // eslint-disable-next-line complexity
  handleDocumentClick = (e) => {
    const container = this.getContainer()
    let isMenuClick = false
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains('menu-button') ||
        e.target.classList.contains('menu-button-mobile'))
    ) {
      isMenuClick = true
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      (e.target.parentElement.classList.contains('menu-button') ||
        e.target.parentElement.classList.contains('menu-button-mobile'))
    ) {
      isMenuClick = true
    } else if (
      e.target.parentElement &&
      e.target.parentElement.parentElement &&
      e.target.parentElement.parentElement.classList &&
      (e.target.parentElement.parentElement.classList.contains('menu-button') ||
        e.target.parentElement.parentElement.classList.contains(
          'menu-button-mobile',
        ))
    ) {
      isMenuClick = true
    }
    if (container.contains(e.target) || container === e.target || isMenuClick) {
      return
    }
    this.setState({
      viewingParentMenu: '',
    })
    this.toggle()
  }

  getMenuClassesForResize = (classes) => {
    const {menuHiddenBreakpoint, subHiddenBreakpoint} = this.props
    let nextClasses = classes.split(' ').filter((x) => x !== '')
    const windowWidth = window.innerWidth
    if (windowWidth < menuHiddenBreakpoint) {
      nextClasses.push('menu-mobile')
    } else if (windowWidth < subHiddenBreakpoint) {
      nextClasses = nextClasses.filter((x) => x !== 'menu-mobile')
      if (
        nextClasses.includes('menu-default') &&
        !nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses.push('menu-sub-hidden')
      }
    } else {
      nextClasses = nextClasses.filter((x) => x !== 'menu-mobile')
      if (
        nextClasses.includes('menu-default') &&
        nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses = nextClasses.filter((x) => x !== 'menu-sub-hidden')
      }
    }
    return nextClasses
  }

  getContainer = () => {
    // eslint-disable-next-line react/no-find-dom-node
    return ReactDOM.findDOMNode(this)
  }

  // eslint-disable-next-line complexity
  toggle = () => {
    const hasSubItems = this.getIsHasSubItem()
    this.props.changeSelectedMenuHasSubItems(hasSubItems)
    const {containerClassnames, menuClickCount} = this.props
    const currentClasses = containerClassnames
      ? containerClassnames.split(' ').filter((x) => x !== '')
      : ''
    let clickIndex = -1

    // eslint-disable-next-line no-negated-condition
    if (!hasSubItems) {
      if (
        currentClasses.includes('menu-default') &&
        (menuClickCount % 4 === 0 || menuClickCount % 4 === 3)
      ) {
        clickIndex = 1
      } else if (
        currentClasses.includes('menu-sub-hidden') &&
        (menuClickCount === 2 || menuClickCount === 3)
      ) {
        clickIndex = 0
      } else if (
        currentClasses.includes('menu-hidden') ||
        currentClasses.includes('menu-mobile')
      ) {
        clickIndex = 0
      }
    } else if (
      hasSubItems &&
      currentClasses.includes('menu-sub-hidden') &&
      menuClickCount === 3
    ) {
      clickIndex = 2
    } else if (
      (hasSubItems && currentClasses.includes('menu-hidden')) ||
      currentClasses.includes('menu-mobile')
    ) {
      clickIndex = 0
    }
    if (clickIndex >= 0) {
      this.props.setContainerClassnames(
        clickIndex,
        containerClassnames,
        hasSubItems,
      )
    }
  }

  handleProps = () => {
    this.addEvents()
  }

  addEvents = () => {
    ;['click', 'touchstart', 'touchend'].forEach((event) =>
      document.addEventListener(event, this.handleDocumentClick, true),
    )
  }

  removeEvents = () => {
    ;['click', 'touchstart', 'touchend'].forEach((event) =>
      document.removeEventListener(event, this.handleDocumentClick, true),
    )
  }

  setSelectedLiActive = (callback) => {
    const oldli = document.querySelector('.sub-menu  li.active')
    if (oldli != null) {
      oldli.classList.remove('active')
    }

    /* set selected parent menu */
    const selectedlink = document.querySelector('.sub-menu  a.active')
    if (selectedlink === null) {
      const selectedParentNoSubItem = document.querySelector(
        '.main-menu  li a.active',
      )
      if (selectedParentNoSubItem !== null) {
        this.setState(
          {
            selectedParentMenu: selectedParentNoSubItem.getAttribute(
              'data-flag',
            ),
          },
          callback,
        )
      } else if (this.state.selectedParentMenu === '') {
        this.setState(
          {
            selectedParentMenu: menuItems[0].id,
          },
          callback,
        )
      }
    } else {
      selectedlink.parentElement.classList.add('active')
      this.setState(
        {
          selectedParentMenu: selectedlink.parentElement.parentElement.getAttribute(
            'data-parent',
          ),
        },
        callback,
      )
    }
  }

  setHasSubItemStatus = () => {
    const hasSubmenu = this.getIsHasSubItem()
    this.props.changeSelectedMenuHasSubItems(hasSubmenu)
    // this.toggle()
  }

  getIsHasSubItem = () => {
    const {selectedParentMenu} = this.state
    const menuItem = menuItems.find((x) => x.id === selectedParentMenu)
    if (menuItem) return menuItem && menuItem.subs && menuItem.subs.length > 0
    else return false
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setSelectedLiActive(this.setHasSubItemStatus)

      window.scrollTo(0, 0)
    }
    this.handleProps()
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)
    this.handleWindowResize()
    this.handleProps()
    this.setSelectedLiActive(this.setHasSubItemStatus)
  }

  componentWillUnmount() {
    this.removeEvents()
    window.removeEventListener('resize', this.handleWindowResize)
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sub-menu">
          <div className="scroll">
            <PerfectScrollbar
              options={{suppressScrollX: true, wheelPropagation: false}}
            >
              {menuItems &&
                menuItems.map((item, index) => {
                  // TODO: Display heading for sections if menu item has parent
                  return (
                    <Nav
                      key={item.id}
                      className={classnames({
                        'd-block':
                          (this.state.selectedParentMenu === item.id &&
                            this.state.viewingParentMenu === '') ||
                          this.state.viewingParentMenu === item.id,
                      })}
                      // data-parent={item.id}
                    >
                      {/* {item.subs &&
                        item.subs.map((sub, index) => {
                          return ( */}
                      <NavItem key={`${item.id}_${index}`}>
                        {item.newWindow ? (
                          <a
                            href={item.to}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <i className={item.icon} />{' '}
                            <IntlMessages id={item.label} />
                          </a>
                        ) : (
                          <NavLink to={item.to} id={`${item.id}_${index}`}>
                            <i className={item.icon} />{' '}
                            <IntlMessages id={item.label} />
                          </NavLink>
                        )}
                      </NavItem>
                      {/*) })}*/}
                    </Nav>
                  )
                })}
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({menu}) => {
  const {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems,
  } = menu
  return {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems,
  }
}
export default withRouter(
  connect(mapStateToProps, {
    setContainerClassnames,
    addContainerClassname,
    changeDefaultClassnames,
    changeSelectedMenuHasSubItems,
  })(Sidebar),
)
