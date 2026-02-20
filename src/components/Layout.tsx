import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-linear-to-br from-slate-950 via-blue-950 to-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  );
};

export default Layout;
