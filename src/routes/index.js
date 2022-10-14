import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Upload from '~/pages/Upload';
import HeaderOnlyLayout from '~/components/Layout/HeaderOnlyLayout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/follow', component: Follow },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
