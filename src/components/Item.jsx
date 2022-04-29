import React from 'react';
import styled from 'styled-components';

export const Item = ({ title, price, currency, discount, img, old_price, rating, release_date, source, url }) => {
    const ItemCard = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: ${(props) => props.theme.primary};
        box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.2);
        border-radius: 0.2rem;
        overflow: hidden;
        transition: transform .3s ease;
        img{
            width: 100%;
            object-fit: cover;
        }

        div{
            padding: 0.75rem;
            h2{
                text-transform: uppercase;
                margin-bottom: 0.6rem
            }
        }
        .tag{
            font-size: 0.6rem;
            font-weight: 300;
            font-style: italic;
            background-color: #35a35f;
            padding: 0.2rem;
            border-radius: 0.2rem; 
        }
        &:hover{
            transform: scale(1.1);
        }
    `;
    const Button = styled.a`
        background-color: ${(props)=> props.theme.secondary};  
        color: ${(props)=> props.theme.text_primary};  
        padding: .5rem;
        display: inline-block;
        text-decoration: none;
        font-weight: 700;
        margin: 1rem 0;
        transition: background-color 0.1s ease;
        

        &:hover{
            background-color: #284850;
        }
    `;

    return (
        <ItemCard>
            <img src={img} alt={title} />
            <div>
                <h2>{title}</h2>
                <p>Price: ${price} - <span className='tag'>{currency}</span></p>
                <Button href={url} target="_blank" rel="noopener noreferrer" >Ir a la Tienda</Button>
            </div>
        </ItemCard>
    )
}

