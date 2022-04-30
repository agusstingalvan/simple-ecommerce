import React from 'react'
import styled from 'styled-components'
import { getSingleProduct } from '../services/index';

const Search = () => {


  const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  `;
  const Input = styled.input`
      background-color: #e1e1e1;
      padding: 0.625rem;
      border-top-left-radius:  0.625rem;
      border-bottom-left-radius:  0.625rem;
      border: none;
      width: 60%;
      &:focus-visible{
          outline-color: ${(props) => props.theme.secondary};
      }
  `;
  const Search = styled.button`
      background-color: ${(props) => props.theme.primary};
      padding: 0.625rem;
      border-top-right-radius:  0.625rem;
      border-bottom-right-radius:  0.625rem;
      border-color: transparent;
      border-width: 0.0625rem;
      border-style: solid;
      color: ${(props) => props.theme.secondary};
      transition: all 0.2s ease;

      &:hover{
          background-color: white;
          border-color: ${(props) => props.theme.secondary};
      }
  `;

  return (
    <Form onSubmit={handleSearch}>
      <Input type="text" placeholder='Search for a product...'   />
      <Search type='submit'>Search</Search>
    </Form>
  )
}

export default Search