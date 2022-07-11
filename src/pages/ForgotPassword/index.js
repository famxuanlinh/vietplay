import { faAt, faKey, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ForgotPassword.module.scss';
const cx = classNames.bind(styles);

function ForgotPassword() {
    return (
        <div style={{ paddingTop: '200px', paddingBottom: '200px' }}>
            <div className={cx('wrapper')}>
                <div className={cx('validate')}>
                    <h2 className={cx('title')}>Quên mật khẩu</h2>
                    <div className={cx('desc')}>
                        Chúng tối sẽ gửi thông tin đặt lại mật khẩu tới email của bạn. Vui lòng kiểm tra hòm thư (nếu
                        không thấy vui lòng kiểm tra trong mục spam)
                    </div>
                    <form>
                        <div className={cx('form-item')}>
                            <FontAwesomeIcon className={cx('form-item_icon')} icon={faAt} />
                            <input className={cx('form-item_input')} placeholder="Địa chỉ Email" />
                        </div>
                    </form>
                    <button className={cx('btn-register')}>Đặt lại mật khẩu</button>
                    <div style={{ textAlign: 'center' }}>
                        <Link className={cx('login-btn')} to="/dang-nhap">
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
