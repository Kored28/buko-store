"use client";

import { Store } from "@/types";
import Image from "next/image";

import { useRouter } from "next/navigation";

interface StoreCardProps {
    data: Store;
};

const StoreCard: React.FC<StoreCardProps> = ({ data }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/store/${data.id}`)
    };


  return (
    <div 
        onClick={handleClick}
        className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
        <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image 
                src={data?.imageUrl || "/avatar.png" }
                fill
                alt="Image"
                className="aspect-square object-cover rounded-md"
            />
        </div>
        <div>
            <p className="font-semibold text-lg">
                {data.name}
            </p>
        </div>
    </div>
  )
}

export default StoreCard