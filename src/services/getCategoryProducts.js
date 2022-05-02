const API_URL = 'https://api.escuelajs.co/api/v1'
//Esta peticion me devuelve un array, con los productos dependiendo de la categoria seleccionada
const getCategoryProducts = (id = 1) => {
    return fetch(`${API_URL}/categories/${id}/products`).then(response => response.json()).then(data => data).catch(console.log);
}

export default getCategoryProducts;