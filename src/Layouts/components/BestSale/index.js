import classNames from 'classnames/bind';
import styles from './BestSale.module.scss';

const cx = classNames.bind(styles);

function BestSale() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}></h2>
            <div className={cx('content')}>
                <div className={cx('content-top')}>
                    <img src="" alt="" />
                    <div className={cx('top-discount')}>
                        <div className={cx('discount')}>
                            50% <br /> GIẢM
                        </div>
                    </div>
                </div>
                <div className={cx('content-bottom')}>
                    <div className={cx('title-name')}>NETFLIX</div>
                    <div className={cx('title-name2')}>Gói Netflix Premium 'Gia Đình' (1 Thangs)</div>
                    <div className={cx('sale-off')}>70.000đ</div>
                    <div className={cx('sprice')}>35.000đ</div>
                    <div className={cx('sold')}>Đã bán 3068</div>
                </div>
            </div>
        </div>
    );
}

export default BestSale;
