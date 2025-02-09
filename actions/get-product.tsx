import { Product } from "@/types";

const URL = `${process.env.BUKA_PRIVATE_API_URL}`

const getProduct = async (id: string, store: string): Promise<Product> => {
    const res =  await fetch(`${URL}/${store}/products/${id}`)

    return res.json()
}

export default getProduct