import React from "react";
 import  ReactDOM  from "react-dom/client";
 import {books}  from "./details";
 import Student from "./student";

 function Hello(){
  return (
    <>
    <section className="Hello">
      {books.map((info) => {
        console.log(info)
        return <Student{...info} key={books.id}/>;
      })}
    </section>
    </>
  );
 }
 const root= ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Hello/>);