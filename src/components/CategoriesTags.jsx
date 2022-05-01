import React from 'react'
import styled from 'styled-components'
const TagsContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 2rem;
        @media (min-width: 768px){
            
            gap: 1rem;
        }
    `;
const Tag = styled.button`
        background-color: ${(props) => props.theme.secondary};
        color: white;
        padding: 0.4rem;
        font-size: 0.625rem;
        border: none;
        border-radius: 0.625rem; 
    `;
const CategoriesTags = ({ handleButtonCategory, categories }) => {

    return (
        <TagsContainer>
            {
                categories.map((category) => {
                    return <Tag key={category.id} onClick={() => handleButtonCategory(category.id, category.name)}>{category.name}</Tag>
                })
            }
        </TagsContainer>
    )
}

export default CategoriesTags