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
    url: '/dashboard',
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
  },
  {
    header: "Apps",
  },
  {
    url: "/apps/todo",
    name: "Todo",
    slug: "todo",
    icon: "CheckSquareIcon",
  },
  {
    url: "/apps/calendar",
    name: "Calendar",
    slug: "calendar",
    icon: "CalendarIcon",
  },
  {
    header: "General",
  },
  {
    url: null,
    name: "Companions",
    slug: "pos",
    icon: "ListIcon",
    submenu: [
      {
        url: '/companions/add',
        name: "New Companion",
        slug: "companion-new",
      },
      {
        url: '/companions/manage',
        name: "Manage Companions",
        slug: "companion-manage",
      },
    ]
  },
  {
    url: null,
    name: "Locations",
    slug: "locations",
    icon: "LayoutIcon",
    submenu: [
      {
        url: '/appointment/locations/add',
        name: "New Location",
        slug: "location-new",
      },
      {
        url: '/appointment/locations/manage',
        name: "Manage Locations",
        slug: "location-manage",
      },
    ]
  },
  {
    header: "Appointments",
  },
  {
    url: '/appointments/active',
    name: "Active Appointments",
    slug: "appointment-active",
    icon: "LayoutIcon",
  },
  {
    url: '/appointments/completed',
    name: "Completed",
    slug: "appointment-completed",
    icon: "LayoutIcon",
  },
  {
    url: '/appointments/cancelled',
    name: "Cancelled",
    slug: "appointment-cancelled",
    icon: "LayoutIcon",
  },
  {
    header: "Customers",
  },
  {
    url: '/customers/active',
    name: "Active Customers",
    slug: "customer-active",
    icon: "LayoutIcon",
  },
  {
    url: '/customers/banned',
    name: "Banned Customers",
    slug: "customer-banned",
    icon: "LayoutIcon",
  },
  {
    header: "Accounting",
  },
  {
    url: '/accounting/transactions/appointment',
    name: "Transactions",
    slug: "transactions",
    icon: "LayoutIcon",
  },
  {
    url: null,
    name: "Accounting",
    icon: "LayoutIcon",
    submenu: [
      {
        url: '/accounting/sales',
        name: "Sales",
        slug: "sales",
      },
      {
        url: '/accounting/income',
        name: "Income",
        slug: "income",
      },
      {
        url: '/accounting/expenses',
        name: "Expenses",
        slug: "expenses",
      },
      {
        url: '/accounting/debit-credit',
        name: "Debit Credit",
        slug: "debit-credit",
      },
    ]
  },
  {
    header: "Settings",
  },
  {
    url: '/settings/user/profile',
    name: "UserProfile",
    slug: "user-profile",
    icon: "LayoutIcon",
  },
  {
    url: '/settings/manage-users',
    name: "ManageUsers",
    slug: "manage-users",
    icon: "LayoutIcon",
  },
]
