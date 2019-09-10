/*=========================================================================================
  File type: item.routes.js
  Description: Routes for Product Items, Stocks and Inventory
  Object Strucutre:
                    path => router path
                    type => router type
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

const ItemRoutes = [
    {
      path: '/product/categories',
      name: 'product-categories',
      component: () => import('@/views/pages/dash-page/item-stocks/categories/ItemCategory.vue'),
      meta: {
        breadcrumb: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Item Stocks & Inventory'},
            { title: 'Item Categories', active: true }],
        pageTitle: 'Item Categories',
        rule: 'editor'
      },
    },
    {
      path: '/product/manage-items',
      name: 'product-manage-items',
      component: () => import('@/views/pages/dash-page/item-stocks/products/ManageProduct.vue'),
      meta: {
        breadcrumb: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Item Stocks & Inventory'},
            { title: 'Manage Products',  active: true}],
        pageTitle: 'Manage Products',
        rule: 'editor'
      },
    },
    {
      path: '/product/new-item',
      name: 'product-new-item',
      component: () => import('@/views/pages/dash-page/item-stocks/products/NewProduct.vue'),
      meta: {
        breadcrumb: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Item Stocks & Inventory'},
            { title: 'Manage Product', url: '/product/manage-items'},
            { title: 'New Product Item', active: true }],
        pageTitle: 'New Product item',
        rule: 'editor'
      },
    },
    {
      path: '/product/warehouses',
      name: 'product-warehouses',
      component: () => import('@/views/pages/dash-page/item-stocks/warehouse/Warehouses.vue'),
      meta: {
        breadcrumb: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Item Stocks & Inventory'},
            { title: 'Warehouses', active: true }],
        pageTitle: 'Warehouses',
        rule: 'editor'
      },
    },
    {
      path: '/product/stock-transfer',
      name: 'stock-transfer',
      component: () => import('@/views/pages/dash-page/item-stocks/StockTransfer.vue'),
      meta: {
        breadcrumb: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Item Stocks & Inventory'},
            { title: 'Stock Transfer', active: true }],
        pageTitle: 'Stock Transfer',
        rule: 'editor'
      },
    },
  ];
  
  export default ItemRoutes;