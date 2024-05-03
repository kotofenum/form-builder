import cn from "classnames";
import css from "./styles.module.scss";

interface ISwitchProps<T> {
  options: T[];
  labels?: string[];
  selectedOption: T;
  onSelect: (option: T) => void;
}

export function Switch<T extends string>({
  options,
  labels,
  selectedOption,
  onSelect,
}: ISwitchProps<T>) {
  return (
    <div className={css.switch}>
      {options.map((option, idx) => (
        <div
          key={idx}
          className={cn(css.option, selectedOption === option && css.selected)}
          onClick={() => onSelect(option)}
        >
          {labels?.[idx] ?? option}
        </div>
      ))}
    </div>
  );
}
