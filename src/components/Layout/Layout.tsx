import Nav from "../Nav/Nav";

interface LayoutProps {
  children: React.ReactNode; //significa que puede recibir y renderizar una variedad de contenido.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full p-0 m-0 bg-white overflow-y: auto">
      <Nav></Nav>
      {children}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
