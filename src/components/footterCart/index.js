import React from 'react';
import { useCart } from '~/contexts/Cart/CartContext';
import formatCurrency from '~/utils/formatCurrency';
import classNames from 'classnames/bind';
import styles from './FooterCart.module.scss';

const cx = classNames.bind(styles);

const FooterCart = () => {
    const { totalQtyProducts, totalMoneyCart, totalSave } = useCart();

    return (
        <div className={cx('product-total')}>
            <div className={cx('product-total_left')}>
                <div className={cx('product-total_title')}>
                    Tổng Thanh Toán ({totalQtyProducts} sản phẩm):{' '}
                    <div className={cx('product-total_title_sum')}> {formatCurrency(totalMoneyCart)}</div>
                </div>
                <div className={cx('product-total_save')}>
                    Tiết kiệm: <span className={cx('product-total_save_total')}>{formatCurrency(totalSave)}</span>
                </div>
            </div>
            <div className={cx('product-total_right')}>
                <button className={cx('product-total_right_button')}> Mua Ngay</button>
            </div>
        </div>
    );
};

export default FooterCart;
