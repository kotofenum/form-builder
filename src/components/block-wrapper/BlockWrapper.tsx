import css from "./styles.module.scss";

interface IBlockWrapperProps extends React.PropsWithChildren {
  label: string;
}

export function BlockWrapper({ label, children }: IBlockWrapperProps) {
  return (
    <div className={css.blockWrapper}>
      <div className={css.label}>{label}</div>
      <div className={css.content}>{children}</div>
    </div>
  );
}
