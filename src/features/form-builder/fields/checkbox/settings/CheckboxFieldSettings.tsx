import { ICheckboxFieldConfig, IFieldSettingsProps } from "common/types";
import { FieldOptions } from "components/field-options";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

export function CheckboxFieldSettings({
  config,
  onConfigUpdate,
}: IFieldSettingsProps<ICheckboxFieldConfig>) {
  // TODO: CheckboxGroup
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
