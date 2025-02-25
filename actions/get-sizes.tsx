import { Size } from "@/types";

const URL = `${process.env.BUKA_PRIVATE_API_URL}`

const getSizes = async (storeId: string): Promise<Size[]> => {
    const res =  await fetch(`${URL}/${storeId}/sizes`)

    return res.json()
}

export default getSizes