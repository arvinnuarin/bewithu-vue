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
    icon: "GithubIcon",
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
      {
        url: '/companions/rest-day',
        name: "Companion Rest Day",
        slug: "companion-rest-day",
      },
    ]
  },
  {
    url: '/companions/service-rates',
    name: "Services",
    slug: "rates",
    icon: "BriefcaseIcon"
  },
  {
    header: "Appointments",
  },
  {
    url: '/appointments/pending',
    name: "Pending",
    slug: "appointment-pending",
    icon: "AlertCircleIcon",
  },
  {
    url: '/appointments/scheduled',
    name: "Scheduled",
    slug: "appointment-scheduled",
    icon: "ClipboardIcon",
  },
  {
    url: '/appointments/completed',
    name: "Completed",
    slug: "appointment-completed",
    icon: "CheckSquareIcon",
  },
  {
    url: '/appointments/cancelled',
    name: "Cancelled",
    slug: "appointment-cancelled",
    icon: "CloudOffIcon",
  },
  {
    header: "Customers",
  },
  {
    url: '/customers/active',
    name: "Active Customers",
    slug: "customer-active",
    icon: "UserCheckIcon",
  },
  {
    url: '/customers/inactive',
    name: "Inactive Customers",
    slug: "customer-inactive",
    icon: "UserXIcon",
  },
  {
    header: "Accounting",
  },
  {
    url: '/accounting/transactions/appointment',
    name: "Transactions",
    slug: "transactions",
    icon: "DollarSignIcon",
  },
  {
    url: '/accounting/expenses',
    name: "Expenses",
    icon: "TrendingUpIcon",
    slug: "expenses",
  },
  {
    header: "Settings",
  },
  {
    url: '/settings/user/profile',
    name: "User Profile",
    slug: "user-profile",
    icon: "UserIcon",
  },
  {
    url: '/settings/manage-users',
    name: "Manage Users",
    slug: "manage-users",
    icon: "UsersIcon",
  },
]
