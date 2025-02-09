import getBillboard from '@/actions/get-billboard'
import getBillboards from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'

export const revalidate = 0;

interface StorePageProps {
  params: Promise<{
    storeId: string
  }>;
}

const StorePage: React.FC<StorePageProps> = async ({ params }) => {
  const { storeId } = await params
  const products = await getProducts({isFeatured: true}, storeId)
  const billboards = await getBillboards(storeId)
  const billboard = await getBillboard(billboards[0].id, storeId)
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-6">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default StorePage