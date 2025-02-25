import { Product } from "@/types"
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
        <div className="mt-3 flex items-end justify-between">
            <div className="text-2xl text-gray-900">
                <Currency value={data?.price} />
            </div>
            <hr className="my-4"/>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Size:</h3>
                <div>
                    {data?.size?.name}
                </div>
            </div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
            <Button className="flex items-center gap-x-2">
                Add To cart
                <ShoppingCart />
            </Button>
        </div>
    </div>
  )
}

export default Info