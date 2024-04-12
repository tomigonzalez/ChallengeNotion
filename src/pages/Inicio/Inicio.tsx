import { LucideSquareUserRound } from "../../components/Icons/Cv";
import { LucideGithub } from "../../components/Icons/Github";
import { LucideLinkedin } from "../../components/Icons/Linkedin";
import { LucideWallpaper } from "../../components/Icons/Portafolio";

const Inicio = () => {
  return (
    <section className="w-full h-full text-black text-xl sm:text-2xl font-medium flex flex-col justify-center fixed bg-white">
      <div className=" h-32 flex flex-col items-center ">
        <p className="text-center">
          Muy buenas me llamo Tomas y este es mi challenge.
        </p>
        <p className="text-center">
          Si queres interactuar con el mismo podes navegar con el menu
        </p>
      </div>
      <div className="h-72 flex flex-col items-center">
        <p className="text-center">
          Aca dejo mis redes, trabajos y como contactarme
        </p>
        <div className="flex flex-row w-full h-full items-center justify-evenly  sm:w-3/5">
          <a href="https://github.com/tomigonzalez" target="_blank">
            <div className="flex flex-col justify-center items-center hover:drop-shadow-3xl hover:text-sky-500">
              <LucideGithub fontSize={60}></LucideGithub>

              <p>Git Hub</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/tomigonzalez" target="_blank">
            <div className="flex flex-col justify-center items-center hover:drop-shadow-3xl hover:text-sky-500">
              <LucideLinkedin fontSize={60}></LucideLinkedin>
              <p>Linkedin</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1veHRzEFCGVP2nDM08Fs5imXDmMsyFvJp/view"
            target="_blank"
          >
            <div className="flex flex-col justify-center items-center hover:drop-shadow-4xl hover:text-sky-500">
              <LucideSquareUserRound fontSize={60}></LucideSquareUserRound>
              <p>Cv</p>
            </div>
          </a>
          <a href="https://portafoliov3-tan.vercel.app/" target="_blank">
            <div className="flex flex-col justify-center items-center hover:drop-shadow-3xl hover:text-sky-500">
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
