import { Product } from "@/types";
import queryString from "query-string";

const URL = `${process.env.BUKA_PUBLIC_API_URL}`

interface Query {
    categoryId?: string;
    sizeId?: string;
    isFeatured?: boolean; 
}

const getProducts = async (query: Query, storeId: string): Promise<Product[]> => {
    const url = queryString.stringifyUrl({
        url: `${URL}/${storeId}/products`,
        query: {
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })

    const res =  await fetch(url)

    return res.json()
}

export default getProducts;