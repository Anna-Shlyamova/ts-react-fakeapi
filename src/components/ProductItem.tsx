import React from "react";
import { Product } from "../data/requests";

interface productType {
    prod: Product
}
export default function ProductItem({prod}: productType) {
    return (
        <div>
            <h1>{prod.title}</h1>
            <img src={prod.image} width={'140px'}/>
        </div>
    )
}