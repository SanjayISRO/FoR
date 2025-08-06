import styles from './GraphCard.module.css';

interface GraphCardProps {
    title: string;
}

const GraphCard: React.FC<GraphCardProps> = ({title}) => {
    return (
        <section className={styles.graph_container}>
            {title && <h3>{title}</h3>}
        </section>
    )
}

export default GraphCard;