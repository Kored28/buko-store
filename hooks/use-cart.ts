import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);
            const differentStoreItems = currentItems.find((item) => item.storeId !== data.storeId);

            if(existingItem) {
                return toast.success("item already in cart");
            };

            if(differentStoreItems){
                return toast.error("There is an Item or Items in this cart that is not available to this store")
            }

            set({ items: [...get().items, data] });
            toast.success("item added to cart");
        },

        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] })
            toast.success("item removed from cart");
        }, 

        removeAll: () => set({ items: [] }) 
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;