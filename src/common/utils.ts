import { FormRule } from "antd";
import { FieldType } from "./enums";
import { IField } from "./types";

export const getRulesForField = (field: IField): FormRule[] => {
  const genericRules: FormRule[] = [{ required: field.validation.required }];

  switch (field.type) {
    case FieldType.Text: {
      const specificRules: FormRule[] = [];

      return [...genericRules, ...specificRules];
    }
    case FieldType.Number: {
      const specificRules: FormRule[] = [];

      if (field.validation.min) {
        specificRules.push({ type: "number", min: field.validation.min });
      }

      if (field.validation.max) {
        specificRules.push({ type: "number", max: field.validation.max });
      }

      return [...genericRules, ...specificRules];
    }
    case FieldType.Checkbox: {
      const specificRules: FormRule[] = [];

      if (field.validation.min) {
        specificRules.push({ min: field.validation.min });
      }

      if (field.validation.max) {
        specificRules.push({ max: field.validation.max });
      }

      return [...genericRules, ...specificRules];
    }
    case FieldType.Select: {
      const specificRules: FormRule[] = [];

      return [...genericRules, ...specificRules];
    }
  }
};
