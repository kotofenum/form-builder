import {
  IFieldValidation,
  IInput,
  IInputConfig,
  InputType,
  inputTypeLabels,
} from "../../App";
import { CloseIcon } from "../../icons/CloseIcon";
import { BlockWrapper } from "../block-wrapper";
import { EditableLabel } from "../editable-label";
import { FieldValidation } from "../field-validation";
import { InputSettings } from "../input-settings/InputSettings";
import { Switch } from "../switch";
import css from "./styles.module.scss";

interface IInputProps {
  idx: number;
  field: IInput;
  setName: (name: string) => void;
  setLabel: (label: string) => void;
  setType: (type: InputType) => void;
  onRemove: () => void;
  onConfigUpdate: (config: IInputConfig) => void;
  onValidationUpdate: (validation: IFieldValidation) => void;
}

export function Input({
  idx,
  field,
  setName,
  setLabel,
  setType,
  onRemove,
  onConfigUpdate, // TODO: maybe use global store
  onValidationUpdate,
}: IInputProps) {
  // TODO: rename to field

  return (
    <div className={css.input}>
      <div className={css.header}>
        <div>#{idx + 1}</div>
        <div className={css.label}>
          <EditableLabel label={field.config.label} onChange={setLabel} />
        </div>
        <button className={css.close} onClick={onRemove}>
          <CloseIcon />
        </button>
      </div>
      <div className={css.main}>
        <div className={css.name}>
          <div className={css.nameLabel}>Name: </div>
          <input
            type="text"
            value={field.name}
            placeholder="Name is required for preview"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={css.type}>
          Field type:
          <Switch
            options={[
              InputType.Text,
              InputType.Number,
              InputType.Checkbox,
              InputType.Select,
            ]}
            labels={[
              inputTypeLabels[InputType.Text],
              inputTypeLabels[InputType.Number],
              inputTypeLabels[InputType.Checkbox],
              inputTypeLabels[InputType.Select],
            ]}
            selectedOption={field.type}
            onSelect={setType}
          />
        </div>
        <div className={css.settings}>
          <BlockWrapper label={`${inputTypeLabels[field.type]} field settings`}>
            <InputSettings field={field} onConfigUpdate={onConfigUpdate} />
          </BlockWrapper>
        </div>
        <div className={css.validation}>
          <BlockWrapper
            label={`${inputTypeLabels[field.type]} field validation`}
          >
            <FieldValidation
              field={field}
              onValidationUpdate={onValidationUpdate}
            />
          </BlockWrapper>
        </div>
      </div>
    </div>
  );
}
