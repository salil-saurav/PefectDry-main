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
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing </h1>
        <span className="circle">
          <img src={Circle} alt="Vector" />
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolores
          corrupti atque dicta minus eveniet saepe neque fugit obcaecati
        </p>
      </div>
    </>
  );
}
