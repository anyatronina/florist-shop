import React from "react";
import { useParams } from "react-router-dom";
import FlowerPage from "../components/pages/flowerPage";
import CatalogListPage from "../components/pages/catalogListPage";

const Catalog = () => {
  const params = useParams();
  const { itemId } = params;

  return <>{itemId ? <FlowerPage itemId={itemId} /> : <CatalogListPage />}</>;
};

export default Catalog;
