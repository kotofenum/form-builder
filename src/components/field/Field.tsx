import { fieldTypeLabels } from "common/constants";
import { FieldType } from "common/enums";
import { IField, IFieldConfig, IFieldValidation } from "common/types";
import { BlockWrapper } from "components/block-wrapper";
import { EditableLabel } from "components/editable-label";
import { FieldSettings } from "components/field-settings";
import { FieldValidation } from "components/field-validation";
import { Switch } from "components/switch";
import { CloseIcon } from "icons/CloseIcon";
import css from "./styles.module.scss";

interface IFieldProps {
  idx: number;
  field: IField;
  setName: (name: string) => void;
  setLabel: (label: string) => void;
  setType: (type: FieldType) => void;
  onRemove: () => void;
  onConfigUpdate: (config: IFieldConfig) => void;
  onValidationUpdate: (validation: IFieldValidation) => void;
}

export function Field({
  idx,
  field,
  setName,
  setLabel,
  setType,
  onRemove,
  onConfigUpdate, // TODO: maybe use global store
  onValidationUpdate,
}: IFieldProps) {
  // TODO: rename to field

  return (
    <div className={css.field}>
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
              FieldType.Text,
              FieldType.Number,
              FieldType.Checkbox,
              FieldType.Select,
            ]}
            labels={[
              fieldTypeLabels[FieldType.Text],
              fieldTypeLabels[FieldType.Number],
              fieldTypeLabels[FieldType.Checkbox],
              fieldTypeLabels[FieldType.Select],
            ]}
            selectedOption={field.type}
            onSelect={setType}
          />
        </div>
        <div className={css.settings}>
          <BlockWrapper label={`${fieldTypeLabels[field.type]} field settings`}>
            <FieldSettings field={field} onConfigUpdate={onConfigUpdate} />
          </BlockWrapper>
        </div>
        <div className={css.validation}>
          <BlockWrapper
            label={`${fieldTypeLabels[field.type]} field validation`}
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
