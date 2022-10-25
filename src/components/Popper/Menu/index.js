import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import React from 'react';
import style from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(style);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem data={item} key={index} />);
    };

    return (
        <Tippy
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
            trigger="click"
            zIndex={9999}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
