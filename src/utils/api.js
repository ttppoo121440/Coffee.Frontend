import { get, post, del } from '@/plugins/Axios';

const uuid = process.env.VUE_APP_UUID;

/**
 * 產品
 */

export const getProduct = (data) => get(`api/${uuid}/ec/products?${data}`);

export const getSingleProducts = (id) => get(`api/${uuid}/ec/product/${id}`);

export const createOrder = (data) => post(`api/${uuid}/ec/orders`, data);

export const cartList = () => get(`api/${uuid}/ec/shopping`);

export const createCart = (data) => post(`api/${uuid}/ec/shopping`, data);

export const deleteCart = () => del(`api/${uuid}/ec/shopping/all/product`);
