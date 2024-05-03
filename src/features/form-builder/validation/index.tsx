import { FieldType } from "common/enums";
import { IField, IValidation } from "common/types";
import { CheckboxFieldValidation } from "../fields/checkbox/validation";
import { NumberFieldValidation } from "../fields/number/validation";
import { SelectFieldValidation } from "../fields/select/validation";
import { TextFieldValidation } from "../fields/text/validation";

interface IFieldValidationProps {
  field: IField;
  onValidationUpdate: (validation: IValidation) => void;
}

export const FieldValidation = ({
  field,
  onValidationUpdate,
}: IFieldValidationProps) => {
  switch (field.type) {
    case FieldType.Text: {
      return (
        <TextFieldValidation
          validation={field.validation}
          onValidationUpdate={onValidationUpdate}
        />
      );
    }
    case FieldType.Number: {
      return (
        <NumberFieldValidation
          validation={field.validation}
          onValidationUpdate={onValidationUpdate}
        />
      );
    }
    case FieldType.Checkbox: {
      return (
        <CheckboxFieldValidation
          validation={field.validation}
          onValidationUpdate={onValidationUpdate}
        />
      );
    }
    case FieldType.Select: {
      return (
        <SelectFieldValidation
          validation={field.validation}
          onValidationUpdate={onValidationUpdate}
        />
      );
    }
  }
};
