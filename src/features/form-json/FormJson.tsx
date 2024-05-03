import css from "./styles.module.scss";

interface IFormJsonProps {
  data: object;
}

export function FormJson({ data }: IFormJsonProps) {
  return (
    <div className={css.formJson}>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  );
}
