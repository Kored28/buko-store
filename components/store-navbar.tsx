import Link from "next/link"

import Container from "./ui/container"
import MainNav from "./main-nav"
import getCategories from "@/actions/get-categories"
import NavbarActions from "./navbar-actions";

interface StoreNavbarProps {
    storeId: string;
}

const StoreNavbar: React.FC<StoreNavbarProps> = async ({ storeId }) => {
    const categories = await getCategories(storeId)
  return (
    <div className="border-b">
        <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">BUKO</p>
                </Link>
                <MainNav data={categories} />
                <NavbarActions />
            </div>
        </Container>   
    </div>
  )
}

export default StoreNavbar