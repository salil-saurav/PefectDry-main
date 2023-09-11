import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        style={{ color: "#d2292d", fontSize: "5rem" }}
        className="spinner"
      />
      <div className="loading-bar">
        <div className="loading-bar-fill"></div>
      </div>
    </div>
  );
};

export default Loading;
