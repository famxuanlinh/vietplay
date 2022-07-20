import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getToken from '~/utils/getToken';

const LoginContext = React.createContext();
export const LoginProvider = ({ children }) => {
    // Lưu vào local storege
    const setDataToLocalStorage = (data) => {
        window.localStorage.setItem('login', JSON.stringify(data));
    };

    // Lấy về local storege
    const getDataFromLocalStorage = () => {
        const dataString = window.localStorage.getItem('login');
        const dataObject = JSON.parse(dataString);

        if (dataObject && dataObject.customer) {
            setUserInfo(dataObject.customer);
        }
    };
    const [userInfo, setUserInfo] = useState();
    let history = useNavigate();

    async function handleLogin(payload) {
        await fetch(`https://vietplayplus.com/api/auth/login`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success == true) {
                    setUserInfo(data.data.customer);
                    setDataToLocalStorage(data.data);
                    history('/'); // Về trang chủ sau khi đăng nhập
                } else {
                    alert(data.message);
                }
            })
            .catch((err) => {});
    }

    const handleUpdateCustomer = (payload1) => {
        fetch(`https://vietplayplus.com/api/customers`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload1),
        })
            .then((res) => res.json())
            .then((res) => {
                const dataString = window.localStorage.getItem('login');
                const dataObject = JSON.parse(dataString);
                const newUserInfo = {
                    ...dataObject,
                    customer: res.data,
                };
                setDataToLocalStorage(newUserInfo);
            });
    };

    useEffect(() => {
        getDataFromLocalStorage();
    }, []);

    // create products state
    return (
        <LoginContext.Provider value={{ handleLogin, userInfo, handleUpdateCustomer }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => {
    return useContext(LoginContext);
};

export default LoginContext;
