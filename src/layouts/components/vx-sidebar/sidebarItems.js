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
    header: "GAMES",
  },
  {
    url: '/games/slot',
    name: "Slot",
    slug: "slot",
  },
  {
    url: '/games/jackpot-slots',
    name: "Jackpot Slots",
    slug: "jackpot-slots",
  },
  {
    url: '/games/bacarrat',
    name: "Bacarrat",
    slug: "bacarrat",
  },
  {
    url: '/games/blackjack',
    name: "Blackjack",
    slug: "blackjack",
  },
  {
    url: '/games/roulettes',
    name: "Roulette",
    slug: "roulettes",
  },
  {
    url: '/games/table-games',
    name: "Table Games",
    slug: "table-games",
  },
  {
    url: '/games/all-games',
    name: "All Games",
    slug: "all-games",
  },
  {
    url: '/games/themes',
    name: "Themes",
    slug: "themes",
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
    url: '/games/live-casino',
    name: "LIVE CASINO",
    slug: "live-casino",
  },
  {
    url: '/games/bombay-club',
    name: "BOMBAY CLUB",
    slug: "bombay-club",
  },
  {
    url: '/providers',
    name: "PROVIDERS",
    slug: "providers",
  },
  {
    url: '/sportsbook',
    name: "SPORTSBOOK",
    slug: "appointment-cancelled",
  },
  {
    url: '/promo',
    name: "PROMO",
    slug: "appointment-cancelled",
  },
  {
    url: '/support/help-center',
    name: "HELP CENTRE",
    slug: "help-centre",
  }
]
