const getToken = () => {
    const userString = window.localStorage.getItem('login');
    const userObject = JSON.parse(userString);

    if (userObject && userObject.tokens) {
        return userObject.tokens.access.token;
    }
    return '';
};

export default getToken;
