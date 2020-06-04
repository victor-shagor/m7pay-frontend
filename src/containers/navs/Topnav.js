import React, {Component} from 'react'
import {injectIntl} from 'react-intl'
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {
  setContainerClassnames,
  clickOnMobileMenu,
  changeLocale,
} from '../../redux/actions'

import {MobileMenuIcon, MenuIcon} from '../../components/svg'
import TopnavNotifications from './Topnav.Notifications'

class TopNav extends Component {
  handleLogout = () => {
    //logout
  }

  menuButtonClick = (e, menuClickCount, containerClassnames) => {
    e.preventDefault()

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents')
      event.initEvent('resize', false, false)
      window.dispatchEvent(event)
    }, 350)
    this.props.setContainerClassnames(
      ++menuClickCount,
      containerClassnames,
      this.props.selectedMenuHasSubItems,
    )
  }
  mobileMenuButtonClick = (e, containerClassnames) => {
    e.preventDefault()
    this.props.clickOnMobileMenu(containerClassnames)
  }

  render() {
    const {containerClassnames, menuClickCount} = this.props
    return (
      <nav className="navbar fixed-top">
        <NavLink
          to="#"
          className="menu-button d-none d-md-block d-lg-none"
          onClick={(e) =>
            this.menuButtonClick(e, menuClickCount, containerClassnames)
          }
        >
          <MenuIcon />
        </NavLink>
        <NavLink
          to="#"
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          onClick={(e) => this.mobileMenuButtonClick(e, containerClassnames)}
        >
          <MobileMenuIcon />
        </NavLink>

        <div className="ml-auto">
          <div className="header-icons d-inline-block align-middle">
            <TopnavNotifications />
          </div>
          <div className="user d-inline-block">
            <UncontrolledDropdown className="dropdown-menu-right">
              <DropdownToggle className="p-0" color="empty">
                <span className="name mr-1">Micheal Parker</span>
                <span>
                  <img alt="Profile" src="/assets/img/profile-pic-l.jpg" />
                </span>
              </DropdownToggle>
              <DropdownMenu className="mt-3" right>
                <DropdownItem>Account</DropdownItem>
                <DropdownItem>Features</DropdownItem>
                <DropdownItem>History</DropdownItem>
                <DropdownItem>Support</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => this.handleLogout()}>
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({menu, settings}) => {
  const {containerClassnames, menuClickCount, selectedMenuHasSubItems} = menu
  const {locale} = settings
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
    locale,
  }
}
export default injectIntl(
  connect(mapStateToProps, {
    setContainerClassnames,
    clickOnMobileMenu,
    changeLocale,
  })(TopNav),
)
