import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { CoinIcon, FeedbackIcon, GearIcon, KeyboardIcon, SignOut, UploadIcon, UserIcon } from '~/components/Icons';

import Search from '~/components/Layout/components/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Vietnamese' },
            ],
        },
    },
    { icon: <FeedbackIcon width="16px" height="16px" />, title: 'Feedback and Help', to: '/feedback' },
    { icon: <KeyboardIcon />, title: 'Keyboard shortcuts' },
];

function Header() {
    const handleMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };

    const currentUser = true;

    const userMenu = [
        { icon: <UserIcon width="16px" height="16px" />, title: 'View profile', to: '/@hoa' },
        { icon: <CoinIcon width="16px" height="16px" />, title: 'Get coins', to: '/coin' },
        { icon: <GearIcon width="16px" height="16px" />, title: 'Settings', to: '/settings' },

        ...MENU_ITEMS,
        { icon: <SignOut width="16px" height="16px" />, title: 'Log out', to: '/logout', separate: true },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <Image src={images.logo} alt="logo" width={140} height={50} />
                </div>

                {/* nav */}
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://www.adobe.com/express/feature/image/media_16ad2258cac6171d66942b13b8cd4839f0b6be6f3.png?width=750&format=png&optimize=medium"
                                alt="dog avatar"
                                className={cx('user-avatar')}
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
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
