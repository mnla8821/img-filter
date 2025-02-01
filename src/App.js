import { useState } from "react";
import "./App.css";
import myImg1Cat from "./Assets/cat1.jpg";
import myImg2Cat from "./Assets/cat2.jpg";
import myImg3Cat from "./Assets/cat3.jpg";
import myImg4Cat from "./Assets/cat4.jpg";
import myImg5Cat from "./Assets/cat5.jpg";
import myImg6Cat from "./Assets/cat6.jpg";
import myImg7Cat from "./Assets/cat7.jpg";
import myImg1Dog from "./Assets/dog1.jpg";
import myImg2Dog from "./Assets/dog2.jpg";
import myImg3Dog from "./Assets/dog3.jpg";
import myImg4Dog from "./Assets/dog4.jpg";
import myImg1Cow from "./Assets/cow1.jpg";
import myImg2Cow from "./Assets/cow2.jpg";
import MyCoat1 from "./Assets/coat.jpg";
import MyCoat2 from "./Assets/coat2.jpg";
import Mycorrot from "./Assets/corrot.jpg";
import MyWLetter from "./Assets/w.jpg";
import MyYoga from "./Assets/yoga.jpg";
import MyCar from "./Assets/car.jpg";
import { useRef } from "react";
function App() {
  const [serach, setSerach] = useState();
  const ref = useRef();
  // const handleChange = (e) => {
  //   // setSerach(e.target.value);
  // };
  const handleClick = () => {
    setSerach(ref.current.value);
  };
  const Animals = [
    {
      id: 1,
      name: "cat1",
      image: myImg1Cat,
    },
    {
      id: 2,
      name: "cat2",
      image: myImg2Cat,
    },
    {
      id: 3,
      name: "cat3",
      image: myImg3Cat,
    },
    {
      id: 4,
      name: "cat4",
      image: myImg4Cat,
    },
    {
      id: 5,
      name: "cat5",
      image: myImg5Cat,
    },
    {
      id: 6,
      name: "cat6",
      image: myImg6Cat,
    },
    {
      id: 7,
      name: "cat7",
      image: myImg7Cat,
    },
    {
      id: 8,
      name: "dog1",
      image: myImg1Dog,
    },
    {
      id: 9,
      name: "dog2",
      image: myImg2Dog,
    },
    {
      id: 10,
      name: "dog3",
      image: myImg3Dog,
    },
    {
      id: 11,
      name: "dog4",
      image: myImg4Dog,
    },
    {
      id: 12,
      name: "cow1",
      image: myImg1Cow,
    },
    {
      id: 13,
      name: "cow2",
      image: myImg2Cow,
    },
    {
      id: 14,
      name: "coat",
      image: MyCoat1,
    },
    {
      id: 15,
      name: "coat2",
      image: MyCoat2,
    },
    {
      id: 16,
      name: "corrot",
      image: Mycorrot,
    },
    {
      id: 17,
      name: "yoga",
      image: MyYoga,
    },
    {
      id: 18,
      name: "car",
      image: MyCar,
    },
    {
      id: 19,
      name: "w",
      image: MyWLetter,
    },
  ];
  return (
    <div className="App">
      <h1 className="head-line">Unsplash Images</h1>
      <div className="parent">
        <input
          type="text"
          className="my-input"
          placeholder="cat"
          ref={ref}
          // onChange={handleChange}
        />
        <button onClick={() => handleClick()}>Search</button>
      </div>
      <div className="container">
        <div className="row row-col-3 ">
          {Animals &&
            Animals.map((item) =>
              item.name.includes(`${serach}`) == true ? (
                <div className="col " key={item.id}>
                  <img src={item.image} alt="" />
                </div>
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
