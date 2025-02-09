import getStores from '@/actions/get-stores';
import Navbar from '@/components/navbar';
import StoreList from '@/components/store-list';
import Container from '@/components/ui/container'

export const revalidate = 0;

const HomePage = async () => {
  const stores = await getStores();
  return (
    <Container>
      <Navbar />
      <div className='p-6'>
        <StoreList title='Stores' stores={stores}/>
      </div>
    </Container>
  )
}

export default HomePage