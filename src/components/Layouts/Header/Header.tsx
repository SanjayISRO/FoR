import { Button } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content_header}>
          <ShareOutlinedIcon
            sx={{
              color: "#192a50",
              fontSize: "50px",
            }}
          />
          <p className={styles.title}>Genesys Reason Based Routing</p>
        </div>

        <div>
          <Button
            variant="outlined"
            className={styles.button}
            sx={{
              margin: "0 20px",
            }}
          >
            <div className={styles.loading_label}></div>
          </Button>
          <Button variant="outlined" className={styles.button}>
            <div className={styles.loading_label}></div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
