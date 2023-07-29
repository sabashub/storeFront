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

  function levenshteinDistance(str1, str2) {
    const dp = Array.from({ length: str1.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= str2.length; j++) {
      dp[0][j] = j;
    }
  
    for (let i = 1; i <= str1.length; i++) {
      for (let j = 1; j <= str2.length; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost 
        );
      }
    }
  
    return dp[str1.length][str2.length];
  }

  function isAssociated(productName, searchWord) {

    if (productName.toLowerCase().includes(searchWord.toLowerCase())) {
      return true;
    }
    
    const maxAllowedDistance = 2;

    const distance = levenshteinDistance(productName.toLowerCase(), searchWord.toLowerCase());
  
    return distance <= maxAllowedDistance;
  }
    
  
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    for (const product of products) {
        if(!isAssociated(product.title,value)){
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
