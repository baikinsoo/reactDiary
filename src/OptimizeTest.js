import React, { useState, useEffect } from "react";

// ---------------------------- 일반적인 React.memo
// const Textview = React.memo(({ text }) => {
//   useEffect(() => {
//     console.log(`Update :: Text : ${text}`);
//   });
//   return <div>{text}</div>;
// });

// const CountView = React.memo(({ count }) => {
//   useEffect(() => {
//     console.log(`Update :: Count : ${count}`);
//   });
//   return <div>{count}</div>;
// });

// ------------------------------ 객체와 변수에 대한 React.memo
const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count : ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - count : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
};

const MemorizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  // ---------------------------- 일반적인 React.memo

  //   const [count, setCount] = useState(1);
  //   const [text, setText] = useState("");

  // ------------------------------ 객체와 변수에 대한 React.memo
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      {/*// ---------------------------- 일반적인 React.memo*/}

      {/* <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <Textview text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}

      {/*// ------------------------------ 객체와 변수에 대한 React.memo*/}

      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <h2>Counter B</h2>
      <MemorizedCounterB obj={obj} />
      <button
        onClick={() =>
          setObj({
            count: obj.count,
          })
        }
      >
        B button
      </button>
    </div>
  );
};

export default OptimizeTest;
