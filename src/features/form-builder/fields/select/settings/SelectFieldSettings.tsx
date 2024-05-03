import { IFieldSettingsProps, ISelectFieldSettings } from "common/types";
import { FieldOptions } from "components/field-options";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

export function SelectFieldSettings({
  settings,
  onSettingsUpdate,
}: IFieldSettingsProps<ISelectFieldSettings>) {
  return (
    <>
      <FieldSetting label="Options">
        <FieldOptions
          options={settings.options}
          onAdd={(value) => {
            const newSettings = clone(settings);

            newSettings.options.push(value);

            onSettingsUpdate(newSettings);
          }}
          onUpdate={(idx, value) => {
            const newSettings = clone(settings);

            newSettings.options[idx] = value;

            onSettingsUpdate(newSettings);
          }}
        />
      </FieldSetting>
    </>
  );
}
