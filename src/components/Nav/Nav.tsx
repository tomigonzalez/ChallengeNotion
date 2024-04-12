import { LucideCoffee } from "../Icons/Coffe";
import { LucideHome } from "../Icons/Home";
import NavLinks from "../NavLinks/NavLinks";

const Nav = () => {
  return (
    <header className="w-full h-20 bg-sky-600 items-center justify-between flex">
      <div className="h-full w-1/5 flex justify-around items-center ">
        <a href="/#">
          <h1 className="text-black cursor-pointer hover:text-white">
            <LucideHome fontSize={45}></LucideHome>
          </h1>
        </a>
      </div>
      <nav className="flex w-2/4 h-full justify-around items-center cursor-pointer sm:w-2/5 ">
        <NavLinks link="/reservas">
          <div className="flex flex-col items-center ">
            <LucideCoffee fontSize={40}></LucideCoffee>
            <p>Reservar</p>
          </div>
        </NavLinks>

        <NavLinks link="/misturnos">
          <div className="flex flex-col items-center">
            <LucideCoffee fontSize={40}></LucideCoffee>
            <p>Mis turnos</p>
          </div>
        </NavLinks>
      </nav>
    </header>
  );
};

export default Nav;
