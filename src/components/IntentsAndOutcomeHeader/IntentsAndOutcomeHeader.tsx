// Local dependencies
import styles from "./IntentsAndOutcomeHeader.module.css";
import type { SvgIconProps } from "@mui/material/SvgIcon";

interface IntentsAndOutcomeHeaderProps {
  icon: React.ComponentType<SvgIconProps>; // Type for MUI icon component
  heading: string;
}

const IntentsAndOutcomeHeader: React.FC<IntentsAndOutcomeHeaderProps> = ({
  heading,
  icon: IconComponent,
}) => {
  return (
    <section className={styles.container_heading}>
      <IconComponent sx={{ color: "#000046" }} />
      <h4>{heading}</h4>
    </section>
  );
};

export default IntentsAndOutcomeHeader;
