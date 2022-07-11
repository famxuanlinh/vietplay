import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const Image = styled.img`
    max-height: 317px;
    width: 100vw;
    padding-bottom: 40px;
    background-color: var(--primary-color);
`;

const Container = styled.div`
    background-color: var(--primary-color);
    width: 100vw;
    /* height: 978.64px; */
`;

const Content = styled.div`
    display: flex;
    width: 1636px;
    padding: auto;
    margin: auto;
    justify-content: space-between;
`;

function ProductsLayout({ children }) {
    return (
        <div>
            <Header />
            <Image
                src="https://vietplayplus.com/_next/image?url=https%3A%2F%2Fvietplayplus.com%2Fapi%2Fpublic%2Ffiles%2FBANNER_SP_1_-jPcxqMV-.jpg&w=1920&q=75"
                alt=""
            />
            <Container>
                <Content>
                    <Sidebar />
                    {children}
                </Content>
            </Container>
            <Footer />
        </div>
    );
}

export default ProductsLayout;
