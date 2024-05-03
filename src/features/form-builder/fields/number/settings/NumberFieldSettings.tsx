import { IFieldSettingsProps, INumberFieldConfig } from "common/types";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

export function NumberFieldSettings({
  config,
  onConfigUpdate,
}: IFieldSettingsProps<INumberFieldConfig>) {
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
