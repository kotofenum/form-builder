import cn from "classnames";
import React from "react";
import { EditIcon } from "../../icons/EditIcon";
import { SuccessIcon } from "../../icons/SuccessIcon";
import css from "./styles.module.scss";

interface IEditableLabelProps {
  label: string;
  onChange: (label: string) => void;
}

export function EditableLabel({ label, onChange }: IEditableLabelProps) {
  const [labelValue, setLabelValue] = React.useState<string>(label);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const save = () => {
    onChange(labelValue);
  };

  return (
    <div className={css.editableLabel}>
      <div className={css.labelWrapper}>
        {!isEditing ? (
          <span className={css.label} onClick={() => setIsEditing(true)}>
            {label}
          </span>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              save();
              setIsEditing(false); // TODO: do not allow empty string
            }}
          >
            <input
              className={css.input}
              type="text"
              value={labelValue}
              autoFocus
              placeholder="Enter field label" // TODO: style placeholder
              onChange={(e) => setLabelValue(e.target.value)}
              onBlur={() => {
                save();
                setIsEditing(false);
              }}
            />
          </form>
        )}
        {!isEditing ? (
          <button className={css.icon} onClick={() => setIsEditing(true)}>
            <EditIcon />
          </button>
        ) : (
          <button
            className={cn(css.icon, css.save)}
            onClick={() => {
              save();
              setIsEditing(false);
            }}
          >
            <SuccessIcon />
          </button>
        )}
      </div>
    </div>
  );
}
