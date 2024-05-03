import { clone } from "ramda";
import { INumberFieldValidation } from "../../../../../App";
import { FieldSetting } from "../../../../../components/field-setting";

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
