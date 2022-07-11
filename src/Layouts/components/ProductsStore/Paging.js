import React from 'react';
import classNames from 'classnames/bind';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

// handleChangePage

/**
 * 1. di chuyen qua page khac
 * 2. tao them 2 nut next vaf prev
 * 3. tao them 2 nut di ve dau va ve cuoi
 *
 */

const Paging = ({ pageProps, handleChangePage }) => {
    const pages = new Array(pageProps.totalPages).fill(0).map((item, index) => ++index);

    const handleNext = () => {
        if (pageProps.currentPage < pageProps.totalPages) {
            handleChangePage(pageProps.currentPage + 1);
        }
    };
    const handlePrev = () => {
        if (pageProps.currentPage > 1) {
            handleChangePage(pageProps.currentPage - 1);
        }
    };

    return (
        <div>
            <div className={cx('pagination-content')}>
                <nav className={cx('pagination-inner')}>
                    <button
                        disabled={pageProps.currentPage == 1}
                        className={cx('pagination-inner_btn1')}
                        onClick={handlePrev}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <ol className={cx('pagination-inner_group')}>
                        {pages.map((item) => (
                            <li className={cx('pagination-inner_list_item')} key={item}>
                                {/* <button
                                    className={cx(
                                        `pagination-inner_item ${pageProps.currentPage === item ? 'active' : ''}`,
                                    )}
                                    onClick={() => handleChangePage(item)}
                                >
                                    {item}
                                </button> */}
                                <button className={cx('pagination-inner_item')} onClick={() => handleChangePage(item)}>
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ol>
                    <button
                        disabled={pageProps.currentPage == pageProps.totalPages}
                        className={cx('pagination-inner_btn2')}
                        onClick={handleNext}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Paging;
