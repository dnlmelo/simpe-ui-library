import { FC } from "react";
import "./Stepper.scss";
import { StepsProps } from "./Stepper.types";

export const Stepper: FC<StepsProps> = (props) => {
  const { activedStep = 0, completedSteps, onClickStep } = props;

  function setActived(i: number) {
    return activedStep === i;
  }

  function setCompleted(i: number) {
    if (completedSteps === "all") return true;

    if (completedSteps === "allBeforeActive") {
      return i < activedStep;
    }
  }

  return (
    <div className="steps" data-testid="Steps">
      {props.steps.map((s, i) => (
        <div
          key={i}
          className="step"
          data-actived={setActived(i)}
          data-completed={setCompleted(i)}
          data-name={`step-${i}`}
          onClick={() => onClickStep && onClickStep(i)}
        >
          <span className="step-count">{i + 1}</span>
          <span className="step-label">{s}</span>
        </div>
      ))}
    </div>
  );
};
