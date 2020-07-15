import React from "react";
import ss from './loader.module.sass'

function Loader() {
  return (
    <>
      <div className={ss.spinner}> 
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Loader;
