import { faAt, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.scss';
const cx = classNames.bind(styles);

function Register() {
    const [showPassword, setShowPassword] = useState('true');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ paddingTop: '200px', paddingBottom: '200px' }}>
            <div className={cx('wrapper')}>
                <div className={cx('validate')}>
                    <h2 className={cx('title')}>Đăng kí</h2>
                    <form>
                        <div className={cx('form-item')}>
                            <FontAwesomeIcon className={cx('form-item_icon')} icon={faUser} />
                            <input className={cx('form-item_input')} placeholder="Tên" />
                        </div>
                        <div className={cx('form-item')}>
                            <FontAwesomeIcon className={cx('form-item_icon')} icon={faAt} />
                            <input type="email" className={cx('form-item_input')} placeholder="Địa chỉ Email" />
                        </div>
                        <div className={cx('form-item')}>
                            <FontAwesomeIcon className={cx('form-item_icon')} icon={faLock} />
                            <input
                                type={showPassword ? 'password' : 'text'}
                                className={cx('form-item_input2')}
                                placeholder="Mật khẩu"
                            />

                            <button type="button" onClick={handleShowPassword} className={cx('form-item_btn')}>
                                {showPassword === true ? 'Hiện' : 'Ẩn'}
                            </button>
                        </div>
                    </form>
                    <input type="submit" className={cx('btn-register')} value="Đăng kí" />

                    <div className={cx('have-account')}>
                        Đã có tài khoản?
                        <Link className={cx('login-btn')} to="/dang-nhap">
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
