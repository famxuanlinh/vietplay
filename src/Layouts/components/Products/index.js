import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import formatCurrency from '~/utils/formatCurrency';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products() {
    const [category, setCategory] = useState('');
    const { id } = useParams();

    const getCategory = (id) => {
        fetch(`https://vietplayplus.com/api/categories/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setCategory(res.data);
            });
    };

    useEffect(() => {
        getCategory(id);
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <button className={cx('btn')}>Mới Nhất</button>
                    <button className={cx('btn')}>Giá Thấp</button>
                    <button className={cx('btn')}>Giá Cao</button>
                </div>
                <div className={cx('container')}>
                    {category?.products?.map((product) => (
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
            </div>
        </div>
    );
}

export default Products;
