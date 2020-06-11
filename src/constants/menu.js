const data = [
  // {
  // id: 'm7pay',
  // icon: 'iconsminds-home',
  // // icon: 'iconsminds-air-balloon-1',
  // label: 'menu.app',
  // to: '/app/m7pay',
  // subs: [
  {
    id: 'home',
    icon: 'simple-icon-home',
    label: 'menu.app',
    to: '/app/m7pay/start',
  },
  {
    id: 'payments',
    icon: 'simple-icon-frame',
    label: 'menu.payment-links',
    to: '/app/m7pay/start',
    parent: 'Payments',
  },
  {
    id: 'transactions',
    icon: 'simple-icon-credit-card',
    label: 'menu.transactions',
    to: '/app/m7pay/start',
    parent: 'Payments',
  },
  {
    id: 'customers',
    icon: 'simple-icon-people',
    label: 'menu.customers',
    to: '/app/m7pay/start',
    parent: 'Payments',
  },
  {
    id: 'payouts',
    icon: 'simple-icon-arrow-down-circle',
    label: 'menu.payouts',
    to: '/app/m7pay/start',
    parent: 'Payments',
  },
  {
    id: 'transfers',
    icon: 'simple-icon-paper-plane',
    label: 'menu.transfers',
    to: '/app/m7pay/start',
  },
  {
    id: 'wallets',
    icon: 'simple-icon-wallet',
    label: 'menu.wallets',
    to: '/app/m7pay/start',
  },
  {
    id: 'settings',
    icon: 'simple-icon-settings',
    label: 'menu.settings',
    to: '/app/m7pay/start',
  },
  {
    id: 'faq',
    icon: 'simple-icon-bubbles',
    label: 'menu.faq',
    newWindow: true,
    to: '/app/m7pay/start',
  },
  {
    id: 'logout',
    icon: 'simple-icon-logout',
    label: 'menu.logout',
    to: '/app/m7pay/start',
  },
  // ],
  // },
  // {
  //   id: 'secondmenu',
  //   icon: 'iconsminds-three-arrow-fork',
  //   label: 'menu.second-menu',
  //   to: '/app/second-menu',
  //   subs: [
  //     {
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.second',
  //       to: '/app/second-menu/second',
  //     },
  //   ],
  // },
  // {
  //   id: 'blankpage',
  //   icon: 'iconsminds-bucket',
  //   label: 'menu.blank-page',
  //   to: '/app/blank-page',
  // },
]
export default data
