import { useRef } from "react";
import { useDispatch } from "react-redux";
function Controls() {
  const inputNumber = useRef();

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADDITION",
      payload: inputNumber.current.value,
    });
  };
  const handleSub = () => {
    dispatch({
      type: "SUBTRACTION",
      payload: inputNumber.current.value,
    });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center ">
        <button
          type="button"
          className="btn btn-primary "
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success "
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="input"
          ref={inputNumber}
          placeholder="Enter a number"
          style={{
            borderRadius: "1.5rem",
            minWidth: "30px",
            padding: "7px 15px",
          }}
        />

        <button type="button" className="btn btn-info " onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-danger " onClick={handleSub}>
          Sub
        </button>
      </div>
    </>
  );
}
export default Controls;
