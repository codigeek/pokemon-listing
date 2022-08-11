/* eslint-disable */
import { lazy } from 'react';
import { USER_ROLE } from 'constants.js';
import { DEFAULT_PATHS } from 'config.js';

const dashboards = {
  admin: lazy(() => import('views/dashboards/Dashboard')),
  brand: lazy(() => import('views/dashboards/BrandDashboard')),
  purchases: lazy(() => import('views/dashboards/PurchasesDashboard')),
  sales: lazy(() => import('views/dashboards/SalesDashboard')),
  inventory: lazy(() => import('views/dashboards/InventoryDashboard')),
}

const products = {
  list: lazy(() => import('views/products/list/ProductsList')),
  detail: lazy(() => import('views/products/detail/ProductsDetail')),
};
const orders = {
  list: lazy(() => import('views/orders/list/OrdersList')),
  detail: lazy(() => import('views/orders/detail/OrdersDetail')),
};
const customers = {
  list: lazy(() => import('views/customers/list/CustomersList')),
  detail: lazy(() => import('views/customers/detail/CustomersDetail')),
};

const storefront = {
  home: lazy(() => import('views/storefront/home/Home')),
  filters: lazy(() => import('views/storefront/filters/Filters')),
  categories: lazy(() => import('views/storefront/categories/Categories')),
  detail: lazy(() => import('views/storefront/detail/Detail')),
  cart: lazy(() => import('views/storefront/cart/Cart')),
  checkout: lazy(() => import('views/storefront/checkout/Checkout')),
  invoice: lazy(() => import('views/storefront/invoice/Invoice')),
};
const shipping = lazy(() => import('views/shipping/Shipping'));
const discount = lazy(() => import('views/discount/Discount'));

const settings = {
  home: lazy(() => import('views/settings/home/Home')),
  general: lazy(() => import('views/settings/general/General')),
};

// Stuffys components
const modules = {
  list: lazy(() => import('views/list/ModulesList')),
  detail: lazy(() => import('views/detail/ModulesDetail')),
};

const users = {
  list: lazy(() => import('views/list/UsersList')),
  detail: lazy(() => import('views/detail/UsersDetail')),
};

const user_types = {
  list: lazy(() => import('views/list/UserTypesList')),
  detail: lazy(() => import('views/detail/UserTypesDetail')),
};

const product_category = {
  list: lazy(() => import('views/list/ProductsCategoryList')),
  detail: lazy(() => import('views/detail/ProductsCategoryDetail')),
};

const brand_category = {
  list: lazy(() => import('views/list/BrandsCategoryList')),
  detail: lazy(() => import('views/detail/BrandsCategoryDetail')),
};

const payment_type = {
  list: lazy(() => import('views/list/PaymentsTypeList')),
  detail: lazy(() => import('views/detail/PaymentsTypeDetail')),
};

const status_sp = {
  list: lazy(() => import('views/list/StatusSPList')),
  detail: lazy(() => import('views/detail/StatusSPDetail')),
};

const businesses = {
  brands: lazy(() => import('views/list/BrandsList')),
  brand_detail: lazy(() => import('views/detail/UsersDetail')),
  branches: lazy(() => import('views/list/BranchesList')),
  branch_detail: lazy(() => import('views/detail/UsersDetail')),
  my_brand: lazy(() => import('views/detail-middleware/BrandsDetailMiddle')),
};

const inventory = {
  inventory: lazy(() => import('views/inventory/Inventory')),
  products: lazy(() => import('views/list/ProductsList')),
  product_detail: lazy(() => import('views/detail/ProductsDetail')),
  warehouses: lazy(() => import('views/list/WarehousesList')),
  warehouse_detail: lazy(() => import('views/detail/WarehousesDetail')),
}

const sales = {
  clients: lazy(() => import('views/list/ClientsList')),
  client_detail: lazy(() => import('views/detail/ClientsDetail')),
  appointments: lazy(() => import('views/sales/Appointments')),
  sales: lazy(() => import('views/sp/SalesList')),
  sale_detail: lazy(() => import('views/sp/SalesDetail')),
}

const purchases = {
  providers: lazy(() => import('views/list/ProvidersList')),
  provider_detail: lazy(() => import('views/detail/ProvidersDetail')),
  purchases: lazy(() => import('views/sp/PurchasesList')),
  purchase_detail: lazy(() => import('views/sp/PurchasesDetail')),
}

const search = {
  search: lazy(() => import('views/search/Search'))
}

const estates = {
  list: lazy(() => import('views/list/EstatesList')),
  detail: lazy(() => import('views/detail/EstatesDetail')),
};

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/quintas`
    },
    {
      path: `${appRoot}/quintas`,
      component: search.search,
      label: 'Quintas',
      icon: 'home-garage'
    },
    {
      path: `${appRoot}/salones`,
      component: search.search,
      label: 'Salones',
      icon: 'home'
    },
    {
      path: `${appRoot}/cabañas`,
      component: search.search,
      label: 'Cabañas',
      icon: 'tent'
    },
    {
      path: `${appRoot}/suites`,
      component: search.search,
      label: 'Suites',
      icon: 'building'
    },
    {
      path: `${appRoot}/penthouse`,
      component: search.search,
      label: 'Penthouses',
      icon: 'luggage'
    },
    {
      path: `${appRoot}/terrazas`,
      component: search.search,
      label: 'Terrazas',
      icon: 'leaf'
    },

    
    // {
    //   path: `${appRoot}/administracion`,
    //   label: 'Administración',
    //   icon: 'diagram-1',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/administracion/modulos`,
    //   subs: [
    //     { path: '/usuarios', label: 'Usuarios', component: users.list },
    //     { path: '/accesos', label: 'Accesos', component: user_types.list },
    //     { path: '/quintas', label: 'Quintas', icon: 'diagram-1', component: estates.list },
    //   ]
    // },
    // {
    //   path: `${appRoot}/catalogos`,
    //   label: 'Catálogos',
    //   icon: 'presentation',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/catalogos/categorias_productos`,
    //   subs: [
    //     { path: '/categorias_marca', label: 'Categorías marcas', component: brand_category.list },
    //     { path: '/categorias_productos', label: 'Categorías productos', component: product_category.list },
    //     { path: '/tipos_pago', label: 'Tipos de pago', component: payment_type.list },
    //     { path: '/estatus_sp', label: 'Estatus', component: status_sp.list },
    //   ]
    // },
    // {
    //   path: `${appRoot}/negocios`,
    //   label: 'Negocios',
    //   icon: 'building-large',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/negocios/marcas`,
    //   subs: [
    //     { path: '/marcas', label: 'Marcas', component: businesses.brands },
    //     { path: '/sucursales', label: 'Sucursales', component: businesses.branches }
    //   ]
    // },


    // {
    //   path: `${appRoot}/mi-negocio`,
    //   label: 'Empresa',
    //   icon: 'building-large',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/mi-negocio/marca-detalle`,
    //   subs: [
    //     { path: '/marca-detalle', label: 'Mi empresa', component: businesses.my_brand },
    //     { path: '/sucursales', label: 'Sucursales', component: businesses.branches },
    //     { path: '/usuarios', label: 'Usuarios', component: users.list },
    //     { path: '/clientes', label: 'Clientes', component: sales.clients },
    //     { path: '/proveedores', label: 'Proveedores', component: purchases.providers },
    //     { path: '/reporte', label: 'Reporte', component: dashboards.brand },
    //   ]
    // },
    // {
    //   path: `${appRoot}/ventas`,
    //   label: 'Ventas',
    //   icon: 'cart',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/ventas/reporte`,
    //   subs: [
    //     { path: '/ventas', label: 'Ventas', component: sales.sales },
    //     { path: '/citas', label: 'Citas', component: sales.appointments }
    //   ]
    // },
    // {
    //   path: `${appRoot}/compras`,
    //   label: 'Compras',
    //   icon: 'credit-card',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/compras/reporte`,
    //   subs: [
    //     { path: '/compras', label: 'Compras', component: purchases.purchases }
    //   ]
    // },
    // {
    //   path: `${appRoot}/inventario`,
    //   label: 'Inventario',
    //   icon: 'boxes',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/inventario/inventario`,
    //   subs: [
    //     { path: '/inventario', label: 'Inventario', component: inventory.inventory },
    //     { path: '/productos', label: 'Productos', component: inventory.products },
    //     { path: '/bodegas', label: 'Bodegas', component: inventory.warehouses }
    //   ]
    // },
    // {
    //   path: `${appRoot}/contabilidad`,
    //   label: 'Contabilidad',
    //   icon: 'dashboard-1',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/contabilidad/reporte`,
    //   subs: [
    //     { path: '/cierres', label: 'Cierres', component: businesses.brands }
    //   ]
    // },

    // ----------------------------------------- DETAIL PAGES

    // {
    //   path: `${appRoot}/modulo-detalle`,
    //   component: modules.detail,
    //   label: 'Módulo detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/usuario-detalle`,
    //   component: users.detail,
    //   label: 'Usuario detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/acceso-detalle`,
    //   component: user_types.detail,
    //   label: 'Acceso detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/categoria-producto-detalle`,
    //   component: product_category.detail,
    //   label: 'Categoría producto detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/categoria-marca-detalle`,
    //   component: brand_category.detail,
    //   label: 'Categoría marca detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/marca-detalle`,
    //   component: businesses.brand_detail,
    //   label: 'Marca detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/sucursal-detalle`,
    //   component: businesses.branch_detail,
    //   label: 'Sucursal detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/cliente-detalle`,
    //   component: sales.client_detail,
    //   label: 'Cliente detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/proveedor-detalle`,
    //   component: purchases.provider_detail,
    //   label: 'Proveedor detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/producto-detalle`,
    //   component: inventory.product_detail,
    //   label: 'Producto detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/bodega-detalle`,
    //   component: inventory.warehouse_detail,
    //   label: 'Bodega detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/tipo-pago-detalle`,
    //   component: payment_type.detail,
    //   label: 'Tipo de pago detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/estatus-detalle`,
    //   component: status_sp.detail,
    //   label: 'Estatus detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/compra-detalle`,
    //   component: purchases.purchase_detail,
    //   label: 'Compra detalle',
    //   hideInMenu: true
    // },
    // {
    //   path: `${appRoot}/venta-detalle`,
    //   component: sales.sale_detail,
    //   label: 'Venta detalle',
    //   hideInMenu: true
    // }


  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
