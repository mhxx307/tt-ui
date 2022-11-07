import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Upload from '~/pages/Upload';
import HeaderOnlyLayout from '~/components/Layout/HeaderOnlyLayout';
import Profile from '~/pages/Profile';
import routesConfig from '~/config/routes';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Follow },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnlyLayout },
    { path: routesConfig.profile, component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
