import sendRequest from './send-request';

const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addNewProduct(productData) {
  return sendRequest(BASE_URL, 'POST', productData);
}
