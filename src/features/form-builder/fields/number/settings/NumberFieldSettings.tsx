import { INumberInputConfig } from "common/types";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

interface INumberFieldSettingsProps {
  config: INumberInputConfig;
  onConfigUpdate: (config: INumberInputConfig) => void;
}

export function NumberFieldSettings({
  config,
  onConfigUpdate,
}: INumberFieldSettingsProps) {
  return (
    <>
      <FieldSetting label="Placeholder value">
        <input
          type="text"
          placeholder="Enter placeholder value"
          value={config.placeholder}
          onChange={(e) => {
            const newConfig = clone(config); // TODO: optimize

            newConfig.placeholder = e.target.value;

            onConfigUpdate(newConfig);
          }}
        />
      </FieldSetting>
    </>
  );
}
