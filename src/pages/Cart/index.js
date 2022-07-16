import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import QuantityInput from '~/components/QuantityInput';
import { useCart } from '~/contexts/Cart/ContextProvider';
import formatCurrency from '~/utils/formatCurrency';
import FooterCart from '~/components/footterCart';

const cx = classNames.bind(styles);

function Cart() {
    const { products, handleUpdateCart, handleDeleteItemInCart } = useCart();

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
                    {products.map((data) => (
                        <tr key={data.id} style={{ borderBottom: '1px solid gray' }}>
                            <td>
                                <div className={cx('product-name')}>
                                    <img
                                        className={cx('product-img')}
                                        src="https://vietplayplus.com/api/public/files/SanPham_NET%201_EStaVetsQ.jpg"
                                        alt=""
                                    />
                                    <div className={cx('product-title')}>{data.name}</div>
                                </div>
                            </td>
                            <td>
                                <div className={cx('product-price')}>
                                    <span className={cx('product-price_discount')}>{formatCurrency(data.price)}</span>
                                    <span className={cx('product-price_none')}>
                                        {formatCurrency(data.priceDiscount || data.price)}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <QuantityInput
                                    onChange={(newQty) => handleUpdateCart(data.id, newQty)}
                                    defaultQty={data.qty}
                                />
                            </td>
                            <td>
                                <div className={cx('product-sum')}>
                                    {formatCurrency((data.priceDiscount || data.price) * data.qty)}
                                </div>
                            </td>
                            <td>
                                <button className={cx('product-btn')} onClick={() => handleDeleteItemInCart(data.id)}>
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    ))}
                </table>
                <FooterCart />
            </div>
        </div>
    );
}

export default Cart;
