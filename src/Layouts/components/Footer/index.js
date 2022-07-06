import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <div className={cx('title')}>VỀ VIETPLAYPLUS+</div>
                    <a className={cx('item')}>Quy chế sử dụng dịch vụ</a>
                    <a className={cx('item')}>Khuyến mãi</a>
                    <a className={cx('item')}>Chính sách bảo mật</a>
                </div>
                <div className={cx('midle-left')}>
                    <div className={cx('title')}>HỖ TRỢ</div>
                    <a className={cx('item')}>Nhắn qua Messenger</a>
                    <a className={cx('item')}>Nhắn qua Zalo</a>
                    <a className={cx('item')}>vietplayplus@gmail.com</a>
                </div>
                <div className={cx('midle-right')}>
                    <div className={cx('title')}>PHƯƠNG THỨC THANH TOÁN</div>
                    <img className={cx('img-item')} src="../assets/thanhToan.png" alt="Phuong thuc thanh toan" />
                </div>
                <div className={cx('right')}>
                    <div className={cx('title')}>KẾT NỐI VỚI CHÚNG TÔI</div>
                    <a className={cx('item')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                    </a>
                    <a className={cx('item')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
