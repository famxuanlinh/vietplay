import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless'; // different import path!

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css'; // optional

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { ZaloIcon } from './Icon';
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { useEffect } from 'react';
// import { categories } from '~/pages/data';
import { useEffect } from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [postList, setPostList] = useState([]);

    const getCategory = () => {
        fetch(`https://vietplayplus.com/api/categories/all`)
            .then((res) => res.json())
            .then((res) => {
                setPostList(res.data);
            });
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <header className={cx('wrapper')} id="myHeader">
            <div className={cx('inner')}>
                <div className={cx('list-menu')}>
                    <div className={cx('left-menu')}>
                        <Link to="/">
                            <img
                                src="https://vietplayplus.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75"
                                alt="vietplay"
                                className={cx('logo-link')}
                            />
                        </Link>
                        <div className={cx('menus')}>
                            <div className={cx('menu')}>
                                <Link to="/" className={cx('menu_items')}>
                                    Trang Chủ
                                </Link>
                            </div>
                            <div className={cx('menu')}>
                                <Link to="/store" className={cx('menu_items')}>
                                    Cửa Hàng
                                </Link>
                            </div>
                            <Tippy
                                interactive
                                placement="top-start"
                                render={(attrs) => (
                                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                        <ul className={cx('list-items')}>
                                            {postList.map((item) => (
                                                <Link to={`/danh-muc/${item.slug}`}>
                                                    <li className={cx('item')}>{item.name}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            >
                                <div className={cx('menu')}>
                                    <Link to="" className={cx('menu_items')}>
                                        Danh Mục
                                    </Link>
                                </div>
                            </Tippy>
                            <div className={cx('menu')}>
                                <Link to="" className={cx('menu_items')}>
                                    Hỗ trợ Zalo
                                    {/* <ZaloIcon /> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right-menu')}>
                        <button className={cx('btn-menu')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <Link to="/gio-hang">
                            <button className={cx('btn-menu')}>
                                <p className={cx('noty')}>24</p>
                                <FontAwesomeIcon icon={faBagShopping} />
                            </button>
                        </Link>
                        <Link to="/dang-ki">
                            <button className={cx('sign_in')}>Đăng Kí</button>
                        </Link>
                        <Link to="/dang-nhap">
                            <button className={cx('log_in')}>Đăng Nhập</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
