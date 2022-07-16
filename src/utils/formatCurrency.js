const formatCurrency = (price) => {
    return price?.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND',
    });
};

export default formatCurrency;
