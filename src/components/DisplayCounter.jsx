import { useSelector } from "react-redux";
function DisplayCounter() {
  const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4">{counter}</p>;
}
export default DisplayCounter;
