//Layouts
import { DefaultLayout, MainLayout } from '~/Layouts';

//Pages
import Home from '~/pages/Home';
import Store from '~/pages/Store';
import Cart from '~/pages/Cart';
import Category from '~/pages/Category';
import Product from '~/pages/Product';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/store', component: Store, layout: MainLayout },
    { path: '/product', component: Product, layout: DefaultLayout },
    { path: '/cart', component: Cart, layout: DefaultLayout },
    { path: '/danh-muc/:id', component: Category, layout: MainLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
