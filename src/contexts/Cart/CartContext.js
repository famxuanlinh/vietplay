import React, { useContext, useEffect, useState } from 'react';

const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const handleAddToCart = (data) => {
        const exist = products.find((x) => x.id === data.id);
        if (exist) {
            const newProducts = products.map((x) => (x.id === data.id ? { ...x, qty: x.qty + data.qty } : x));
            setProducts(newProducts);
            setDataToLocalStorage(newProducts);
        } else {
            const newProducts = [...products, data];
            setProducts(newProducts);
            setDataToLocalStorage(newProducts);
        }
    };

    const handleUpdateCart = (productId, newQty) => {
        const newProducts = products.map((product) => {
            if (product.id === productId) {
                return {
                    ...product,
                    qty: newQty,
                };
            } else {
                return product;
            }
        });
        setProducts(newProducts);
        setDataToLocalStorage(newProducts);
    };

    const handleDeleteItemInCart = (productId) => {
        const newProducts = products.filter((product) => product.id !== productId);
        setProducts(newProducts);
        setDataToLocalStorage(newProducts);
    };

    // Lưu vào local storege
    const setDataToLocalStorage = (data) => {
        window.localStorage.setItem('cart', JSON.stringify(data));
    };

    // Lấy về local storege
    const getDataFromLocalStorage = () => {
        const dataString = window.localStorage.getItem('cart');
        const dataObject = JSON.parse(dataString);

        if (dataObject && Array.isArray(dataObject)) {
            setProducts(dataObject);
        }
    };

    useEffect(() => {
        getDataFromLocalStorage();
    }, []);

    const totalQty = products.reduce((prev, product) => prev + product.qty, 0);

    const totalQtyProducts = products.length;

    const totalMoneyCart = products.reduce((prev, product) => prev + product.qty * product.priceDiscount, 0);

    const totalSave = products.reduce(
        (prev, product) => prev + product.qty * (product.price - product.priceDiscount),
        0,
    );

    // create products state
    return (
        <CartContext.Provider
            value={{
                products,
                handleAddToCart,
                totalQty,
                totalQtyProducts,
                totalMoneyCart,
                totalSave,
                handleUpdateCart,
                handleDeleteItemInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

export default CartContext;
