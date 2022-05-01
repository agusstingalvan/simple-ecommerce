import getAllProducts from './getAllProducts.js';
const getSingleProduct = (name) => {
    return getAllProducts().then(array => {
        let id = null;
        let arrayIds = [];
        let resArray = [];
        array.some((element) => {
            if (element.title.toLowerCase().includes(name.toLowerCase())) {
                id = element.id
                arrayIds.push(id)
            }
        })
        for(let i of arrayIds){
            let filtro = array.find((element) => element.id == i)
            resArray.push(filtro);
        }
        return resArray;
    });
    // console.log(array)
    // return array.find((element)=>{
    //     console.log(element.title.includes(name))
    //     // return  element.title == name 
    // });
    // let id = null;
    // array.some((element)=> {
    //     if(element.title.toLowerCase().includes(name.toLowerCase())) {
    //         id = element.id
    //     }
    // })
    // return array.find((element) => element.id == id);
}
export default getSingleProduct;