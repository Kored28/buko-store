import { Category } from "@/types";

const URL = `${process.env.BUKA_PUBLIC_API_URL}`

const getCategory = async (id: string, storeId: string): Promise<Category> => {
    const res =  await fetch(`${URL}/${storeId}/categories/${id}`)

    return res.json()
}

export default getCategory