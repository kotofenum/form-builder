import { FieldType } from "./enums";

export interface IFieldSettings {
  label: string;
}

export interface IFieldValidation {
  required: boolean;
}

interface IFieldModel {
  type: FieldType;
  name: string;
  settings: IFieldSettings;
  validation: IFieldValidation;
}

export interface ITextFieldSettings extends IFieldSettings {
  placeholder: string;
}

export interface ITextFieldValidation extends IFieldValidation {}

interface ITextFieldModel extends IFieldModel {
  type: FieldType.Text;
  settings: ITextFieldSettings;
  validation: ITextFieldValidation;
}

export interface INumberFieldSettings extends IFieldSettings {
  placeholder: string;
}

export interface INumberFieldValidation extends IFieldValidation {
  min: number | null;
  max: number | null;
}

interface INumberFieldModel extends IFieldModel {
  type: FieldType.Number;
  settings: INumberFieldSettings;
  validation: INumberFieldValidation;
}

export interface ICheckboxFieldSettings extends IFieldSettings {
  options: string[];
}

export interface ICheckboxFieldValidation extends IFieldValidation {
  min: number | null;
  max: number | null;
}

interface ICheckboxFieldModel extends IFieldModel {
  type: FieldType.Checkbox;
  settings: ICheckboxFieldSettings;
  validation: ICheckboxFieldValidation;
}

export interface ISelectFieldSettings extends IFieldSettings {
  options: string[];
}

export interface ISelectFieldValidation extends IFieldValidation {}

interface ISelectFieldModel extends IFieldModel {
  type: FieldType.Select;
  settings: ISelectFieldSettings;
  validation: ISelectFieldValidation;
}

export type ISettings =
  | ITextFieldSettings
  | INumberFieldSettings
  | ICheckboxFieldSettings
  | ISelectFieldSettings;

export type IValidation =
  | ITextFieldValidation
  | INumberFieldValidation
  | ICheckboxFieldValidation
  | ISelectFieldValidation;

export type IField =
  | ITextFieldModel
  | INumberFieldModel
  | ICheckboxFieldModel
  | ISelectFieldModel;

export interface IFieldSettingsProps<T extends ISettings> {
  settings: T;
  onSettingsUpdate: (settings: T) => void;
}
