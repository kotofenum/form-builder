import { clone } from "ramda";
import { INumberInputConfig } from "../../../../../App";
import { FieldSetting } from "../../../../../components/field-setting";

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
      <FieldSetting label="Min value">
        <input
          type="number"
          placeholder="Enter min value"
          value={config.min ?? ""} // TODO: ?
          onChange={(e) => {
            const newConfig = clone(config); // TODO: optimize

            newConfig.min = Number(e.target.value); // TODO: check for undefined

            onConfigUpdate(newConfig);
          }}
        />
      </FieldSetting>
      <FieldSetting label="Max value">
        <input
          type="number"
          placeholder="Enter max value"
          value={config.max ?? ""} // TODO: ?
          onChange={(e) => {
            const newConfig = clone(config); // TODO: optimize

            newConfig.max = Number(e.target.value); // TODO: check for undefined

            onConfigUpdate(newConfig);
          }}
        />
      </FieldSetting>
    </>
  );
}
