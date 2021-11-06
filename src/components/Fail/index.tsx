import "./index.css";

type Props = {
  message?: string;
};

const Fail = ({ message = "오류가 발생했습니다" }: Props) => {
  return <div className="fail">{message}</div>;
};

export default Fail;
