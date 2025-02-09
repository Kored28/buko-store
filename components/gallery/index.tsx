"use client";

import Image from "next/image";

import { Image as ImageType } from "@/types"
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GalleryTab from "./gallery-tab";

interface GalleryProps  {
    images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({
    images
}) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse lg:flex-row-reverse lg:gap-8">
        <div className="mx-auto mt-6 hidden w-full max-w-xl sm:block lg:max-w-none">
            <TabList className="grid grid-cols-4 gap-6">
                {images.map((image) => (
                    <GalleryTab key={image.id} image={image}/>
                ))}
            </TabList>
        </div>
        <TabPanels className="aspect-square lg:w-[60%]">
            {images.map((image) => (
                <TabPanel key={image.id}>
                    <div 
                        className="aspect-square relative w-full sm:rounded-lg
                        overflow-hidden"
                    >
                        <Image 
                            src={image.url}
                            fill
                            alt="Image"
                            className="object-cover object-center"
                        />
                    </div>
                </TabPanel>
            ))}
        </TabPanels>
    </TabGroup>
  )
}

export default Gallery