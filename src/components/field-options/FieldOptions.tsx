import css from "./styles.module.scss";

interface IFieldOptionsProps {
  options: string[];
  onAdd: (value: string) => void;
  onUpdate: (optionIdx: number, value: string) => void;
}

export function FieldOptions({ options, onAdd, onUpdate }: IFieldOptionsProps) {
  return (
    <div className={css.fieldOptions}>
      {options.map((option, idx) => (
        <input
          key={idx}
          type="string"
          placeholder="Enter option label"
          value={option}
          onChange={(e) => onUpdate(idx, e.target.value)}
        />
      ))}
      <button className={css.add} onClick={() => onAdd("")}>
        +
      </button>
    </div>
  );
}
