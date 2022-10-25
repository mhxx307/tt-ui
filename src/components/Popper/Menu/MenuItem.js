import classNames from 'classnames/bind';
import React from 'react';
import Button from '~/components/Button';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')}>
            <span className={cx('menu-title')}>{data.title}</span>
        </Button>
    );
}

export default MenuItem;
