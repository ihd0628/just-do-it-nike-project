export const IP_CONFIG = 'http://127.0.0.1:8000';

export const LOGIN_CONFIG = {
  api: `http://${IP_CONFIG}/users/signin`,
};
export const SIGN_UP_CONFIG = {
  api: `http://${IP_CONFIG}/users/signup`,
};

export const MAIN_CONFIG = {
  api: `http://${IP_CONFIG}/products/?offset=0&limit=19`,
};

export const WISH_CONFIG = {
  api: `http://${IP_CONFIG}/wishlist`,
};

export const CART_GET_CONFIG = {
  api: `https://${IP_CONFIG}/carts`,
};

export const CART_ORDER = {
  api: `https://${IP_CONFIG}/posts`,
};

export const SEARCH_CONFIG = {
  api: `https://${IP_CONFIG}/posts`,
};
