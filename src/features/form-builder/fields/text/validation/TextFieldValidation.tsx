import { ITextFieldValidation } from "common/types";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

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
            const newValidation = clone(validation);

            newValidation.required = !newValidation.required;

            onValidationUpdate(newValidation);
          }}
        />
      </FieldSetting>
    </>
  );
}
