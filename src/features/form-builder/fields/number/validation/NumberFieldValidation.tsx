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
            const newValidation = clone(validation); // TODO: optimize

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
              const newValidation = clone(validation); // TODO: optimize

              newValidation.min = 0;

              onValidationUpdate(newValidation);
            } else {
              const newValidation = clone(validation); // TODO: optimize

              newValidation.min = null;

              onValidationUpdate(newValidation);
            }
          }}
        />
        <input
          type="number"
          placeholder="Enter min value"
          disabled={validation.min === null}
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
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              const newValidation = clone(validation); // TODO: optimize

              newValidation.max = 0;

              onValidationUpdate(newValidation);
            } else {
              const newValidation = clone(validation); // TODO: optimize

              newValidation.max = null;

              onValidationUpdate(newValidation);
            }
          }}
        />
        <input
          type="number"
          placeholder="Enter max value"
          disabled={validation.max === null}
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
