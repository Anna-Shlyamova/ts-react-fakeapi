import React from "react";
import { Product } from "../data/requests";

interface productType {
    prod: Product
}
export default function ProductItem({prod}: productType) {
    return (
        <h1>{prod.title}</h1>
    )
}