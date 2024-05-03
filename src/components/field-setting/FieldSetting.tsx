import cn from "classnames";
import css from "./styles.module.scss";

interface IFieldSettingProps extends React.PropsWithChildren {
  label: string;
  reversed?: boolean;
}

export function FieldSetting({
  label,
  reversed = false,
  children,
}: IFieldSettingProps) {
  // TODO: rename css.controller
  return (
    <label className={cn(css.fieldSetting, reversed && css.reversed)}>
      <div className={css.label}>{label}</div>
      <div className={css.controller}>{children}</div>
    </label>
  );
}