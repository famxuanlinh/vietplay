import BestSale from '~/Layouts/components/BestSale';
import ProductPriceShockToday from '~/Layouts/components/ProductPriceShockToday';
import Slider from '~/Layouts/components/Slider';

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
