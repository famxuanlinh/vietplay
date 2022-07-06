import Header from '../components/Header';

import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <NewsLetter />
            <Footer />
        </div>
    );
}

export default MainLayout;
