import axios from 'axios';

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    'http://localhost:1337/api'
  }${path}`;
}
////////////////////////////////////////////////////////////////
// GET API FUNCTION
export async function fetchGetAPI(path) {
  try {
    const requestUrl = getStrapiURL(path);
    // const response = await fetch(requestUrl);
    const response = await axios.get(requestUrl);
    // const data = await response.json();
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
}

// FETCH GET BOOKING
export async function getBookings() {
  const bookings = await fetchGetAPI('/bookings');
  return bookings;
}

// FETCH GET PRODUCT
export async function getProducts() {
  const products = await fetchGetAPI('/products?populate=*');
  return products;
}

export async function getProductsId(id) {
  const productsId = await fetchGetAPI(
    `/products/${id}?populate=%2A`
  );
  return productsId;
}
export async function getProductsSlug(slug) {
  const productsSlug = await fetchGetAPI(
    `/products?populate[image][sort][0]=name&[filters][slug][$eq]=${slug}`
  );
  return productsSlug;
}

// FETCH GET IMAGES
export async function getImages() {
  const images = await fetchGetAPI('/products?populate=*');
  return images;
}

// FETCH GET IMAGES
export async function getUsers() {
  const users = await fetchGetAPI('/users');
  return users;
}

// export async function getCategory(slug) {
//   const categories = await fetchAPI(`/categories?slug=${slug}`);
//   return categories?.[0];
// }

// export async function getProducts() {
//   const products = await fetchAPI('/products');
//   return products;
// }

// export async function getProduct(slug) {
//   const products = await fetchAPI(`/products?slug=${slug}`);
//   return products?.[0];
// }
