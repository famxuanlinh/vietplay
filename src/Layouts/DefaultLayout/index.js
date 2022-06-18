import BestSale from '../components/BestSale';
import Header from '../components/Header';
import NewsLetter from '../components/NewsLetter';
import ProductPriceShockToday from '../components/ProductPriceShockToday';
import Slider from '../components/Slider';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Slider />
            <BestSale />
            <ProductPriceShockToday />
            <NewsLetter />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
