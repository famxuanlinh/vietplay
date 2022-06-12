import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless'; // different import path!

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css'; // optional

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ZaloIcon } from './Icon';
import { faBagShopping, faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { categories } from '~/pages/data';

const cx = classNames.bind(styles);

// useEffect(() => {
//     fetch(`https://vietplayplus.com/api/categories/all`)
//         .then((res) => res.json())
//         .then((res) => {
//             console.log(res.data);
//         });
// }, []);

function Header() {
    return (
        <header className={cx('wrapper')} id="myHeader">
            <div className={cx('inner')}>
                <div className={cx('list-menu')}>
                    <div className={cx('left-menu')}>
                        <Link to="./">
                            <img
                                src="https://vietplayplus.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75"
                                alt="vietplay"
                                className={cx('logo-link')}
                            />
                        </Link>
                        <div className={cx('menus')}>
                            <div className={cx('menu')}>
                                <Link to="" className={cx('menu_items')}>
                                    Trang Chủ
                                </Link>
                            </div>
                            <div className={cx('menu')}>
                                <Link to="" className={cx('menu_items')}>
                                    Cửa Hàng
                                </Link>
                            </div>
                            <Tippy
                                interactive
                                placement="top-start"
                                render={(attrs) => (
                                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                        <ul className={cx('list-items')}>
                                            {categories.map((item) => (
                                                <li className={cx('item')}>{item.name}</li>
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
                        <button className={cx('btn-menu')}>
                            <p className={cx('noty')}>24</p>
                            <FontAwesomeIcon icon={faBagShopping} />
                        </button>
                        <button className={cx('sign_in')}>Đăng Kí</button>
                        <button className={cx('log_in')}>Đăng Nhập</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
