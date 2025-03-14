"use client";
import { Size } from "@/types"
import { useState } from "react";
import Button from "./button";
import { Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "./icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
    sizes: Size[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes }) => {
    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

  return (
    <>
        <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
            Filter
            <Plus size={20}/>
        </Button>
        <Dialog open={open} as="div" 
            className="relative z-40 lg:hidden"
            onClose={onClose}
        >
            <div className="fixed inset-0 bg-black bg-opacity-25" />

            <div className="fixed inset-0 z-40 flex">
                <DialogPanel 
                    className="relative ml-auto flex h-full w-full max-w-xs
                    flex-col overflow-y-hidden bg-white py-4 pb-6 shadow-lg"
                >
                    <div className="flex items-center justify-end px-4">
                        <IconButton icon={<X size={15} />} onClick={onClose} />
                    </div>

                    <div className="p-4">
                        <Filter 
                            valueKey="sizeId"
                            name="Sizes"
                            data={sizes}
                        />
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    </>
  )
}

export default MobileFilters