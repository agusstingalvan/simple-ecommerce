const API_URL = "https://api.escuelajs.co/api/v1";
//Esta peticion devuelve un array con los productos pero con una paginacion de offset y un limite, los cuales son parametros que pueden iterar/manipular desde el front-end
const getSomeProducts = (offset = 0, limit = 10)=>{
    return fetch(`${API_URL}/products?offset=${offset}&limit=${limit}`)
    .then(response => response.json()).then(data => data).catch(console.log)
};
export default getSomeProducts;