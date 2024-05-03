import { clone } from "ramda";
import { ISelectInputConfig } from "../../../../../App";
import { FieldSetting } from "../../../../../components/field-setting";
import { InputOptions } from "../../../../../components/input-options";

interface ISelectFieldSettingsProps {
  config: ISelectInputConfig;
  onConfigUpdate: (config: ISelectInputConfig) => void;
}

export function SelectFieldSettings({
  config,
  onConfigUpdate,
}: ISelectFieldSettingsProps) {
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
