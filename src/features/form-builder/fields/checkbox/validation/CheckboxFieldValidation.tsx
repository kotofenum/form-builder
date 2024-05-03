import { ICheckboxFieldValidation } from "common/types";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";
interface ICheckboxFieldValidationProps {
  validation: ICheckboxFieldValidation;
  onValidationUpdate: (validation: ICheckboxFieldValidation) => void;
}

export function CheckboxFieldValidation({
  validation,
  onValidationUpdate,
}: ICheckboxFieldValidationProps) {
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
      <FieldSetting label="Min checked">
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
          placeholder="Enter min checked amount"
          disabled={validation.min === null}
          value={validation.min ?? ""}
          min={0}
          onChange={(e) => {
            const newValidation = clone(validation);

            newValidation.min = Number(e.target.value);

            onValidationUpdate(newValidation);
          }}
        />
      </FieldSetting>
      <FieldSetting label="Max checked">
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
          placeholder="Enter max checked amount"
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
