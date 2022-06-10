import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="./" className={cx('logo-link')}>
                    <img
                        src="https://vietplayplus.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75"
                        alt="vietplay"
                    />
                </Link>
                <FontAwesomeIcon icon={faCircle} />
            </div>
        </header>
    );
}

export default Header;
