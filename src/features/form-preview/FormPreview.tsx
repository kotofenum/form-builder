import {
  Button,
  Card,
  Checkbox,
  Flex,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
} from "antd";
import { FieldType } from "common/enums";
import { IField } from "common/types";
import { getRulesForField } from "common/utils";
import css from "./styles.module.scss";

interface IFormPreviewProps {
  fields: IField[];
  onSubmit: (data: object) => void;
}

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
              label={field.settings.label}
              rules={getRulesForField(field)}
            >
              {field.type === FieldType.Text && (
                <Input placeholder={field.settings.placeholder} />
              )}
              {field.type === FieldType.Number && (
                <InputNumber placeholder={field.settings.placeholder} />
              )}
              {field.type === FieldType.Checkbox && (
                <Checkbox.Group
                  options={Array.from(new Set(field.settings.options))}
                />
              )}
              {field.type === FieldType.Select && (
                <Select
                  options={Array.from(new Set(field.settings.options)).map(
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
