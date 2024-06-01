import { MemComponent } from "../components/MemComponent";
import { useSelector } from "react-redux";

export const HotPage = () => {
  const memes = useSelector((state) => state.allMemes);

  return (
    <section>
      <h1 className="heading">
        Hot <span>mems</span>
      </h1>
      <div className="wrapper">
        {memes &&
          memes.map((mem) => {
            return (
              mem.upvotes + mem.downvotes > 5 && (
                <MemComponent mem={mem} key={mem.title} />
              )
            );
          })}
      </div>
    </section>
  );
};
