import { faAt, faKey, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

function Login() {
    const [showPassword, setShowPassword] = useState('true');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ paddingTop: '200px', paddingBottom: '200px' }}>
            <div className={cx('wrapper')}>
                <div className={cx('validate')}>
                    <h2 className={cx('title')}>Đăng nhập</h2>
                    <form>
                        <div className={cx('form-item')}>
                            <FontAwesomeIcon className={cx('form-item_icon')} icon={faKey} />
                            <input className={cx('form-item_input')} placeholder="Nhập key" />
                        </div>
                        <div className={cx('or')}>
                            <hr className={cx('or-hr')} />
                            <p className={cx('or-title')}>HOẶC</p>
                        </div>
                        <div className={cx('form-item')}>
                            <FontAwesomeIcon className={cx('form-item_icon')} icon={faAt} />
                            <input className={cx('form-item_input')} placeholder="Địa chỉ Email" />
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
                        <Link to="/quen-mat-khau" className={cx('forgot-password')}>
                            Quên mật khẩu?
                        </Link>
                    </form>
                    <button className={cx('btn-register')}>Đăng nhập</button>
                    <div className={cx('have-account')}>
                        Chưa có tài khoản có tài khoản?
                        <Link className={cx('login-btn')} to="/dang-ki">
                            Đăng kí
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
