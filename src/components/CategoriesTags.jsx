import React from 'react'
import styled from 'styled-components'
const TagsContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        overflow-x: scroll;
        padding: 1rem;
        @media (min-width: 768px){
            overflow-x: unset;
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
        transition: background-color 0.2s ease;
        &:hover{
            background-color: #525291;
        }
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