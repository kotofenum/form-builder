import { FieldType } from "./enums";
import {
  ICheckboxFieldSettings,
  ICheckboxFieldValidation,
  INumberFieldSettings,
  INumberFieldValidation,
  ISelectFieldSettings,
  ISelectFieldValidation,
  ITextFieldSettings,
  ITextFieldValidation,
} from "./types";

export const fieldTypeLabels: Record<FieldType, string> = {
  [FieldType.Text]: "Text",
  [FieldType.Number]: "Number",
  [FieldType.Checkbox]: "Checkbox",
  [FieldType.Select]: "Select",
};

export const defaultSettings = {
  [FieldType.Text]: {
    label: "New text field",
    placeholder: "Enter text here",
  } as ITextFieldSettings,
  [FieldType.Number]: {
    label: "New number field",
    placeholder: "Enter number here",
  } as INumberFieldSettings,
  [FieldType.Checkbox]: {
    label: "New checkbox group field",
    options: ["Option 1"],
  } as ICheckboxFieldSettings,
  [FieldType.Select]: {
    label: "New select group field",
    options: ["Option 1"],
  } as ISelectFieldSettings,
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
