import StoreNavbar from "@/components/store-navbar";

export default async function StoreLayout({
   params,
    children,
  }:{
    params: { storeId: string },
    children: React.ReactNode;
  }) {
    const { storeId } = await params
    return (
      <>
        <StoreNavbar storeId={storeId} />
        {children}
      </>
    );
  }