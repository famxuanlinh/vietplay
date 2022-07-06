import classNames from 'classnames/bind';
import styles from './NewsLetter.module.scss';

const cx = classNames.bind(styles);

const NewsLetter = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('background')}
                src="https://vietplayplus.com/_next/image?url=https%3A%2F%2Fvietplayplus.com%2Fapi%2Fpublic%2Ffiles%2FBANNER_MAIL_fTeocAn32.jpg&w=1920&q=75"
                alt=" "
            />

            <div className={cx('content')}>
                <h2 className={cx('title')}>Đăng ký thông tin để nhận quà</h2>
                <form>
                    <div className={cx('form')}>
                        <label className={cx('tile-item')} htmlFor="inputAddress">
                            Tên
                        </label>
                        <div className={cx('item-input')}>
                            <input type="text" className={cx('form-input')} id="inputAddress" />
                        </div>
                    </div>
                    <div className={cx('form')}>
                        <label className={cx('tile-item')} htmlFor="inputAddress2">
                            Email
                        </label>
                        <div className={cx('item-input')}>
                            <input type="text" className={cx('form-input')} id="inputAddress2" />
                        </div>
                    </div>
                </form>
                <button className={cx('button')}>Submit</button>
            </div>
        </div>
    );
};

export default NewsLetter;
