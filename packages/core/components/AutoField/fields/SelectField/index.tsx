import getClassNameFactory from "../../../../lib/get-class-name-factory";
import styles from "../../styles.module.css";
import { ChevronDown } from "lucide-react";
import { FieldPropsInternal } from "../..";
import { safeJsonParse } from "../../../../lib/safe-json-parse";

const getClassName = getClassNameFactory("Input", styles);

export const SelectField = ({
  field,
  onChange,
  label,
  Label,
  value,
  name,
  readOnly,
  id,
}: FieldPropsInternal) => {
  if (field.type !== "select" || !field.options) {
    return null;
  }

  return (
    <Label
      label={label || name}
      icon={<ChevronDown size={16} />}
      readOnly={readOnly}
    >
      <select
        id={id}
        title={label || name}
        className={getClassName("input")}
        disabled={readOnly}
        onChange={({ target: { value } }) =>
          onChange(safeJsonParse(value) || value)
        }
        value={value}
      >
        {field.options.map((option) => (
          <option
            key={option.label + option.value}
            label={option.label}
            value={option.value as string | number}
          />
        ))}
      </select>
    </Label>
  );
};
