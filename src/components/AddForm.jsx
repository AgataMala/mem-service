import { useForm } from "react-hook-form";
import data from "../data";

export const AddForm = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitted, isSubmitSuccessful } = formState;

  const onSubmit = (formdata) => {
    let newMem = {
      title: formdata.title,
      upvotes: 0,
      downvotes: 0,
      img: `/assets/${formdata.image[0].name}`,
      star: false,
    };
    data.push(newMem);
    console.log("submited", newMem);
    console.log("data", data);
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="image">
          <input
            type="file"
            id="image"
            {...register("image", { required: "Image is required" })}
          />
          {/* <p>{errors.image?.message}</p> */}
        </label>

        <label htmlFor="title">
          Tytuł mema
          <input
            type="text"
            id="title"
            placeholder="tytuł"
            {...register("title", { required: "Title is required" })}
          />
          {/* <p>{errors.title?.message}</p> */}
        </label>
        <button type="submit">Submit</button>
      </form>
      {isSubmitSuccessful && <p>Brawo! Mem się dodał!</p>}
    </div>
  );
};
