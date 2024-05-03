import { ISelectFieldConfig } from "common/types";
import { FieldOptions } from "components/field-options";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

interface ISelectFieldSettingsProps {
  config: ISelectFieldConfig;
  onConfigUpdate: (config: ISelectFieldConfig) => void;
}

export function SelectFieldSettings({
  config,
  onConfigUpdate,
}: ISelectFieldSettingsProps) {
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
