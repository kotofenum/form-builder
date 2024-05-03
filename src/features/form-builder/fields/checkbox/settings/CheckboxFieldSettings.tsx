import { ICheckboxInputConfig } from "common/types";
import { FieldSetting } from "components/field-setting";
import { InputOptions } from "components/input-options";
import { clone } from "ramda";

interface ICheckboxFieldSettingsProps {
  config: ICheckboxInputConfig;
  onConfigUpdate: (config: ICheckboxInputConfig) => void;
}

export function CheckboxFieldSettings({
  config,
  onConfigUpdate,
}: ICheckboxFieldSettingsProps) {
  // TODO: CheckboxGroup
  return (
    <>
      <FieldSetting label="Options">
        <InputOptions
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
