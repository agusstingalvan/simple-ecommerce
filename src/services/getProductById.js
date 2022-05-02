const API_URL = " https://api.escuelajs.co/api/v1";

//Devuelve un producto por medio de la id
const  getProductById = (id) => {
    return fetch(`${API_URL}/products/${id}`).then(response => response.json()).then(data => data);
}
export default getProductById;