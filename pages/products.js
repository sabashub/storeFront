import React from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import SearchBar from "@/components/SearchBar"; // Import the updated SearchBar component

const SearchBarWrapper = styled.div`
  margin-bottom: 20px; /* Add margin between the search bar and other elements */
  margin-top:20px;
`;

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <Center>
        <SearchBarWrapper>
          <SearchBar onSearch={(searchTerm) => console.log(searchTerm)} />
        </SearchBarWrapper>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
