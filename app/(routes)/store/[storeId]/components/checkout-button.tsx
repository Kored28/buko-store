"use client"

import axios from "axios";
import { useParams } from "next/navigation";

import { Product } from "@/types";
import Button from "@/components/ui/button";


interface CheckoutButtonProps {
    items: Product[]
}
const CheckoutButton: React.FC<CheckoutButtonProps> = ({ items }) => {
    const params = useParams()
    const onCheckout = async () => {
        const response = await axios.post(`${process.env.BUKA_PUBLIC_API_URL}/${params.storeId}/checkout`, {
            productIds: items.map((item) => item.id)
        });

        window.location = response.data.url;
    }

  return (
    <Button onClick={onCheckout} className="w-full mt-6">
        Checkout
    </Button>
  )
}

export default CheckoutButton