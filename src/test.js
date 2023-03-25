import { useEffect, useState } from "react";
function Test() {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  function handleInputChange(e) {
    setTerm(e.target.value);
  }

  /* This way is to useEffect */
  // useEffect(() => {
  //   let timerId = setTimeout(() => console.log(term), 2000);

  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [term]);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    console.log("Issuing request with ", debouncedTerm);
  }, [debouncedTerm]);

  return (
    <div className="input-wrapper">
      <label htmlFor="db-input">Search</label>
      <input
        type="text"
        id="db-input"
        value={term}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Test;
