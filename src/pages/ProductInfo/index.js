import { faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faHeart, faMessage, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuantityInput from '~/components/QuantityInput';
import { useCart } from '~/contexts/Cart/CartContext';
import formatCurrency from '~/utils/formatCurrency';
import styles from './ProductInfo.module.scss';

const cx = classNames.bind(styles);

function ProductInfo() {
    const [product, setProduct] = useState(null);
    const { handleAddToCart } = useCart();
    const [qty, setQty] = useState(1);
    const { slug } = useParams();

    const getProduct = (slug) => {
        fetch(`https://vietplayplus.com/api/products/${slug}`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res.data);
            });
    };
    useEffect(() => {
        getProduct(slug);
    }, [slug]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <nav aria-label="breadcrumb">
                    <ol className={cx('breadcrumb')}>
                        <li className={cx('breadcrumb-item')}>
                            <a href="#">Home</a>
                        </li>
                        <li className={cx('breadcrumb-item')}>
                            <a href="#">Library</a>
                        </li>
                        <li className={cx('breadcrumb-item active')} aria-current="page">
                            Data
                        </li>
                    </ol>
                </nav>
                <div className={cx('product')}>
                    <div className={cx('product-left')}>
                        <img
                            className={cx('product-img')}
                            src={`${`https://vietplayplus.com/api`}/${product?.images?.[0].formats.medium.url}`}
                            alt=""
                        />
                    </div>
                    <div className={cx('product-info')}>
                        <h2 className={cx('product-title')}>{product.name}</h2>
                        <div className={cx('product-feedback')}>
                            <span className={cx('product-point')}>4.9</span>
                            <span className={cx('product-stars')}>
                                <span className={cx('product-star_icon')}>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className={cx('product-star_icon')}>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className={cx('product-star_icon')}>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className={cx('product-star_icon')}>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className={cx('product-star_icon')}>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            </span>
                            <span className={cx('product-sold')}>{product.sold}</span>
                            <span className={cx('product-sold_title')}>???? b??n</span>
                        </div>
                        <div className={cx('product-price')}>
                            <p className={cx('product-price_discount')}>{formatCurrency(product.price)}</p>
                            <p className={cx('product-price_none')}>{formatCurrency(product.priceDiscount)}</p>
                            <p className={cx('product-discount')}>50% GI???M</p>
                        </div>
                        <div className={cx('product-desc')}>
                            <h3>H??y ?????c Tr?????c Khi Mua H??ng :</h3>
                            <p className={cx('product-desc_info')}>
                                - V??o ????ng profile c???a m??nh ???????c c???p. Kh??ng ???????c thay ?????i t??n profile. Kh??ng thay avatar
                                profile, Kh??ng th??m m?? pin cho profile, Kh??ng thay ?????i th??ng tin t??i kho???n, Ch??? thay ?????i
                                vietsub khi xem phim.
                            </p>
                            <p className={cx('product-desc_info')}>
                                - ????ng nh???p t???i ??a 2 thi???t b???. Nh??ng khi xem ch??? xem 1 thi???t b???. Kh??ng xem song song
                                c??ng l??c, v?? 1 t??i kho???n mua l?? 1 m??n h??nh xem.
                            </p>
                            <p className={cx('product-desc_info')}>
                                VietPlay+ s??? t??? ch???i b???o h??nh n???u kh??ch vi ph???m c??c ??i???u kho???n tr??n.
                            </p>
                        </div>
                        <div className={cx('product-quality')}>
                            <span>S??? L?????ng</span>
                            <span className={cx('product-quality_content')}>
                                <QuantityInput onChange={(newQty) => setQty(newQty)} />
                            </span>
                        </div>
                        <div className={cx('product-btn')}>
                            <button
                                className={cx('product-btn_cart')}
                                onClick={() => handleAddToCart({ ...product, qty })}
                            >
                                <FontAwesomeIcon className={cx('product-btn_cart_icon')} icon={faCartShopping} />
                                Th??m V??o Gi??? H??ng
                            </button>
                            <button className={cx('product-btn_item')}>Mua Ngay</button>
                            <hr className={cx('product-btn_hr')}></hr>
                        </div>
                        <div className={cx('product-keyword')}>T??? kho??: {product.search}</div>
                        <div className={cx('product-connect')}>
                            <span className={cx('product-share')}>Chia s???:</span>
                            <div className={cx('product-share_icon')}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <div className={cx('product-share_icon')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </div>
                            <div className={cx('product-share_icon')}>
                                <FontAwesomeIcon icon={faTelegram} />
                            </div>
                            <div className={cx('product-like')}>
                                <div className={cx('product-share_icon')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <span className={cx('product-like_item')}>???? Th??ch (1.2K)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={cx('product_hr')}></hr>
                <div className={cx('product-rule')}>
                    <div className={cx('product-rule_content')}>
                        <h1 className={cx('product-rule_title')}>H?????NG D???N MUA H??NG</h1>
                        <p className={cx('product-rule_desc')}>
                            - Ti???n h??nh ?????t h??ng v?? thanh to??n qua WEBSITE sau ???? Vietplay+ s??? g???i th??ng tin ????ng nh???p
                            cho b???n th??ng qua email
                        </p>
                        <p className={cx('product-rule_desc')}>
                            - Th???i gian giao h??ng: B???n s??? nh???n ???????c t??i kho???n trong v??ng 5 ph??t k??? t??? khi ?????t h??ng (c??
                            th??? s???m h??n t??y theo th???i ??i???m v?? gi??? l??m vi???c c???a Vietplay+)
                        </p>
                    </div>
                    <div className={cx('product-rule_content')}>
                        <h1 className={cx('product-rule_title')}>H?????NG D???N S??? D???NG</h1>
                        <p className={cx('product-rule_desc')}>
                            - ????ng nh???p b???ng t??i kho???n c???a Vietplay+ ???? g???i cho b???n tr??n thi???t b??? c???a b???n, b???n c?? th???
                            ????ng nh???p t???i ??a 2 thi???t b??? tuy nhi??n b???n b???n kh??ng ???????c s??? d???ng c??ng l??c nhi???u thi???t b??? ?????
                            tr??nh ???nh h?????ng ng?????i kh??c g???p tr?????ng h???p gi???i h???n thi???t b???. V?? d???: B???n c?? th??? ????ng nh???p c???
                            tr??n TV v?? ??i???n tho???i nh??ng n???u b???n xem tr??n TV th?? h??y ?????m b???o t???t tr??n ??i???n tho???i.
                        </p>
                    </div>
                    <div className={cx('product-rule_content')}>
                        <h1 className={cx('product-rule_title')}>M?? T??? S???N PH???M</h1>
                        <h3 className={cx('product-rule_tile2')}>Netflix l?? g???</h3>
                        <p className={cx('product-rule_desc')}>
                            Netflix l?? d???ch v??? xem video tr???c tuy???n c???a M???, n???i dung ch??? y???u l?? phim v?? c??c ch????ng tr??nh
                            truy???n h??nh, r???t ph??? bi???n ??? M??? v?? nhi???u n?????c kh??c tr??n th??? gi???i mang ?????n ??a d???ng c??c lo???i
                            ch????ng tr??nh truy???n h??nh, phim, phim t??i li???u ??o???t gi???i th?????ng v?? nhi???u n???i dung kh??c tr??n
                            h??ng ngh??n thi???t b??? c?? k???t n???i Internet.
                        </p>
                        <p className={cx('product-rule_desc')}>
                            T????ng t??? nh?? m???t s??? trang web nh?? HDViet, FPT Play,??? ??? n?????c ta, nh??ng Netflix cung c???p kho
                            video kh???ng v???i ch???t l?????ng cao h??n, c?? b???n quy???n ?????y ????? v?? c?? ???ng d???ng ????? ???????c s??? d???ng tr??n
                            c??c thi???t b??? th??ng minh nh?? smartphone, tablet, smart tivi,??? Khi ????, ch??? c???n c?? k???t n???i
                            internet v?? m???t thi???t b??? th??ng minh, l?? ng?????i d??ng c?? th??? th?????ng th???c n???i dung s??? t??? Netflix
                            d??? d??ng.{' '}
                        </p>
                        <p className={cx('product-rule_desc')}>
                            ?????c bi???t, gi???a b???i c???nh ng?????i d??ng ??ang thi???u c??c ngu???n n???i dung 4K ????? ph??t tr??n tivi 4K,
                            th?? vi???c Netflix c?? h??? tr??? ph??t video 4K tr??? th??nh m???t ??u ??i???m r???t n???i b???t v?? ????ng ????? ng?????i
                            d??ng k?? v???ng.
                        </p>
                    </div>
                </div>
                <hr className={cx('product_hr')}></hr>
            </div>
        </div>
    );
}

export default ProductInfo;
