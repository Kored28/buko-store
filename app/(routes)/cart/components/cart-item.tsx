import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Trash } from "lucide-react";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
    data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
    const cart = useCart()
    
    const onRemove = () => {
        cart.removeItem(data.id)
    }

  return (
    <li className="flex py-6 border-b">
        <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48"
        >
            <Image 
                fill
                src={data.images[0].url}
                alt="Image"
                className="object-cover object-center"
            />
        </div>
        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="absolute z-10 right-0 top-0">
                <IconButton onClick={onRemove} icon={<Trash size={20} />} />
            </div>
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6">
                <div className="flex justify-between">
                    <p className="text-lg font-semibold text-black">
                        {data.name}
                    </p>
                </div>
                <div className="mt-1 flex text-sm">
                    <div className="text-gray-500 pb-4">
                        {data.size.name}
                    </div>
                </div>

                <Currency value={data.price} />
            </div>
        </div>
    </li>
  )
}

export default CartItem