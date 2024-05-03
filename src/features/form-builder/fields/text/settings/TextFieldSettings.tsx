import { ITextInputConfig } from "common/types";
import { FieldSetting } from "components/field-setting";
import { clone } from "ramda";

interface ITextFieldSettingsProps {
  config: ITextInputConfig;
  onConfigUpdate: (config: ITextInputConfig) => void;
}

export function TextFieldSettings({
  config,
  onConfigUpdate,
}: ITextFieldSettingsProps) {
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
