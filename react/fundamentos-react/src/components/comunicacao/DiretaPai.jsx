import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={20} isNerd={true}></DiretaFilho>
      <DiretaFilho nome="Gabriel" idade={13} isNerd={false}></DiretaFilho>
    </div>
  );
};
