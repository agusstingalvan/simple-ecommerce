import React from 'react'
import * as API from '../services/index';
import styled from 'styled-components';
import Search from '../components/Search';
import CategoriesTags from '../components/CategoriesTags';
import CardProduct from '../components/CardProduct';
import { Loading } from '../components/Loading';

const Container = styled.div`
      max-width: 1024px;
      width: 90%;
      margin: 0 auto;  
    `;
const Title = styled.h1`
      margin-bottom: 2rem;
      font-weight: 300;
      text-align: center;
    `;
const Subtitle = styled.h3`
      margin-bottom: 1rem;
      font-weight: 300;
      text-align: left;
      margin-left: 1rem;
    `;

const Products = () => {
    const [products, setProducts] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const [categories, setCategories] = React.useState([]);
    const [valueNameCategory, setValueNameCategory] = React.useState('');
    const [loading, setLoading] = React.useState(null);

    React.useEffect(() => {
        //Trae desde la api, todos los productos con un offset y un limit de 10 por pagina
        API.getSomeProducts(count).then(data => {

            //Trae desde la api a todas las categorias.
            API.getAllCategories().then(response => {
                setCategories(response);
                setProducts(data);
                setLoading(true);
            });
        }).catch(err => setLoading(null))
    }, [count])

    const handleVerMas = () => {
        setCount((count) => count + 10);
    }

    const handleButtonCategory = (id, name) => {
        API.getCategoryProducts(id).then(data => {
            if(data.length === 0){
                setLoading(null);
            }else{
                setProducts(data);
                setLoading(true)
            }
        });
        setValueNameCategory(name);
    };





    return (
        <Container>
            <section>
                <Title>All products in our store</Title>
                <Search products={products} setProducts={setProducts} setLoading={setLoading}/>
                {
                    loading === null ? <Loading /> : (
                        <>
                            <CategoriesTags handleButtonCategory={handleButtonCategory} categories={categories} />
                            <Subtitle>
                                {
                                    valueNameCategory ? (`${valueNameCategory} products:`) : 'All products:'
                                }
                            </Subtitle>
                            {
                                products.map(product => <CardProduct key={product.id} title={product.title} price={product.price} category={product.category.name} image={product.images[0]} id={product.id} />)
                            }
                            <button onClick={handleVerMas}>Ver más</button>
                        </>
                    )
                }

                {/* {
    products.map(product => <article key={product.id} >
        <h3 >{product.title}</h3>
        <p><i>{product.description}</i></p>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <p>Price: ${product.price}</p>
            <p><b>{product.category.name}</b></p>
        </div>
        <img src={product.images[0]} width={120} alt={product.title} />
    </article>)
} */}

            </section>
        </Container>
    )
}

export default Products