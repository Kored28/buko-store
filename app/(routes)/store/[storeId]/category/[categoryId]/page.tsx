import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "@/components/ui/filter";
import MobileFilters from "@/components/ui/mobile-filters";
import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";

export const revalidate = 0;

interface CategoryPageProps {
    params: Promise<{
        categoryId: string
        storeId: string
    }>,
    searchParams: Promise<{
        sizeId: string;
    }>
}

const CategoryPage: React.FC<CategoryPageProps> = async({ params, searchParams }) => {
    const { categoryId, storeId } = await params;
    const { sizeId } = await searchParams;

    const products = await getProducts({
        categoryId: categoryId,
        sizeId: sizeId
    }, storeId);

    const sizes = await getSizes(storeId);
    const category = await getCategory(categoryId, storeId);

  return (
    <div className="bg-white">
        <Container>
            <Billboard data={category.billboard} />
            <div className="px-4 sm:px-6 lg:px-8 pb-24">
                <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                    <MobileFilters sizes={sizes} />
                    <div className="hidden lg:block">
                        <Filter 
                            valueKey="sizeId"
                            name="Sizes"
                            data={sizes}
                        />
                    </div>
                    <div className="mt-6 lg:col-span-4 lg:mt-4">
                        {products.length === 0 && <NoResult/>}
                        <div 
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4
                            "
                        >
                            {products.map((item) => (
                                <ProductCard key={item.id} data={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CategoryPage