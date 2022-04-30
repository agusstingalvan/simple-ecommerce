const API_URL = "https://api.escuelajs.co/api/v1";

const getAllProducts = () => {
    return fetch(`${API_URL}/products`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.err(err));
}

export default getAllProducts;