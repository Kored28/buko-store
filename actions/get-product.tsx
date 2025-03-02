import { Product } from "@/types";

const URL = `${process.env.BUKA_PUBLIC_API_URL}`

const getProduct = async (id: string, storeId: string): Promise<Product> => {
    const res =  await fetch(`${URL}/${storeId}/products/${id}`)

    return res.json()
}

export default getProduct