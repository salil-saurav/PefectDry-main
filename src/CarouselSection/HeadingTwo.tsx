import Rectangle from "../assets/Images/Our-customer/Rectangle.png";
import Circle from "../assets/Images/Our-customer/circle.png";
import "./HeadingTwo.css";
export default function Headings() {
  return (
    <>
      <div className="headings">
        <span className="rectangle">
          <img src={Rectangle} alt="Vector" />
        </span>
        <h1>Our Customer Stories</h1>
        <span className="circle">
          <img src={Circle} alt="Vector" />
        </span>
        <p>
          Learn how clients all across New Zealand use Perfect Dry to get a
          clean looking property, rugs, and upholstery in no time.
        </p>
      </div>
    </>
  );
}
