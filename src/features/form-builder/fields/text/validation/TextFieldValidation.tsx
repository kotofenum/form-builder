import { clone } from "ramda";
import { ITextFieldValidation } from "../../../../../App";
import { FieldSetting } from "../../../../../components/field-setting";

interface ITextFieldValidationProps {
  validation: ITextFieldValidation;
  onValidationUpdate: (validation: ITextFieldValidation) => void;
}

export function TextFieldValidation({
  validation,
  onValidationUpdate,
}: ITextFieldValidationProps) {
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
