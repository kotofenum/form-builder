import cn from "classnames";
import { clone } from "ramda";
import React from "react";
import css from "./App.module.scss";
import { Input } from "./components/input";
import { FormJson } from "./features/form-json/FormJson";
import { FormPreview } from "./features/form-preview";

export enum InputType {
  Text = "text",
  Number = "number",
  Checkbox = "checkbox",
  Select = "select",
}

export const inputTypeLabels: Record<InputType, string> = {
  [InputType.Text]: "Text",
  [InputType.Number]: "Number",
  [InputType.Checkbox]: "Checkbox",
  [InputType.Select]: "Select",
};

export interface IInputConfig {
  label: string;
}

export interface IFieldValidation {
  required: boolean;
}

interface IInputModel {
  type: InputType;
  name: string;
  config: IInputConfig;
  validation: IFieldValidation;
}

export interface ITextInputConfig extends IInputConfig {
  placeholder: string;
  value: string; // TODO: remove
}

export interface ITextFieldValidation extends IFieldValidation {}

interface ITextInputModel extends IInputModel {
  type: InputType.Text;
  config: ITextInputConfig;
  validation: ITextFieldValidation;
}

export interface INumberInputConfig extends IInputConfig {
  placeholder: string;
  value: number; // TODO: remove
  min: number | null; // TODO: remove
  max: number | null; // TODO: remove
}

export interface INumberFieldValidation extends IFieldValidation {
  min: number | null;
  max: number | null;
}

interface INumberInputModel extends IInputModel {
  type: InputType.Number;
  config: INumberInputConfig;
  validation: INumberFieldValidation;
}

export interface ICheckboxInputConfig extends IInputConfig {
  value: boolean;
  options: string[];
}

export interface ICheckboxFieldValidation extends IFieldValidation {
  min: number | null;
  max: number | null;
}

interface ICheckboxInputModel extends IInputModel {
  type: InputType.Checkbox;
  config: ICheckboxInputConfig;
  validation: ICheckboxFieldValidation;
}

export interface ISelectInputConfig extends IInputConfig {
  options: string[]; // TODO: not string
  value: string | null;
}

export interface ISelectFieldValidation extends IFieldValidation {}

interface ISelectInputModel extends IInputModel {
  type: InputType.Select;
  config: ISelectInputConfig;
  validation: ISelectFieldValidation;
}

type IConfig =
  | ITextInputConfig
  | INumberInputConfig
  | ICheckboxInputConfig
  | ISelectInputConfig;

export type IValidation =
  | ITextFieldValidation
  | INumberFieldValidation
  | ICheckboxFieldValidation
  | ISelectFieldValidation;

export type IInput =
  | ITextInputModel
  | INumberInputModel
  | ICheckboxInputModel
  | ISelectInputModel; // TODO: naming

const defaultConfig = {
  [InputType.Text]: {
    label: "New text field",
    placeholder: "Enter text here",
  } as ITextInputConfig,
  [InputType.Number]: {
    label: "New number field",
    placeholder: "Enter number here",
    min: null,
    max: null,
  } as INumberInputConfig,
  [InputType.Checkbox]: {
    label: "New checkbox group field",
    options: ["Option 1"],
  } as ICheckboxInputConfig,
  [InputType.Select]: {
    label: "New select group field",
    options: ["Option 1"],
  } as ISelectInputConfig,
};

const defaultValidation = {
  [InputType.Text]: {
    required: false,
  } as ITextFieldValidation,
  [InputType.Number]: {
    required: false,
    min: null,
    max: null,
  } as INumberFieldValidation,
  [InputType.Checkbox]: {
    required: false,
    min: null,
    max: null,
  } as ICheckboxFieldValidation,
  [InputType.Select]: {
    required: false,
  } as ISelectFieldValidation,
};

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
