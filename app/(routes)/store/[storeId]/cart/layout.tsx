import Navbar from "@/components/navbar";

export default async function CartLayout({
    children,
  }:{
    children: React.ReactNode;
  }) {
    return (
      <>
        {children}
      </>
    );
  }