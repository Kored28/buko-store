import { Store } from "@/types";

const URL = `${process.env.BUKA_PUBLIC_API_URL}/stores`

const getStores = async (): Promise<Store[]> => {
    const res =  await fetch(URL)

    return res.json()
}

export default getStores;