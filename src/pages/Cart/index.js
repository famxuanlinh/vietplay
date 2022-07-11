import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2 className={cx('title')}>Giỏ hàng</h2>;
                <table className={cx('table')}>
                    <tr className={cx('fist-cl')}>
                        <th style={{ width: '38%' }}>Sản phẩm</th>
                        <th style={{ width: '20%' }}>Đơn Giá</th>
                        <th style={{ width: '17%' }}>Số Lượng</th>
                        <th style={{ width: '11%' }}>Số Tiền</th>
                        <th style={{ width: '14%' }}>Thao Tác</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={cx('product-name')}>
                                <img
                                    className={cx('product-img')}
                                    src="https://vietplayplus.com/api/public/files/SanPham_NET%201_EStaVetsQ.jpg"
                                    alt=""
                                />
                                <div className={cx('product-title')}>Gói Spotify Premium (5 Năm)</div>
                            </div>
                        </td>
                        <td>
                            <div className={cx('product-price')}>
                                <span className={cx('product-price_discount')}>30000d</span>
                                <span className={cx('product-price_none')}>70000d</span>
                            </div>
                        </td>
                        <td>
                            <span className={cx('product-quality_content')}>
                                <button className={cx('product-quality_item')}>-</button>
                                <input type="text" className={cx('product-quality_item2')} value="1" />
                                <button className={cx('product-quality_item')}>+</button>
                            </span>
                        </td>
                        <td>
                            <div className={cx('product-sum')}>200.000d</div>
                        </td>
                        <td>
                            <button className={cx('product-btn')}>Xoá</button>
                        </td>
                    </tr>
                </table>
                <hr className={cx('product_hr')}></hr>
            </div>
        </div>
    );
}

export default Cart;
