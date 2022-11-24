import Button from "./button";

const Card = (props) => {
  return (
    <>
      <div className="m-8 shadow-xl border-2 rounded-lg p-2 flex">
        <img className="rounded-full" src={props.picture.large}></img>
        <div className="p-4">
          <h1>Name : {props.name.first + " " + props.name.last}</h1>
          <h1>Email : {props.email}</h1>
          <h1>Gender : {props.gender}</h1>
          <Button
            onClick={props.onClick}
            className={`p-2 ${
              props.gender === "female" ? "bg-red-400" : "bg-blue-400"
            } text-white rounded`}
            type="submit"
            text="Click Me"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
