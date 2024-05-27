import { MemComponent } from "../components/MemComponent";
import data from "../data";
import { useSelector } from "react-redux";

export const HotPage = () => {
  // const upvotes = useSelector((state) => state.upvotes);
  // const downvotes = useSelector((state) => state.downvotes);
  console.log("data==========", data);
  
  return (
    <section>
      <h1 className="heading">Hot <span>mems</span></h1>
      <div className="wrapper">
        {data &&
          data.map((mem) => {
            return mem.upvotes + mem.downvotes > 5 && <MemComponent mem={mem} key={mem.title} />;
          })}
      </div>
    </section>
  );
};
