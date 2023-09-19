import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");

    return () => {
      //Unmount 시점에 실행되게 된다.
      console.log("Unmount!");
    };
  }, []);
  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  //-------------------- Mount Test
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("Mount!");
  // }, []);

  // useEffect(() => {
  //   console.log("Update!");
  // });

  // useEffect(() => {
  //   console.log(`count is update : ${count}`);
  //   if (count > 5) {
  //     alert("count가 5를 넘어서 1로 초기화 합니다.");
  //     setCount(1);
  //   }
  // }, [count]);

  // useEffect(() => {
  //   console.log(`text is update : ${text}`);
  // }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}

      {/* //----------------------- Mount Test */}
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}
    </div>
  );
};

export default Lifecycle;
