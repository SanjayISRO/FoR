// Reqct dependencies
import { useState } from "react";

// Local dependencies
import styles from "./SelectComponent.module.css";

interface SelectComponentprops {
  text: string;
  name: string;
  entries: EntryData[];
}

interface EntryData {
  value: string;
  label: string;
}

const SelectComponent: React.FC<SelectComponentprops> = ({
  text,
  name,
  entries,
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={styles.select_component_container}>
      <label>{text}</label>
      <select
        name={name}
        id={name}
        value={selectedValue}
        onChange={handleChange}
      >
        {entries.map((entry) => (
          <option key={entry.value} value={entry.value}>
            {entry.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
