import cn from "classnames";
import { defaultSettings, defaultValidation } from "common/constants";
import { FieldType } from "common/enums";
import { IField, ISettings, IValidation } from "common/types";
import { Field } from "features/field";
import { FormJson } from "features/form-json";
import { FormPreview } from "features/form-preview";
import { clone } from "ramda";
import React from "react";
import css from "./styles.module.scss";

export function MainPage() {
  const [fields, setFields] = React.useState<IField[]>([]);
  const [submitData, setSubmitData] = React.useState<object | null>(null);

  const handleAdd = React.useCallback(() => {
    const field: IField = {
      type: FieldType.Text,
      name: "",
      settings: defaultSettings[FieldType.Text],
      validation: defaultValidation[FieldType.Text],
    };

    setFields([...fields, field]);
  }, [fields]);

  const replaceField = React.useCallback(
    (fieldIdx: number, field: IField) => {
      const newFields = [
        ...fields.slice(0, fieldIdx),
        field,
        ...fields.slice(fieldIdx + 1),
      ];

      setFields(newFields);
    },
    [fields]
  );

  const updateName = React.useCallback(
    (fieldIdx: number, name: string) => {
      const field = clone(fields[fieldIdx]);

      field.name = name;

      replaceField(fieldIdx, field);
    },
    [fields, replaceField]
  );

  const updateLabel = React.useCallback(
    (fieldIdx: number, label: string) => {
      const field = clone(fields[fieldIdx]);

      field.settings.label = label;

      replaceField(fieldIdx, field);
    },
    [fields, replaceField]
  );

  const updateType = React.useCallback(
    (fieldIdx: number, type: FieldType) => {
      const field = clone(fields[fieldIdx]);

      field.type = type;
      field.settings = defaultSettings[type];
      field.validation = defaultValidation[type];

      replaceField(fieldIdx, field);
    },
    [fields, replaceField]
  );

  const handleRemove = React.useCallback(
    (fieldIdx: number) => {
      setFields([...fields.slice(0, fieldIdx), ...fields.slice(fieldIdx + 1)]);
    },
    [fields]
  );

  const handleSettingsUpdate = React.useCallback(
    (fieldIdx: number, settings: ISettings) => {
      const field = clone(fields[fieldIdx]);

      field.settings = settings;

      replaceField(fieldIdx, field);
    },
    [fields, replaceField]
  );

  const handleValidationUpdate = React.useCallback(
    (fieldIdx: number, validation: IValidation) => {
      const field = clone(fields[fieldIdx]);

      field.validation = validation;

      replaceField(fieldIdx, field);
    },
    [fields, replaceField]
  );

  return (
    <div className={css.mainPage}>
      <div className={css.heading}>Form Builder</div>
      <div className={css.main}>
        <div className={cn(css.section, css.sticky)}>
          <FormJson data={fields} />
        </div>
        <div className={css.section}>
          <div className={css.form}>
            {fields.map((field, idx) => (
              <Field
                key={idx}
                idx={idx}
                field={field}
                setName={(name) => updateName(idx, name)}
                setLabel={(label) => updateLabel(idx, label)}
                setType={(type) => updateType(idx, type)}
                onRemove={() => handleRemove(idx)}
                onSettingsUpdate={(settings) =>
                  handleSettingsUpdate(idx, settings)
                }
                onValidationUpdate={(validation) => {
                  handleValidationUpdate(idx, validation);
                }}
              />
            ))}
            {fields.length === 0 && <span>No fields added yet.</span>}
            <button type="button" className={css.add} onClick={handleAdd}>
              +
            </button>
          </div>
        </div>
        <div className={cn(css.section, css.sticky)}>
          <div>
            <FormPreview fields={fields} onSubmit={setSubmitData} />
            {submitData && <FormJson data={submitData} />}
          </div>
        </div>
      </div>
    </div>
  );
}
