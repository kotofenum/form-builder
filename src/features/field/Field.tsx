import { fieldTypeLabels } from "common/constants";
import { FieldType } from "common/enums";
import { IField, ISettings, IValidation } from "common/types";
import { BlockWrapper } from "components/block-wrapper";
import { EditableLabel } from "components/editable-label";
import { Switch } from "components/switch";
import { FieldSettings } from "features/form-builder/settings";
import { FieldValidation } from "features/form-builder/validation";
import { CloseIcon } from "icons/CloseIcon";
import css from "./styles.module.scss";

interface IFieldProps {
  idx: number;
  field: IField;
  setName: (name: string) => void;
  setLabel: (label: string) => void;
  setType: (type: FieldType) => void;
  onRemove: () => void;
  onSettingsUpdate: (settings: ISettings) => void;
  onValidationUpdate: (validation: IValidation) => void;
}

export function Field({
  idx,
  field,
  setName,
  setLabel,
  setType,
  onRemove,
  onSettingsUpdate,
  onValidationUpdate,
}: IFieldProps) {
  return (
    <div className={css.field}>
      <div className={css.header}>
        <div>#{idx + 1}</div>
        <div className={css.label}>
          <EditableLabel label={field.settings.label} onChange={setLabel} />
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
          <BlockWrapper label="Settings">
            <FieldSettings field={field} onSettingsUpdate={onSettingsUpdate} />
          </BlockWrapper>
        </div>
        <div className={css.validation}>
          <BlockWrapper label="Validation">
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
