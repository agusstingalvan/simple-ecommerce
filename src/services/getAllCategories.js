const API_URL = 'https://api.escuelajs.co/api/v1'
//Esta peticion me devuelve un arrary con todas las categorias de los productos de la api
const getAllCategories = () => {
    return fetch(`${API_URL}/categories`).then(response => response.json()).then(data => data);
}
export default getAllCategories;