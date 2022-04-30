
const getSingleProduct = (array, name)=>{
    return array.find((element)=> element.name == name);
}
export default getSingleProduct;