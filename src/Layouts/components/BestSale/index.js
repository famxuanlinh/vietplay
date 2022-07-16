import classNames from 'classnames/bind';
import styles from './BestSale.module.scss';
import { productBestSale } from '~/pages/productBestSale';
import { Link } from 'react-router-dom';
import formatCurrency from '~/utils/formatCurrency';

const cx = classNames.bind(styles);

function BestSale() {
    // const Pecent = (priceDiscount, price) => {
    //     return Math.floor((priceDiscount * 100) / price);
    // };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2 className={cx('title')}>Sản phẩm bán chạy</h2>
                <div className={cx('container')}>
                    {productBestSale.map((item) => (
                        <Link className={cx('content')} key={item.id} to={`/san-pham/${item.slug}`}>
                            <div>
                                <div className={cx('content-top')}>
                                    <img
                                        className={cx('img')}
                                        src={`https://vietplayplus.com/api/${item.images?.[0].formats.thumbnails.url}`}
                                        alt=""
                                    />
                                    <div className={cx('top-discount')}>
                                        <div
                                            className={cx('discount')}
                                            priceDiscount={item.priceDiscount}
                                            price={item.price}
                                        >
                                            50%
                                        </div>
                                        <div className={cx('discount1')}>GIẢM</div>
                                    </div>
                                </div>
                                <div className={cx('content-bottom')}>
                                    <div className={cx('title-name')}>{item.categories?.[0].name}</div>
                                    <div className={cx('title-name2')}>{item.name}</div>
                                    <div className={cx('sale-off')}>{formatCurrency(item.price)}</div>
                                    <div className={cx('sprice')}>{formatCurrency(item.priceDiscount)}</div>
                                    <div className={cx('sold')}>Đã bán {item.sold}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BestSale;
