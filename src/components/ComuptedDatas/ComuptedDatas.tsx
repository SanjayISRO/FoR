interface ComuptedDatasProps {
  computedValue: number | string;
  text: string;
}

const ComuptedDatas: React.FC<ComuptedDatasProps> = ({
  computedValue,
  text,
}) => {
  return (
    <div>
      <h4>{computedValue}</h4>
      <p>{text}</p>
    </div>
  );
};

export default ComuptedDatas;
