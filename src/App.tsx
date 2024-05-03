import cn from "classnames";
import { defaultConfig, defaultValidation } from "common/constants";
import { InputType } from "common/enums";
import { IFieldValidation, IInput, IInputConfig } from "common/types";
import { Input } from "components/input";
import { FormJson } from "features/form-json";
import { FormPreview } from "features/form-preview";
import { clone } from "ramda";
import React from "react";
import css from "./App.module.scss";

function App() {
  const [fields, setFields] = React.useState<IInput[]>([]);
  const [submitData, setSubmitData] = React.useState<object | null>(null);

  const handleAdd = React.useCallback(() => {
    const field: IInput = {
      type: InputType.Text,
      name: "",
      config: defaultConfig[InputType.Text],
      validation: defaultValidation[InputType.Text],
    };

    setFields([...fields, field]);
  }, [fields]);

  const replaceField = React.useCallback(
    (fieldIdx: number, field: IInput) => {
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

      field.config.label = label;

      replaceField(fieldIdx, field);
    },
    [fields, replaceField]
  );

  const updateType = React.useCallback(
    (fieldIdx: number, type: InputType) => {
      const field = clone(fields[fieldIdx]);

      field.type = type;
      field.config = defaultConfig[type];
      field.validation = defaultValidation[type];
      // TODO: reset config to defaults (with prompt?)

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

  const handleConfigUpdate = React.useCallback(
    (fieldIdx: number, config: IInputConfig) => {
      const field = clone(fields[fieldIdx]);

      field.config = config as any; // TODO: fix typings

      replaceField(fieldIdx, field);
    },
    [fields, replaceField]
  );

  const handleValidationUpdate = React.useCallback(
    (fieldIdx: number, validation: IFieldValidation) => {
      const field = clone(fields[fieldIdx]);

      field.validation = validation as any;

      replaceField(fieldIdx, field);
    },
    [fields, replaceField]
  );

  return (
    <div className={css.app}>
      <div className={cn(css.section, css.sticky)}>
        <FormJson data={fields} />
      </div>
      <div className={css.section}>
        {/* <div className={css.heading}>Form Builder</div> */}
        <div className={css.form}>
          {fields.map((field, idx) => (
            // TODO: use id instead of idx?
            <Input
              //  TODO: rename to field
              key={idx}
              idx={idx}
              field={field}
              setName={(name) => updateName(idx, name)}
              setLabel={(label) => updateLabel(idx, label)}
              setType={(type) => updateType(idx, type)}
              onRemove={() => handleRemove(idx)}
              onConfigUpdate={(config) => handleConfigUpdate(idx, config)}
              onValidationUpdate={(validation) => {
                handleValidationUpdate(idx, validation);
              }}
            />
          ))}
          {/* TODO: add empty message */}
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
  );
}

export default App;
