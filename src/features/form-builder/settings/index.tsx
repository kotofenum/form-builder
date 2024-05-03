import { FieldType } from "common/enums";
import { IConfig, IField } from "common/types";
import { CheckboxFieldSettings } from "../fields/checkbox/settings";
import { NumberFieldSettings } from "../fields/number/settings";
import { SelectFieldSettings } from "../fields/select/settings";
import { TextFieldSettings } from "../fields/text/settings";

interface IFieldSettingsProps {
  field: IField;
  onConfigUpdate: (config: IConfig) => void;
}

export const FieldSettings = ({
  field,
  onConfigUpdate,
}: IFieldSettingsProps) => {
  switch (field.type) {
    case FieldType.Text: {
      return (
        <TextFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
    }
    case FieldType.Number: {
      return (
        <NumberFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
    }
    case FieldType.Checkbox: {
      return (
        <CheckboxFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
    }
    case FieldType.Select: {
      return (
        <SelectFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
    }
  }
};
