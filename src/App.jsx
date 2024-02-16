import "./App.css";
import NavBar from "./Components/NavBar";
import image from "./assets/about-bread.png";
import image2 from "./assets/home-bread.png";

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = () => {
    console.log("heeey!");
  };

  const firstName = "David";
  const lastName = " Folalu";

  return (
    <div>
      <NavBar />
      {arr.map((items, i) => (
        <p key={i}>{items}</p>
      ))}

      <img style={{ width: "100px", height: "100px" }} src="/vite.svg" alt="" />
      <img style={{ width: "250px", height: "20'0px" }} src={image2} alt="" />
      <h1
        style={{
          fontSize: "50px",
          textTransform: "uppercase",
          color: "darkkhaki",
          textAlign: "center",
          border: "solid 1px gold",
          borderRadius: "10px",
        }}
      >
        {firstName + "" + lastName}
      </h1>
      <button onClick={handleClick} className="click">
        Click Me
      </button>
      <button onClick={() => console.log("first")}>hey!</button>
      <img style={{ width: "500px", height: "300px" }} src={image} alt="" />
    </div>
  );
}

export default App;
