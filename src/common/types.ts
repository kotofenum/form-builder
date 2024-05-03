import { InputType } from "./enums";

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
}

export interface ITextFieldValidation extends IFieldValidation {}

interface ITextInputModel extends IInputModel {
  type: InputType.Text;
  config: ITextInputConfig;
  validation: ITextFieldValidation;
}

export interface INumberInputConfig extends IInputConfig {
  placeholder: string;
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
