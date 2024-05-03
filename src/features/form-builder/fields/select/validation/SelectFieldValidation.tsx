import { clone } from "ramda";
import { ISelectFieldValidation } from "../../../../../App";
import { FieldSetting } from "../../../../../components/field-setting";

interface ISelectFieldValidationProps {
  validation: ISelectFieldValidation;
  onValidationUpdate: (validation: ISelectFieldValidation) => void;
}

export function SelectFieldValidation({
  validation,
  onValidationUpdate,
}: ISelectFieldValidationProps) {
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
    </>
  );
}
