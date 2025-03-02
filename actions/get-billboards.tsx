import { Billboard } from "@/types";

const URL = `${process.env.BUKA_PUBLIC_API_URL}`

const getBillboards = async (id: string): Promise<Billboard[]> => {
    const res =  await fetch(`${URL}/${id}/billboards/`)

    return res.json()
}

export default getBillboards