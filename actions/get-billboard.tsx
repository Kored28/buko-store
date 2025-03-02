import { Billboard } from "@/types";

const URL = `${process.env.BUKA_PUBLIC_API_URL}`

const getBillboard= async (id: string, storeId: string): Promise<Billboard> => {
    const res =  await fetch(`${URL}/${storeId}/billboards/${id}`)

    return res.json()
}

export default getBillboard