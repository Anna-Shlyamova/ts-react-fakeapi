import { Request} from "./requests";
import axios from 'axios';

export default async function getRequest<T extends Request>(urlR: T["url"]):Promise<T["success"]>{
    const urlP :T["url"] = "https://fakestoreapi.com/products";
    let products: T["success"] = (await (axios.get<T["success"]>(urlP))).data;
    return products;
}