import classNames from 'classnames/bind';
import styles from './NewsLetter.module.scss';

const cx = classNames.bind(styles);

const NewsLetter = () => {
    return (
        <div classNameName={cx('wrapper')}>
            <img
                classNameName={cx('background')}
                src="https://vietplayplus.com/_next/image?url=https%3A%2F%2Fvietplayplus.com%2Fapi%2Fpublic%2Ffiles%2FBANNER_MAIL_fTeocAn32.jpg&w=1920&q=75"
                alt=" "
            />

            <div classNameName={cx('content')}>
                <h2>Đăng ký thông tin để nhận quà</h2>
                <form>
                    <div className={cx('form-group')}>
                        <label for={cx('inputAddress')}>Address</label>
                        <input
                            type="text"
                            className={cx('form-control')}
                            id="inputAddress"
                            placeholder="1234 Main St"
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label for="inputAddress2">Address 2</label>
                        <input
                            type="text"
                            className={cx('form-control')}
                            id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                        />
                    </div>
                </form>
                <button className={cx('button')}>Submit</button>
            </div>
        </div>
    );
};

export default NewsLetter;
