import "../Stepper/Stepper.css";

interface Props {
  currentStep: number;
}

const Stepper = (props: Props) => {
  const steps = ["Categorias", "Turnos", "Confirmar"];

  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${props.currentStep === i + 1 && "active"} ${
              i + 1 < props.currentStep && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < props.currentStep ? <div /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
