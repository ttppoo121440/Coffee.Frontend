import { get, post, del } from '@/plugins/Axios';

const uuid = process.env.VUE_APP_UUID;

/**
 * 產品
 */

export const getProduct = () => get(`api/${uuid}/ec/products?page=1&paged=100`);

export const getSingleProducts = (id) => get(`api/${uuid}/ec/product/${id}`);

/**
 * 訂單
 */

export const createOrder = (data) => post(`api/${uuid}/ec/orders`, data);

/**
 * 購物車
 */

export const createCart = (data) => post(`api/${uuid}/ec/shopping`, data);

export const deleteCart = () => del(`api/${uuid}/ec/shopping/all/product`);
