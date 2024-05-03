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
            const newValidation = clone(validation); // TODO: optimize

            newValidation.required = !newValidation.required;

            onValidationUpdate(newValidation);
          }}
        />
      </FieldSetting>
      <FieldSetting label="Min checked">
        <input
          type="number"
          placeholder="Enter min checked amount"
          value={validation.min ?? ""} // TODO: ?
          min={0}
          onChange={(e) => {
            const newValidation = clone(validation); // TODO: optimize

            newValidation.min = Number(e.target.value); // TODO: check for undefined

            onValidationUpdate(newValidation);
          }}
        />
      </FieldSetting>
      <FieldSetting label="Max checked">
        <input
          type="number"
          placeholder="Enter max checked amount"
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
