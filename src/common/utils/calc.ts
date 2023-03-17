import { cartItem } from '@/store/cartSlice';
const calcTotal = (items: cartItem[]) => {
    return items.reduce((acc, i) => {
        return acc + i.count;
    }, 0);
};
const calcTotalPrice = (items: cartItem[]) => {
    return items.reduce((acc, i) => acc + i.count * i.price, 0);
};

export { calcTotal, calcTotalPrice };
