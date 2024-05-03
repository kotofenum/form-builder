import {
  Button,
  Card,
  Checkbox,
  Flex,
  Form,
  FormRule,
  Input,
  InputNumber,
  Select,
  Typography,
} from "antd";
import { FieldType } from "common/enums";
import { IField } from "common/types";
import css from "./styles.module.scss";

interface IFormPreviewProps {
  fields: IField[];
  onSubmit: (data: object) => void;
}

const getRulesForField = (field: IField): FormRule[] => {
  // TODO: move to utils
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

export function FormPreview({ fields, onSubmit }: IFormPreviewProps) {
  const [form] = Form.useForm();

  return (
    <Card className={css.formPreview}>
      <Typography.Title className={css.heading} level={2}>
        Form Preview
      </Typography.Title>
      <Form form={form} onFinish={onSubmit}>
        {fields
          .filter((field) => Boolean(field.name))
          .map((field, idx) => (
            <Form.Item
              key={idx}
              name={field.name}
              label={field.config.label}
              rules={getRulesForField(field)}
            >
              {field.type === FieldType.Text && (
                <Input placeholder={field.config.placeholder} />
              )}
              {field.type === FieldType.Number && (
                <InputNumber placeholder={field.config.placeholder} />
              )}
              {field.type === FieldType.Checkbox && (
                <Checkbox.Group
                  options={Array.from(new Set(field.config.options))}
                />
              )}
              {field.type === FieldType.Select && (
                <Select
                  options={Array.from(new Set(field.config.options)).map(
                    (option) => ({
                      label: option,
                      value: option,
                    })
                  )}
                />
              )}
            </Form.Item>
          ))}
        <Flex gap={8}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="default" htmlType="reset">
            Reset
          </Button>
        </Flex>
      </Form>
    </Card>
  );
}
