import { useRef } from "react";

function UseRefPage() {
  const countRef = useRef(0);

  console.log("Render hua → countRef =", countRef.current);

  const handleClick = () => {
    countRef.current++;
    console.log("Click ke baad countRef =", countRef.current);
  };

  return <button onClick={handleClick}>Click (useRef)</button>;
}

export default UseRefPage;
