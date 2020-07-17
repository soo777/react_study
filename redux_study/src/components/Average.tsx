import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers:any) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a:any, b:any) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e:any) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback((e:any) => {
    // @ts-ignore
    const nextList = list.concat(parseInt(number, 10));
    setList(nextList);
    setNumber("");
    // inputEl.current.focus();
  },
  [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값 : </b> {avg}
      </div>
    </div>
  );
};

export default Average;