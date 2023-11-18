import { useLocation } from "react-router";

function Country() {
  let { state } = useLocation()
  console.log(state)
  return <div>Country</div>;
}

export default Country;
