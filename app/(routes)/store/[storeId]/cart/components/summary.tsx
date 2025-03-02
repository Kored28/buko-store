"use client"

import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart"
import CheckoutButton from "../../components/checkout-button";


const Summary= () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll)

    useEffect(() => {
        if(searchParams.get("success")){
            toast.success("Payment completed.");
            removeAll();
        }

        if(searchParams.get("canceled")){
            toast.error("Someting went wrong.")
        }
    }, [searchParams, removeAll])

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)

    

  return (
    <div
        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5
        lg:mt-0 lg:p-8"
    >
        <h2 className="text-lg font-medium text-gray-500">
            Order Summary
        </h2>
        <div className="mt-6 sapce-y-4">
            <div 
                className="flex items-center justify-between 
                border-t border-gray-200 pt-4"
            >
                <div className="text-base font-medium text-gray-900">
                    Order total
                </div>
                <Currency value={totalPrice} />
            </div>
        </div>
        <CheckoutButton items={items} />
    </div>
  )
}

export default Summary