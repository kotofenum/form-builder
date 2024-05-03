import { FieldType } from "./enums";

export interface IFieldConfig {
  label: string;
}

export interface IFieldValidation {
  required: boolean;
}

interface IFieldModel {
  type: FieldType;
  name: string;
  config: IFieldConfig;
  validation: IFieldValidation;
}

export interface ITextFieldConfig extends IFieldConfig {
  placeholder: string;
}

export interface ITextFieldValidation extends IFieldValidation {}

interface ITextFieldModel extends IFieldModel {
  type: FieldType.Text;
  config: ITextFieldConfig;
  validation: ITextFieldValidation;
}

export interface INumberFieldConfig extends IFieldConfig {
  placeholder: string;
}

export interface INumberFieldValidation extends IFieldValidation {
  min: number | null;
  max: number | null;
}

interface INumberFieldModel extends IFieldModel {
  type: FieldType.Number;
  config: INumberFieldConfig;
  validation: INumberFieldValidation;
}

export interface ICheckboxFieldConfig extends IFieldConfig {
  value: boolean;
  options: string[];
}

export interface ICheckboxFieldValidation extends IFieldValidation {
  min: number | null;
  max: number | null;
}

interface ICheckboxFieldModel extends IFieldModel {
  type: FieldType.Checkbox;
  config: ICheckboxFieldConfig;
  validation: ICheckboxFieldValidation;
}

export interface ISelectFieldConfig extends IFieldConfig {
  options: string[]; // TODO: not string
  value: string | null;
}

export interface ISelectFieldValidation extends IFieldValidation {}

interface ISelectFieldModel extends IFieldModel {
  type: FieldType.Select;
  config: ISelectFieldConfig;
  validation: ISelectFieldValidation;
}

type IConfig =
  | ITextFieldConfig
  | INumberFieldConfig
  | ICheckboxFieldConfig
  | ISelectFieldConfig;

export type IValidation =
  | ITextFieldValidation
  | INumberFieldValidation
  | ICheckboxFieldValidation
  | ISelectFieldValidation;

export type IField =
  | ITextFieldModel
  | INumberFieldModel
  | ICheckboxFieldModel
  | ISelectFieldModel; // TODO: naming
