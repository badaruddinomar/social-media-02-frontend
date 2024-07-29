import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ size = 50 }) => {
  const override = {
    borderWidth: "3px",
  };
  return <ClipLoader color={"white"} size={size} cssOverride={override} />;
};

export default Spinner;
