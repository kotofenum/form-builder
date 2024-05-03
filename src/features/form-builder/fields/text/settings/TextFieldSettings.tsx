import { IFieldSettingsProps, ITextFieldSettings } from "common/types";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

export function TextFieldSettings({
  settings,
  onSettingsUpdate,
}: IFieldSettingsProps<ITextFieldSettings>) {
  return (
    <>
      <FieldSetting label="Placeholder value">
        <input
          type="text"
          placeholder="Enter placeholder value"
          value={settings.placeholder}
          onChange={(e) => {
            const newSettings = clone(settings);

            newSettings.placeholder = e.target.value;

            onSettingsUpdate(newSettings);
          }}
        />
      </FieldSetting>
    </>
  );
}
