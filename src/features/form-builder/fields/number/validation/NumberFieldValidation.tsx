import { INumberFieldValidation } from "common/types";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

interface INumberFieldValidationProps {
  validation: INumberFieldValidation;
  onValidationUpdate: (validation: INumberFieldValidation) => void;
}

export function NumberFieldValidation({
  validation,
  onValidationUpdate,
}: INumberFieldValidationProps) {
  return (
    <>
      <FieldSetting label="Required" reversed>
        <input
          type="checkbox"
          checked={validation.required}
          onChange={() => {
            const newValidation = clone(validation);

            newValidation.required = !newValidation.required;

            onValidationUpdate(newValidation);
          }}
        />
      </FieldSetting>
      <FieldSetting label="Min value">
        <input
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              const newValidation = clone(validation);

              newValidation.min = 0;

              onValidationUpdate(newValidation);
            } else {
              const newValidation = clone(validation);

              newValidation.min = null;

              onValidationUpdate(newValidation);
            }
          }}
        />
        <input
          type="number"
          placeholder="Enter min value"
          disabled={validation.min === null}
          value={validation.min ?? ""}
          onChange={(e) => {
            const newValidation = clone(validation);

            newValidation.min = Number(e.target.value);

            onValidationUpdate(newValidation);
          }}
        />
      </FieldSetting>
      <FieldSetting label="Max value">
        <input
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              const newValidation = clone(validation);

              newValidation.max = 0;

              onValidationUpdate(newValidation);
            } else {
              const newValidation = clone(validation);

              newValidation.max = null;

              onValidationUpdate(newValidation);
            }
          }}
        />
        <input
          type="number"
          placeholder="Enter max value"
          disabled={validation.max === null}
          value={validation.max ?? ""}
          onChange={(e) => {
            const newValidation = clone(validation);

            newValidation.max = Number(e.target.value);

            onValidationUpdate(newValidation);
          }}
        />
      </FieldSetting>
    </>
  );
}
