import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e:any) => {
    setName(e.target.value);
  }

  const onChangeNickname = (e:any) => {
    setNickname(e.target.value);
  }

  useEffect(()=> {
    console.log('렌더링 완료');
    console.log({name, nickname});
  }, [name])

  return (
    <div>
      <div>
        <div>
          <input value={name} onChange={onChangeName} />
          <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
          <div>
            이름 : {name}
          </div>
          <div>
            닉네임 : {nickname}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Info;
