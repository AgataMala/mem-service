import { MemComponent } from "../components/MemComponent";
import React from "react";
import { useSelector } from "react-redux";

export const RegularPage = () => {
  const memes = useSelector((state) => state.allMemes);

  return (
    <section>
      <h1 className="heading">
        Regular <span>mems</span>
      </h1>
      <div className="wrapper">
        {memes &&
          memes.map((mem) => {
            return <MemComponent mem={mem} key={mem.title} />;
          })}
      </div>
    </section>
  );
};
