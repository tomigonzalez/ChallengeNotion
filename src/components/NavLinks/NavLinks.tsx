import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
type Props = {
  link: string;
  children: string | JSX.Element;
};

const NavLinks = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const estaActivo = location.pathname === props.link;
  const handleClick = () => navigate(props.link);
  return (
    <a
      onClick={handleClick}
      className={`${
        estaActivo ? "text-white" : "text-black"
      } h-full pt-3 w-20 flex flex-col items-center  hover:text-white`}
    >
      {props.children}
      {estaActivo && <span className="w-full h-2 bg-white"></span>}
    </a>
  );
};

export default NavLinks;
