import { useLocation } from "react-router";
import { Link } from "react-router-dom";
type Props = {
  link: string;
  children: string | JSX.Element;
};

const NavLinks = (props: Props) => {
  const location = useLocation();

  const estaActivo = location.pathname === props.link;

  return (
    <Link
      to={props.link}
      className={`${
        estaActivo ? "text-white" : "text-black"
      } h-full pt-3 w-20 flex flex-col items-center  hover:text-white`}
    >
      {props.children}
      {estaActivo && <span className="w-full h-2 bg-white"></span>}
    </Link>
  );
};

export default NavLinks;
