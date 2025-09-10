import { useRouteError } from "react-router";

function Error() {
    const err = useRouteError();
    console.log(err);
    
  return (
    <div className="pt-27">
      <h1>Oops!!!</h1>
      <h2>Something Went Wrong</h2>
    </div>
  );
};

export default Error;
