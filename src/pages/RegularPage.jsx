import data from "../data";
import { MemComponent } from "../components/MemComponent";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export const RegularPage = () => {
    const [memes, setMemes] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        setMemes(data)
        dispatch({type:'All-MEMES', payload: memes})
        console.log('memes', memes);
      }, [memes]);
  return (
    <section>
     <h1 className="heading">Regular <span>mems</span></h1>
      <div className="wrapper">
        {memes &&
          memes.map((mem) => {
            return <MemComponent mem={mem} key={mem.title} />;
          })}
      </div>
    </section>
  );
};
