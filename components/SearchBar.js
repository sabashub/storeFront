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

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchBarWrapper>
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearch(e.target.value);
        }}
      />
    </SearchBarWrapper>
  );
}
