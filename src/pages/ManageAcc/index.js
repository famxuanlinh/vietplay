import React, { useState, useEffect } from 'react';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import styles from './ManageAcc.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLogin } from '~/contexts/Login/LoginContext';

const cx = classNames.bind(styles);

const ManageAcc = () => {
    const [showCode, setShowCode] = useState('true');
    const { userInfo, handleUpdateCustomer } = useLogin();
    const [userPayload, setUserPayload] = useState({
        name: userInfo?.name || '',
        zalo: userInfo?.zalo || '',
        email: userInfo?.email || '',
    });
    console.log('🚀 ~ file: index.js ~ line 19 ~ ManageAcc ~ userPayload', userPayload);

    const handleDataChange = (e) => {
        const { name, value } = e.target;

        setUserPayload({
            ...userPayload,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        handleUpdateCustomer(userPayload);
    };

    const handleShowCode = () => {
        setShowCode('false');
    };

    useEffect(() => {
        if (userInfo) {
            setUserPayload({
                name: userInfo?.name || '',
                zalo: userInfo?.zalo || '',
                email: userInfo?.email || '',
            });
        }
    }, [userInfo]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('validate')}>
                <h2 className={cx('title')}>Thông tin tài khoản</h2>
                <p className={cx('Caution-item')}>
                    Bạn cần điền đầy đủ thông tin bảo mật rồi bấm lưu sau đó nhận tài khoản
                </p>
                <div className={cx('customer-code')}>
                    Mã khách hàng:
                    <span className={cx('customer-code_item')}>
                        {userPayload.key}
                        <button className={cx('customer-code_btn')} onClick={handleShowCode}>
                            <FontAwesomeIcon icon={faEyeSlash} />
                        </button>
                        <button className={cx('customer-code_btn1')}>Copy Mã</button>
                    </span>
                    <div className={cx('customer-code_caution')}>
                        Lưu ý: Mã khách hàng dùng để đăng nhập mà không cần tài khoản mật khẩu.
                    </div>
                    <div className={cx('customer-code_caution')}>Lưu ý: Lưu thật kĩ để sử dụng</div>
                </div>
                <form>
                    <div className={cx('form-item')}>
                        <label htmlFor="form-item_input" className={cx('form-item_label')}>
                            Tên*
                        </label>

                        <input
                            id="form-item_input_item"
                            onChange={handleDataChange}
                            className={cx('form-item_input')}
                            name="name"
                            value={userPayload.name}
                        />
                    </div>
                    <div className={cx('form-item')}>
                        <label htmlFor="form-item_input" className={cx('form-item_label')}>
                            Email*
                        </label>
                        <input
                            id="form-item_input_item"
                            onChange={handleDataChange}
                            name="email"
                            className={cx('form-item_input')}
                            value={userPayload.email}
                        />
                    </div>
                    <div className={cx('form-item')}>
                        <label htmlFor="form-item_input" className={cx('form-item_label')}>
                            Zalo (vui lòng cung cấp số zalo chính xác để hỗ trợ bảo hành)*
                        </label>
                        <input
                            id="form-item_input_item"
                            className={cx('form-item_input')}
                            placeholder="Số điện thoại zalo của bạn"
                            name="zalo"
                            onChange={handleDataChange}
                            value={userPayload.zalo}
                        />
                    </div>
                </form>
                <button className={cx('btn-save')} onClick={handleSubmit}>
                    Lưu
                </button>
            </div>
        </div>
    );
};

export default ManageAcc;
