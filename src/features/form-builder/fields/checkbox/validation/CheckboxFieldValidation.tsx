import { clone } from "ramda";
import { ICheckboxFieldValidation } from "../../../../../App";
import { FieldSetting } from "../../../../../components/field-setting";

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
            const newValidation = clone(validation); // TODO: optimize

            newValidation.required = !newValidation.required;

            onValidationUpdate(newValidation);
          }}
        />
      </FieldSetting>
      <FieldSetting label="Min value">
        <input
          type="number"
          placeholder="Enter min value"
          value={validation.min ?? ""} // TODO: ?
          onChange={(e) => {
            const newValidation = clone(validation); // TODO: optimize

            newValidation.min = Number(e.target.value); // TODO: check for undefined

            onValidationUpdate(newValidation);
          }}
        />
      </FieldSetting>
      <FieldSetting label="Max value">
        <input
          type="number"
          placeholder="Enter max value"
          value={validation.max ?? ""} // TODO: ?
          onChange={(e) => {
            const newValidation = clone(validation); // TODO: optimize

            newValidation.max = Number(e.target.value); // TODO: check for undefined

            onValidationUpdate(newValidation);
          }}
        />
      </FieldSetting>
    </>
  );
}
