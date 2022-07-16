import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import formatCurrency from '~/utils/formatCurrency';
import Paging from './Paging';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function ProductsStore() {
    const [products, setProducts] = useState([]);
    console.log('🚀 ~ file: index.js ~ line 13 ~ ProductsStore ~ products', products);

    // create page state to manage page

    const [pageProps, setPageProps] = useState({
        sort: 'createdAt:asc',
        rowPerPage: 10,
        totalPages: 1,
        currentPage: 1,
    });

    const getProducts = () => {
        fetch(`https://vietplayplus.com/api/products?page=${pageProps.currentPage}&limit=12&sortBy=createdAt:asc`)
            .then((res) => res.json())
            .then((res) => {
                setPageProps({
                    ...pageProps,
                    totalPages: res.data.totalPages,
                });

                setProducts(res.data.results);
                // "page": 2,
                // "limit": 12,
                // "totalPages": 6,
                // "totalResults": 62
            });
    };

    // first render and when we change page
    // will call this function to get data
    useEffect(() => {
        getProducts();
    }, [pageProps.currentPage]);

    const handleChangePage = (newPage) => {
        setPageProps({
            ...pageProps,
            currentPage: newPage,
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <button className={cx('btn')}>Mới Nhất</button>
                    <button className={cx('btn')}>Giá Thấp</button>
                    <button className={cx('btn')}>Giá Cao</button>
                </div>
                <div className={cx('container')}>
                    {products.map((product) => (
                        <Link to={`/san-pham/${product?.slug}`} key={product?.id}>
                            <div className={cx('content')}>
                                <div className={cx('content-top')}>
                                    <img
                                        className={cx('img')}
                                        src={`${`https://vietplayplus.com/api`}/${
                                            product?.images?.[0].formats.small.url
                                        }`}
                                        alt=""
                                    />
                                    <div className={cx('top-discount')}>
                                        <div
                                            className={cx('discount')}
                                            // priceDiscount={product.priceDiscount}
                                            price={product.price}
                                        >
                                            50%
                                        </div>
                                        <div className={cx('discount1')}>GIẢM</div>
                                    </div>
                                </div>
                                <div className={cx('content-bottom')}>
                                    <div className={cx('title-name')}>{product?.name}</div>
                                    <div className={cx('title-name2')}>{product.name}</div>
                                    <div className={cx('sale-off')}>{formatCurrency(product.price)}</div>
                                    <div className={cx('price')}>{formatCurrency(product.priceDiscount)}</div>
                                    <div className={cx('sold')}>Đã bán {product.sold}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div>
                    <Paging pageProps={pageProps} handleChangePage={handleChangePage} />
                </div>
            </div>
        </div>
    );
}

export default ProductsStore;
