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
    header: "Companion",
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
    url: '/companions/service-rates',
    name: "Manage Rates",
    slug: "rates",
    icon: "LayoutIcon"
  },
  {
    header: "Appointments",
  },
  {
    url: '/appointments/pending',
    name: "Pending Appointments",
    slug: "appointment-pending",
    icon: "LayoutIcon",
  },
  {
    url: '/appointments/scheduled',
    name: "Scheduled",
    slug: "appointment-scheduled",
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
    url: '/customers/inactive',
    name: "Inactive Customers",
    slug: "customer-inactive",
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
        url: '/accounting/expenses',
        name: "Expenses",
        slug: "expenses",
      },
    ]
  },
  {
    header: "Settings",
  },
  {
    url: '/settings/user/profile',
    name: "User Profile",
    slug: "user-profile",
    icon: "LayoutIcon",
  },
  {
    url: '/settings/manage-users',
    name: "Manage Users",
    slug: "manage-users",
    icon: "LayoutIcon",
  },
]
