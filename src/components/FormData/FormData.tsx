// 3rd party dependencies
import CloseIcon from "@mui/icons-material/Close";

// Local dependencies
import styles from "./FormData.module.css";

import { useAppContext } from "../../context/AppContext";

const FormData: React.FC = () => {
  
  type dispatchAction = "SET_MODEL_DESCRIPTION" | "SET_MODEL_NAME";

  const { state, dispatch } = useAppContext();

  function handleChange(value: string, actionName: dispatchAction): void {
    dispatch({
      type: actionName,
      payload: value,
    });
  }

  function handleClick(): void {
    dispatch({
      type: "CLEAR_MODEL_NAME",
    });
  }

  return (
    <form className={styles.form_styles}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          value={state.modelName}
          onChange={(e) => handleChange(e.target.value, "SET_MODEL_NAME")}
          placeholder="Name of simulation model"
          autoComplete="off"
        />
        <CloseIcon
          className={styles.closeIcon}
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          name="description"
          id="description"
          rows={7}
          cols={30}
          value={state.modelDescription}
          onChange={(e) =>
            handleChange(e.target.value, "SET_MODEL_DESCRIPTION")
          }
          placeholder="Description of simulation model"
        ></textarea>
      </div>
    </form>
  );
};

export default FormData;
