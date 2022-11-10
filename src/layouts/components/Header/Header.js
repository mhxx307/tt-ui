import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import config from '~/config';
import {
    CoinIcon,
    EarthAsiaIcon,
    EllipsisVerticalIcon,
    FeedbackIcon,
    GearIcon,
    KeyboardIcon,
    SignOut,
    UploadIcon,
    UserIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <EarthAsiaIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Vietnamese' },
            ],
        },
    },
    { icon: <FeedbackIcon />, title: 'Feedback and Help', to: '/feedback' },
    { icon: <KeyboardIcon />, title: 'Keyboard shortcuts' },
];

function Header() {
    const handleMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };

    const currentUser = true;

    const userMenu = [
        { icon: <UserIcon />, title: 'View profile', to: '/@hoa' },
        { icon: <CoinIcon />, title: 'Get coins', to: '/coin' },
        { icon: <GearIcon />, title: 'Settings', to: '/settings' },

        ...MENU_ITEMS,
        { icon: <SignOut />, title: 'Log out', to: '/logout', separate: true },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <Link to={config.routes.home} className={cx('logo')}>
                    <Image src={images.logo} alt="logo" width={140} height={50} />
                </Link>

                {/* nav */}
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon width="3.2rem" height="3.2rem" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange} hideOnClick>
                        {currentUser ? (
                            <Image
                                src="https://www.adobe.com/express/feature/image/media_16ad2258cac6171d66942b13b8cd4839f0b6be6f3.png?width=750&format=png&optimize=medium"
                                alt="dog avatar"
                                className={cx('user-avatar')}
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <EllipsisVerticalIcon width="3.2rem" height="3.2rem" />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
