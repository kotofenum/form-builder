import { FieldType } from "common/enums";
import { IField, ISettings } from "common/types";
import { CheckboxFieldSettings } from "../fields/checkbox/settings";
import { NumberFieldSettings } from "../fields/number/settings";
import { SelectFieldSettings } from "../fields/select/settings";
import { TextFieldSettings } from "../fields/text/settings";

interface IFieldSettingsProps {
  field: IField;
  onSettingsUpdate: (settings: ISettings) => void;
}

export const FieldSettings = ({
  field,
  onSettingsUpdate,
}: IFieldSettingsProps) => {
  switch (field.type) {
    case FieldType.Text: {
      return (
        <TextFieldSettings
          settings={field.settings}
          onSettingsUpdate={onSettingsUpdate}
        />
      );
    }
    case FieldType.Number: {
      return (
        <NumberFieldSettings
          settings={field.settings}
          onSettingsUpdate={onSettingsUpdate}
        />
      );
    }
    case FieldType.Checkbox: {
      return (
        <CheckboxFieldSettings
          settings={field.settings}
          onSettingsUpdate={onSettingsUpdate}
        />
      );
    }
    case FieldType.Select: {
      return (
        <SelectFieldSettings
          settings={field.settings}
          onSettingsUpdate={onSettingsUpdate}
        />
      );
    }
  }
};
