import { Store } from "@/types";
import NoResult from "./ui/no-result";
import StoreCard from "./ui/store-card";

interface StoreListProps {
    title: string;
    stores: Store[]
}

const StoreList: React.FC<StoreListProps> = ({ title, stores }) => {
  return (
    <div className="space-y-4">
        <h2 className="font-bold text-3xl">
            {title}
        </h2>
        {stores.length === 0 && <NoResult />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stores.map((item) => (
                <StoreCard key={item.id} data={item} />
            ))}
        </div>
    </div>
  )
}

export default StoreList;