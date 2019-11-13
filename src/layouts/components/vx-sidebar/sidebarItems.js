/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
              => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

export default [
  {
    header: "게임",
  },
  {
    url: '/companions/service-rates',
    name: "슬롯",
    slug: "rates",
  },
  {
    url: '/companions/service-rates',
    name: "잭팟 슬롯",
    slug: "rates",
  },
  {
    url: '/companions/service-rates',
    name: "버커라",
    slug: "rates",
  },
  {
    url: '/companions/service-rates',
    name: "불략잭",
    slug: "rates",
  },
  {
    url: '/companions/service-rates',
    name: "롤렛",
    slug: "rates",
  },
  {
    url: '/companions/service-rates',
    name: "태아불 게임",
    slug: "rates",
  },
  {
    url: '/companions/service-rates',
    name: "모든 게임",
    slug: "rates",
  },
  {
    url: '/companions/service-rates',
    name: "테마",
    slug: "rates",
  },
  {
    url: null,
    name: "",
    slug: "rates",
  },
  {
    url: null,
    name: "",
    slug: "rates",
  },

  {
    url: null,
    name: "라이브 카시노",
    slug: "appointment-pending",
  },
  {
    url: '/appointments/completed',
    name: "BOMBAY CLUB",
    slug: "appointment-completed",
  },
  {
    url: '/appointments/cancelled',
    name: "공급자",
    slug: "appointment-cancelled",
  },
  {
    url: '/appointments/cancelled',
    name: "슻포츠복",
    slug: "appointment-cancelled",
  },
  {
    url: '/appointments/cancelled',
    name: "프로모션",
    slug: "appointment-cancelled",
  },
  {
    url: '/appointments/cancelled',
    name: "고객선터",
    slug: "appointment-cancelled",
  }
]
