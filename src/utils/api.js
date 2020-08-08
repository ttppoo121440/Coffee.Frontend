import { get } from '@/plugins/Axios';

const uuid = process.env.VUE_APP_UUID;

/**
 * 產品
 */

export const getProduct = (data) => get(`api/${uuid}/ec/products?${data}`);

export const getSingleProducts = (id) => get(`api/${uuid}/ec/product/${id}`);

export const test = (data) => get(`api/${uuid}/admin/ec/products?${data}`);
