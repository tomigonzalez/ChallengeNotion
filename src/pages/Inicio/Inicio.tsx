import { LucideSquareUserRound } from "../../components/Icons/Cv";
import { LucideGithub } from "../../components/Icons/Github";
import { LucideLinkedin } from "../../components/Icons/Linkedin";
import { LucideWallpaper } from "../../components/Icons/Portafolio";

const Inicio = () => {
  return (
    <section className="w-full h-full text-black text-2xl font-medium flex flex-col justify-center fixed bg-white">
      <div className=" h-32 flex flex-col items-center ">
        <p>Muy buenas me llamo Tomas y este es mi challenge.</p>
        <p>Si queres interactuar con el mismo podes navegar con el menu</p>
      </div>
      <div className="h-72 flex flex-col items-center">
        <p>Aca dejo mis redes, trabajos y como contactarme</p>
        <div className="flex flex-row w-2/5 h-full items-center justify-evenly ">
          <a href="">
            <div className="flex flex-col justify-center items-center hover:drop-shadow-3xl hover:text-purple-500">
              <LucideGithub fontSize={60}></LucideGithub>

              <p>Git Hub</p>
            </div>
          </a>
          <a href="">
            <div className="flex flex-col justify-center items-center hover:drop-shadow-3xl hover:text-purple-500">
              <LucideLinkedin fontSize={60}></LucideLinkedin>
              <p>Linkedin</p>
            </div>
          </a>
          <a href="">
            <div className="flex flex-col justify-center items-center hover:drop-shadow-3xl hover:text-purple-500">
              <LucideSquareUserRound fontSize={60}></LucideSquareUserRound>
              <p>Cv</p>
            </div>
          </a>
          <a href="">
            <div className="flex flex-col justify-center items-center hover:drop-shadow-3xl hover:text-purple-500">
              <LucideWallpaper fontSize={60}></LucideWallpaper>
              <p>Portafolio</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
