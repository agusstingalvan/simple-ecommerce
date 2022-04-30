const API_URL = "https://api.escuelajs.co/api/v1";
//Esta peticion me devuelve un arrary con todos los productos de la api 
const getAllProducts = () => {
    return fetch(`${API_URL}/products`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.err(err));
}

export default getAllProducts;