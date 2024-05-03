import css from "./styles.module.scss";

interface IInputOptionsProps {
  options: string[];
  onAdd: (value: string) => void;
  onUpdate: (optionIdx: number, value: string) => void;
}

export function InputOptions({ options, onAdd, onUpdate }: IInputOptionsProps) {
  return (
    <div className={css.inputOptions}>
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
