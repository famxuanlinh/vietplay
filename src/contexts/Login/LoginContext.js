import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContext = React.createContext();
export const LoginProvider = ({ children }) => {
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
                    history('/');
                } else {
                    alert(data.message);
                }
            })
            .catch((err) => {});
    }

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

    useEffect(() => {
        getDataFromLocalStorage();
    }, []);

    // create products state
    return <LoginContext.Provider value={{ handleLogin, userInfo }}>{children}</LoginContext.Provider>;
};

export const useLogin = () => {
    return useContext(LoginContext);
};

export default LoginContext;
