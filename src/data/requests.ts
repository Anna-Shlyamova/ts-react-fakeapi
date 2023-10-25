export interface Product{
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string,
    rating:{rate: number, count:number}
}
export type Request = {
    method: 'GET',
    url: string,
	success: unknown
}
export type ProductList = {
    method: 'GET',
    url:'https://fakestoreapi.com/products',
    success: Product[]
}