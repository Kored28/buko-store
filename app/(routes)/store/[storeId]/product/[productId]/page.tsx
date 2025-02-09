import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

interface ProductPageProps {
    params: Promise<{
        productId: string;
        storeId: string;
    }>;
}

const ProductPage: React.FC<ProductPageProps> = async({ params }) => {
    const { productId, storeId } = await params;
    const product = await getProduct(productId, storeId);
    const suggestedproducts = await getProducts({
        categoryId: product?.category?.id
    }, storeId)
  return (
    <div className="bg-white">
        <Container>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grids-col-3 lg:items-start lg:gap-x-8">
                    {/* Gallery */}
                    <Gallery images={product.images}/>
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-5">
                        <Info data={product}/>
                    </div>
                </div>
                <hr  className="my-10"/>
                <ProductList title="Related items" items={suggestedproducts} />
            </div>
        </Container>
    </div>
  )
}

export default ProductPage