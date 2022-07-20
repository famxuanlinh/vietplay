//Layouts
import { DefaultLayout, MainLayout, ProductsLayout } from '~/Layouts';

//Pages
import Home from '~/pages/Home';
import Store from '~/pages/Store';
import Cart from '~/pages/Cart';
import Category from '~/pages/Category';
import Register from '~/pages/Register';
import ProductInfo from '~/pages/ProductInfo';
import Login from '~/pages/Login';
import ForgotPassword from '~/pages/ForgotPassword';
import ManageAcc from '~/pages/ManageAcc';
// import ProductInfo from '~/Layouts/components/ProductInfo';

const publicRoutes = [
    { path: '/', component: Home, layout: MainLayout },
    { path: '/store', component: Store, layout: ProductsLayout },
    // { path: '/product', component: Product, layout: DefaultLayout },
    { path: '/gio-hang', component: Cart, layout: MainLayout },
    { path: '/dang-ki', component: Register, layout: DefaultLayout },
    { path: '/dang-nhap', component: Login, layout: DefaultLayout },
    { path: '/quen-mat-khau', component: ForgotPassword, layout: DefaultLayout },
    { path: '/danh-muc/:id', component: Category, layout: ProductsLayout },
    { path: '/san-pham/:slug', component: ProductInfo, layout: MainLayout },
    { path: '/quan-li-tai-khoan', component: ManageAcc, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
