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
      className={`bg-gray-700 border w-40 cursor ${
        isSelected ? "opacity-50" : ""
      }`}
    >
      <button
        className="pointer w-full hover:bg-gray-500"
        onClick={props.onClick}
      >
        <p className="pl-6 pr-6 pt-4 pb-4">{props.horarios}</p>
      </button>
    </div>
  );
};

export default Turno;
