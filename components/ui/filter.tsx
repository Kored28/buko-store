"use client";
import { Size } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import queryString from "query-string";
import Button from "./button";
import { cn } from "@/lib/utils";

interface FilterProps {
    valueKey: string;
    name: string;
    data: Size[];
}

const Filter: React.FC<FilterProps> = ({ valueKey, name, data }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        const current = queryString.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id
        }
        if(current[valueKey] === id){
            query[valueKey] = null
        }

        const url = queryString.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true });

        router.push(url);
    }

  return (
    <div className="mb-8">
        <h3 className="text-lg font-semibold">
            {name}
        </h3>
        <hr className="my-4"/>
        <div className="flex flex-wrap gap-2">
            {data.map((filter) => (
                <div key={filter.id} className="flex items-center">
                    <Button
                        className={cn(`rounded-md text-gray-800 p-2 bg-white
                        border border-gray-300
                        `, selectedValue === filter.id && "bg-black text-white"
                        )}
                        onClick={() => onClick(filter.id)}
                    >
                        {filter.name}
                    </Button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Filter