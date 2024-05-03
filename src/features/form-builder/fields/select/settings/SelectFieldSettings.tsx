import { IFieldSettingsProps, ISelectFieldConfig } from "common/types";
import { FieldOptions } from "components/field-options";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

export function SelectFieldSettings({
  config,
  onConfigUpdate,
}: IFieldSettingsProps<ISelectFieldConfig>) {
  return (
    <>
      <FieldSetting label="Options">
        <FieldOptions
          options={config.options}
          onAdd={(value) => {
            const newConfig = clone(config); // TODO: optimize

            newConfig.options.push(value);

            onConfigUpdate(newConfig);
          }}
          onUpdate={(idx, value) => {
            const newConfig = clone(config); // TODO: optimize

            newConfig.options[idx] = value;

            onConfigUpdate(newConfig);
          }}
        />
      </FieldSetting>
    </>
  );
}
