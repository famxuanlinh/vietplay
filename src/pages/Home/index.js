// import classNames from 'classnames/bind';
// import styles from './Home.module.scss';

import BestSale from '~/Layouts/components/BestSale';
import ProductPriceShockToday from '~/Layouts/components/ProductPriceShockToday';
import Slider from '~/Layouts/components/Slider';

// const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <Slider />
            <BestSale />
            <ProductPriceShockToday />
        </div>
    );
}

export default Home;
