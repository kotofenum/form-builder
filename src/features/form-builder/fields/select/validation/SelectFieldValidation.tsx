import { ISelectFieldValidation } from "common/types";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

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
            const newValidation = clone(validation);

            newValidation.required = !newValidation.required;

            onValidationUpdate(newValidation);
          }}
        />
      </FieldSetting>
    </>
  );
}
