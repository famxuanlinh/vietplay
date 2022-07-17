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
                            <span className={cx('product-sold_title')}>Đã bán</span>
                        </div>
                        <div className={cx('product-price')}>
                            <p className={cx('product-price_discount')}>{formatCurrency(product.price)}</p>
                            <p className={cx('product-price_none')}>{formatCurrency(product.priceDiscount)}</p>
                            <p className={cx('product-discount')}>50% GIẢM</p>
                        </div>
                        <div className={cx('product-desc')}>
                            <h3>Hãy Đọc Trước Khi Mua Hàng :</h3>
                            <p className={cx('product-desc_info')}>
                                - Vào đúng profile của mình được cấp. Không được thay đổi tên profile. Không thay avatar
                                profile, Không thêm mã pin cho profile, Không thay đổi thông tin tài khoản, Chỉ thay đổi
                                vietsub khi xem phim.
                            </p>
                            <p className={cx('product-desc_info')}>
                                - Đăng nhập tối đa 2 thiết bị. Nhưng khi xem chỉ xem 1 thiết bị. Không xem song song
                                cùng lúc, vì 1 tài khoản mua là 1 màn hình xem.
                            </p>
                            <p className={cx('product-desc_info')}>
                                VietPlay+ sẽ từ chối bảo hành nếu khách vi phạm các điều khoản trên.
                            </p>
                        </div>
                        <div className={cx('product-quality')}>
                            <span>Số Lượng</span>
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
                                Thêm Vào Giỏ Hàng
                            </button>
                            <button className={cx('product-btn_item')}>Mua Ngay</button>
                            <hr className={cx('product-btn_hr')}></hr>
                        </div>
                        <div className={cx('product-keyword')}>Từ khoá: {product.search}</div>
                        <div className={cx('product-connect')}>
                            <span className={cx('product-share')}>Chia sẻ:</span>
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
                                <span className={cx('product-like_item')}>Đã Thích (1.2K)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={cx('product_hr')}></hr>
                <div className={cx('product-rule')}>
                    <div className={cx('product-rule_content')}>
                        <h1 className={cx('product-rule_title')}>HƯỚNG DẪN MUA HÀNG</h1>
                        <p className={cx('product-rule_desc')}>
                            - Tiến hành đặt hàng và thanh toán qua WEBSITE sau đó Vietplay+ sẽ gửi thông tin đăng nhập
                            cho bạn thông qua email
                        </p>
                        <p className={cx('product-rule_desc')}>
                            - Thời gian giao hàng: Bạn sẽ nhận được tài khoản trong vòng 5 phút kể từ khi đặt hàng (có
                            thể sớm hơn tùy theo thời điểm và giờ làm việc của Vietplay+)
                        </p>
                    </div>
                    <div className={cx('product-rule_content')}>
                        <h1 className={cx('product-rule_title')}>HƯỚNG DẪN SỬ DỤNG</h1>
                        <p className={cx('product-rule_desc')}>
                            - Đăng nhập bằng tài khoản của Vietplay+ đã gửi cho bạn trên thiết bị của bạn, bạn có thể
                            đăng nhập tối đa 2 thiết bị tuy nhiên bạn bạn không được sử dụng cùng lúc nhiều thiết bị để
                            tránh ảnh hưởng người khác gặp trường hợp giới hạn thiết bị. Ví dụ: Bạn có thể đăng nhập cả
                            trên TV và điện thoại nhưng nếu bạn xem trên TV thì hãy đảm bảo tắt trên điện thoại.
                        </p>
                    </div>
                    <div className={cx('product-rule_content')}>
                        <h1 className={cx('product-rule_title')}>MÔ TẢ SẢN PHẨM</h1>
                        <h3 className={cx('product-rule_tile2')}>Netflix là gì?</h3>
                        <p className={cx('product-rule_desc')}>
                            Netflix là dịch vụ xem video trực tuyến của Mỹ, nội dung chủ yếu là phim và các chương trình
                            truyền hình, rất phổ biến ở Mỹ và nhiều nước khác trên thế giới mang đến đa dạng các loại
                            chương trình truyền hình, phim, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên
                            hàng nghìn thiết bị có kết nối Internet.
                        </p>
                        <p className={cx('product-rule_desc')}>
                            Tương tự như một số trang web như HDViet, FPT Play,… ở nước ta, nhưng Netflix cung cấp kho
                            video khủng với chất lượng cao hơn, có bản quyền đầy đủ và có ứng dụng để được sử dụng trên
                            các thiết bị thông minh như smartphone, tablet, smart tivi,… Khi đó, chỉ cần có kết nối
                            internet và một thiết bị thông minh, là người dùng có thể thưởng thức nội dung số từ Netflix
                            dễ dàng.{' '}
                        </p>
                        <p className={cx('product-rule_desc')}>
                            Đặc biệt, giữa bối cảnh người dùng đang thiếu các nguồn nội dung 4K để phát trên tivi 4K,
                            thì việc Netflix có hỗ trợ phát video 4K trở thành một ưu điểm rất nổi bật và đáng để người
                            dùng kì vọng.
                        </p>
                    </div>
                </div>
                <hr className={cx('product_hr')}></hr>
            </div>
        </div>
    );
}

export default ProductInfo;
