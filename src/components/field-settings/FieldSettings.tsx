import { FieldType } from "common/enums";
import { IField, IFieldConfig } from "common/types";
import { CheckboxFieldSettings } from "features/form-builder/fields/checkbox/settings";
import { NumberFieldSettings } from "features/form-builder/fields/number/settings";
import { SelectFieldSettings } from "features/form-builder/fields/select/settings";
import { TextFieldSettings } from "features/form-builder/fields/text/settings";

interface IFieldSettingsProps {
  field: IField;
  onConfigUpdate: (config: IFieldConfig) => void;
}

export function FieldSettings({ field, onConfigUpdate }: IFieldSettingsProps) {
  // TODO: rename to field settings
  switch (
    field.type // TODO: maybe switch not needed, just a generic component with same props?
  ) {
    case FieldType.Text:
      return (
        <TextFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
    case FieldType.Number:
      return (
        <NumberFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
    case FieldType.Checkbox:
      return (
        <CheckboxFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
    case FieldType.Select:
      return (
        <SelectFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
  }
}
