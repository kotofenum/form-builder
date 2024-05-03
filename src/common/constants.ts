import { FieldType } from "./enums";
import {
  ICheckboxFieldConfig,
  ICheckboxFieldValidation,
  INumberFieldConfig,
  INumberFieldValidation,
  ISelectFieldConfig,
  ISelectFieldValidation,
  ITextFieldConfig,
  ITextFieldValidation,
} from "./types";

export const fieldTypeLabels: Record<FieldType, string> = {
  [FieldType.Text]: "Text",
  [FieldType.Number]: "Number",
  [FieldType.Checkbox]: "Checkbox",
  [FieldType.Select]: "Select",
};

export const defaultConfig = {
  [FieldType.Text]: {
    label: "New text field",
    placeholder: "Enter text here",
  } as ITextFieldConfig, // TODO: do without casting
  [FieldType.Number]: {
    label: "New number field",
    placeholder: "Enter number here",
  } as INumberFieldConfig,
  [FieldType.Checkbox]: {
    label: "New checkbox group field",
    options: ["Option 1"],
  } as ICheckboxFieldConfig,
  [FieldType.Select]: {
    label: "New select group field",
    options: ["Option 1"],
  } as ISelectFieldConfig,
};

export const defaultValidation = {
  [FieldType.Text]: {
    required: false,
  } as ITextFieldValidation,
  [FieldType.Number]: {
    required: false,
    min: null,
    max: null,
  } as INumberFieldValidation,
  [FieldType.Checkbox]: {
    required: false,
    min: null,
    max: null,
  } as ICheckboxFieldValidation,
  [FieldType.Select]: {
    required: false,
  } as ISelectFieldValidation,
};
