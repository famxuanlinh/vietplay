import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './QuantityInput.scss';

const cx = classNames.bind(styles);

// onChange(newQty)

const QuantityInput = ({ defaultQty = 1, onChange }) => {
    const [qty, setQty] = useState(defaultQty);

    const handleQtyChange = (newQty) => {
        if (newQty > 1) {
            setQty(newQty);
            onChange(newQty);
        } else {
            setQty(1);
            onChange(1);
        }
    };

    const handleIncrease = () => {
        setQty(qty + 1);
        onChange(qty + 1);
    };

    const handleDecrease = () => {
        if (qty > 1) {
            setQty(qty - 1);
            onChange(qty - 1);
        }
    };

    return (
        <span className={cx('product-quality_content')}>
            <button className={cx('product-quality_item')} onClick={handleDecrease}>
                -
            </button>
            <input
                type="text"
                className={cx('product-quality_item2')}
                value={qty}
                onChange={(e) => handleQtyChange(e.target.value)}
            />
            <button className={cx('product-quality_item')} onClick={handleIncrease}>
                +
            </button>
        </span>
    );
};

export default QuantityInput;
