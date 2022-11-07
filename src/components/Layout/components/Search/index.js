import classNames from 'classnames/bind';
import React, { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/components/Icons';
import { useRef } from 'react';
import { useEffect } from 'react';
<<<<<<< HEAD
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiServices/searchService';
=======
>>>>>>> af6cf0b6d19fb03265524eb90efb274db119d48a

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
<<<<<<< HEAD

    const debounceValue = useDebounce(searchValue, 500);
=======
>>>>>>> af6cf0b6d19fb03265524eb90efb274db119d48a

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

<<<<<<< HEAD
        const fetchApi = async () => {
            setLoading(true);

            const res = await searchService.search(debounceValue);
            setSearchResult(res.data);

            setLoading(false);
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue]);
=======
        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);
>>>>>>> af6cf0b6d19fb03265524eb90efb274db119d48a

    return (
        <>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((item) => (
                                <AccountItem key={item.id} data={item} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and video"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    <button className={cx('search-btn')}>
                        <SearchIcon className={cx('search-icon')} />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
