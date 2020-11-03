export const totalPriceItems = order => {
    const countTopping = order.topping.filter(item => item.checked).length;
    const priceTopping = order.price * countTopping * 0.1;
    return (order.price + priceTopping) * order.count
};

export const formatCurrency = (number) =>{
    return number.toLocaleString('ru-Ru', {style: 'currency', currency: 'RUB'})
}