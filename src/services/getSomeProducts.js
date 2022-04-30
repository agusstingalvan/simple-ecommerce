const API_URL = "https://api.escuelajs.co/api/v1";

const getSomeProducts = (offset = 0, limit = 10)=>{
    return fetch(`${API_URL}/products?offset=${offset}&limit=${limit}`)
};
export default getSomeProducts;