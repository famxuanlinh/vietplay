import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/Layouts';
import { Fragment } from 'react';
import { CartProvider } from './contexts/Cart/CartContext';
import { LoginProvider } from './contexts/Login/LoginContext';

function App() {
    return (
        <Router>
            <LoginProvider>
                <CartProvider>
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;

                                let Layout = DefaultLayout;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </CartProvider>
            </LoginProvider>
        </Router>
    );
}

export default App;
