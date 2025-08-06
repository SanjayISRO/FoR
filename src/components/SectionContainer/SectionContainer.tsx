// Local dependencies
import styles from './SectionContainer.module.css';

interface SectionContainerProps {
    widthValue: string;
    children: any;
    backgroundColor: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({widthValue, children, backgroundColor}) => {
    return (
        <div className={styles.section_container} style={{width: widthValue, backgroundColor: backgroundColor}}>
            {children}
        </div>
    )
}

export default SectionContainer;