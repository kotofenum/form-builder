import { IInput, IInputConfig, InputType } from "../../App";
import { CheckboxFieldSettings } from "../../features/form-builder/fields/checkbox/settings";
import { NumberFieldSettings } from "../../features/form-builder/fields/number/settings";
import { SelectFieldSettings } from "../../features/form-builder/fields/select/settings";
import { TextFieldSettings } from "../../features/form-builder/fields/text/settings";

interface IInputSettingsProps {
  field: IInput;
  onConfigUpdate: (config: IInputConfig) => void;
}

export function InputSettings({ field, onConfigUpdate }: IInputSettingsProps) {
  // TODO: rename to field settings
  switch (
    field.type // TODO: maybe switch not needed, just a generic component with same props?
  ) {
    case InputType.Text:
      return (
        <TextFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
    case InputType.Number:
      return (
        <NumberFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
    case InputType.Checkbox:
      return (
        <CheckboxFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
    case InputType.Select:
      return (
        <SelectFieldSettings
          config={field.config}
          onConfigUpdate={onConfigUpdate}
        />
      );
  }
}
