import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Upload from '~/pages/Upload';
import HeaderOnlyLayout from '~/components/Layout/HeaderOnlyLayout';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/follow', component: Follow },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
    { path: '/@:nickname', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
