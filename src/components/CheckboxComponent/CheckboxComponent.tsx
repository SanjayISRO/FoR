// Local dependencies
import styles from "./CheckboxComponent.module.css";

interface CheckboxComponentProps {
  title: string;
  items: ICheckboxList[];
  from: string;
}

interface ICheckboxList {
  value: string;
  label: string;
  checked: boolean;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  title,
  items,
  from,
}) => {
  return (
    <section className={styles.checkbox_component_container}>
      <h4>{title}</h4>
      {items &&
        items.length &&
        items.map((item, index) => (
          <div key={from + "_" + index} className={styles.options}>
            <input type="checkbox" value={item.value} checked={item.checked} />
            <span style={{ margin: "0 6px" }}>{item.label}</span>
          </div>
        ))}
    </section>
  );
};

export default CheckboxComponent;
