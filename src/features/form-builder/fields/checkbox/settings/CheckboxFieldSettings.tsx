import { ICheckboxFieldConfig } from "common/types";
import { FieldOptions } from "components/field-options";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

interface ICheckboxFieldSettingsProps {
  config: ICheckboxFieldConfig;
  onConfigUpdate: (config: ICheckboxFieldConfig) => void;
}

export function CheckboxFieldSettings({
  config,
  onConfigUpdate,
}: ICheckboxFieldSettingsProps) {
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
