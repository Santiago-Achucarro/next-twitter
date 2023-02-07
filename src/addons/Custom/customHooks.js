const { useState } = require("react");

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  return [
    value,
    setValue,
    { value, onChange: (e) => setValue(e.target.value) },
  ];
};

const getApi = async () => {
  const resp = await fetch("http://localhost:5000/api/post/");

  return resp.json();
};

export { useInput, getApi };
