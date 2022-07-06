import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    const [categories, setCategories] = useState([]);

    // const { id } = useParams();
    const getCategories = () => {
        fetch(`https://vietplayplus.com/api/categories/all`)
            .then((res) => res.json())
            .then((res) => {
                setCategories(res.data);
            });
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('sidebar')}>
                    <h2 className={cx('header')}>Danh mục sản phẩm</h2>
                    <ul className={cx('list-items')}>
                        {categories.map((item) => (
                            <Link to={`/danh-muc/${item.slug}`} key={item.id}>
                                <li className={cx('item')}>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
