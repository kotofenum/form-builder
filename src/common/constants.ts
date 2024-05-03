import { InputType } from "./enums";
import {
  ICheckboxFieldValidation,
  ICheckboxInputConfig,
  INumberFieldValidation,
  INumberInputConfig,
  ISelectFieldValidation,
  ISelectInputConfig,
  ITextFieldValidation,
  ITextInputConfig,
} from "./types";

export const inputTypeLabels: Record<InputType, string> = {
  [InputType.Text]: "Text",
  [InputType.Number]: "Number",
  [InputType.Checkbox]: "Checkbox",
  [InputType.Select]: "Select",
};

export const defaultConfig = {
  [InputType.Text]: {
    label: "New text field",
    placeholder: "Enter text here",
  } as ITextInputConfig, // TODO: do without casting
  [InputType.Number]: {
    label: "New number field",
    placeholder: "Enter number here",
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

export const defaultValidation = {
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
