interface Props {
  horarios: string;
  key: number;
  onClick: () => void;
  horarioSeleccionado: string | null;
}

const Turno = (props: Props) => {
  const isSelected = props.horarioSeleccionado === props.horarios;

  return (
    <div
      className={`bg-gray-700 border w-20 md:w-32 lg:w-40 cursor ${
        isSelected ? "opacity-50" : ""
      }`}
    >
      <button
        className="pointer w-full hover:bg-gray-500"
        onClick={props.onClick}
      >
        <p className=" pl-5  pr-5  pt-4  pb-4 lg:pl-6  lg:pr-6  lg:pt-4  lg:pb-4">
          {props.horarios}
        </p>
      </button>
    </div>
  );
};

export default Turno;
