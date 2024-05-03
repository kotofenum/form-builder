import { FieldType } from "common/enums";
import { IField, IFieldValidation } from "common/types";
import { CheckboxFieldValidation } from "features/form-builder/fields/checkbox/validation";
import { NumberFieldValidation } from "features/form-builder/fields/number/validation";
import { SelectFieldValidation } from "features/form-builder/fields/select/validation";
import { TextFieldValidation } from "features/form-builder/fields/text/validation";

interface IFieldValidationProps {
  field: IField;
  onValidationUpdate: (config: IFieldValidation) => void;
}

export function FieldValidation({
  field,
  onValidationUpdate,
}: IFieldValidationProps) {
  switch (
    field.type // TODO: maybe switch not needed, just a generic component with same props?
  ) {
    case FieldType.Text:
      return (
        <TextFieldValidation
          validation={field.validation}
          onValidationUpdate={onValidationUpdate}
        />
      );
    case FieldType.Number:
      return (
        <NumberFieldValidation
          validation={field.validation}
          onValidationUpdate={onValidationUpdate}
        />
      );
    case FieldType.Checkbox:
      return (
        <CheckboxFieldValidation
          validation={field.validation}
          onValidationUpdate={onValidationUpdate}
        />
      );
    case FieldType.Select:
      return (
        <SelectFieldValidation
          validation={field.validation}
          onValidationUpdate={onValidationUpdate}
        />
      );
  }
}
