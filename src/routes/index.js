//Layouts
import { HeaderOnly } from '~/Layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Cart from '~/pages/Cart';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/cart', component: Cart, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
