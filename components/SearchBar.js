import React, { useState } from "react";
import styled from "styled-components";

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  width: 100%;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export default function SearchBar({products}) {

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    for (const product of products) {
        if(!product.title.includes(value)){
          const elements = document.querySelectorAll(`[value="${product._id}"]`);
          elements.forEach((element) => {
            element.style.display = "none";
          });
        }
        else{
          const elements = document.querySelectorAll(`[value="${product._id}"]`);
          elements.forEach((element) => {
            element.style.display = "block";
          });
        }
        
    }
  };

  

  return (
    <SearchBarWrapper>
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchBarWrapper>
  );
}
