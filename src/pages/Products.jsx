import React from 'react'
import * as API from '../services/index';
import styled from 'styled-components';

const Products = () => {
    const [products, setProducts] = React.useState([]);
    const Container = styled.div`
      max-width: 1024px;
      width: 90%;
      margin: 0 auto;  
    `;
    React.useEffect(() => {
        API.getAllProducts().then(setProducts)
    }, [])
    return (
        <Container>
            <section>
                <h1>All productions in our store</h1>
                {
                    products.map(product => <article key={product.id} >
                        <h3 >{product.title}</h3>
                        <p><i>{product.description}</i></p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <p>Price: ${product.price}</p>
                            <p><b>{product.category.name}</b></p>
                        </div>
                        <img src={product.images[0]} width={120} alt={product.title} />
                    </article>)
                }
            </section>
        </Container>
    )
}

export default Products