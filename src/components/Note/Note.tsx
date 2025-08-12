// Local dependencies
import styles from "./Note.module.css";
import checkbox from "../../assets/images/sidebar_checkbox.png";

interface INote {
  text: string;
  alignment: string;
  widthValue: string;
}

const Note: React.FC<INote> = ({ text, alignment, widthValue }) => {
  return (
    <section className={styles.note} style={{ width: widthValue }}>
      <div style={{ display: "flex", alignItems: alignment }}>
        <img src={checkbox} alt="checkbox image" />
        <p>{text}</p>
      </div>
    </section>
  );
};

export default Note;
