import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Validate = styled.div`
    background-image: url('https://vietplayplus.com/_next/image?url=https%3A%2F%2Fvietplayplus.com%2Fapi%2Fpublic%2Ffiles%2Flarge_bg-auth_dlmRMfj9z.jpg&w=1920&q=75');
    width: 100vw;
    min-height: 100vh;
`;

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Validate>{children}</Validate>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
