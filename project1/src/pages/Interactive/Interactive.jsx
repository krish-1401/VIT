import React, { useEffect } from 'react';
import './Interactive.css'; // assuming you have a CSS file named Interactive.css
import { assets } from '../../assets/assets'; // assuming you have an assets file containing your image path
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Interactive = () => {
  useEffect(() => {
    const var1 = document.querySelector(".interac_card1");
    const var2 = document.querySelector(".interac_card2");
    const var3 = document.querySelector(".interac_card3");

    const addMouseOverListener = (element, text) => {
      element.addEventListener("mouseover", () => {
        element.style.transform = "scale(4.3)";
        element.style.borderRadius = "10%";
        
        if (element===var2){
          element.style.top = "300px";
          element.style.left = "300px";
        }
        else if (element===var3){
          element.style.top = "-110px";
          element.style.left = "300px";
        }
        else if (element===var1){
          element.style.top = "110px";
          element.style.left = "1300px";
        }

        let textcont = element.querySelector('p');
        if (!textcont) {
          textcont = document.createElement('p');
          textcont.textContent = text;
          textcont.classList.add("inside_p_tag"); // Add class after creating the element
          element.appendChild(textcont);
        }
        

        setTimeout(() => {
          element.style.transform = "";
          element.style.borderRadius = "";
          element.style.top = "";
          element.style.left = "";
          element.removeChild(textcont);
        }, 10000);
      });
    };
    const text1="The STEERING WHEEL serves as the primary interface between a driver and their vehicle, facilitating control and maneuverability. Crafted from materials like leather, wood, or synthetics, its design often incorporates ergonomic features for comfort during long drives. Integral to modern vehicles, it enables precise direction changes through a mechanical linkage to the wheels, translating the driver's input into movement. Beyond its functional role, the steering wheel often houses additional controls for various vehicle functions, such as audio adjustments and hands-free communication. With safety features like integrated airbags and customizable options, the steering wheel remains a vital element in the driving experience."
    addMouseOverListener(var1, text1);
    addMouseOverListener(var2, "The ENGINE stands as the mechanical heart of any vehicle, converting fuel into kinetic energy for propulsion. Typically situated at the front of the vehicle, it comprises intricate systems of pistons, cylinders, and combustion chambers. Fuel ignites within these chambers, driving pistons in a controlled sequence to generate power. Engines vary widely in design and fuel types, from traditional internal combustion engines fueled by gasoline or diesel to electric motors powered by batteries. Their efficiency and performance impact overall vehicle dynamics, with advancements in technology continuously refining power output, fuel economy, and environmental impact, shaping the future of transportation.");
    addMouseOverListener(var3, "WHEELS are fundamental components of vehicles, providing mobility and stability by facilitating movement along surfaces. Typically composed of a circular rim connected to a hub by spokes, they rotate around an axle, transmitting power from the engine to the ground. Wheels come in various sizes, materials, and designs, tailored to suit different vehicles and purposes. They play a crucial role in determining a vehicle's handling, traction, and overall performance, with factors like tire type, tread pattern, and inflation pressure influencing grip and efficiency. As technology advances, innovations in wheel design continue to enhance safety, comfort, and efficiency in transportation.");
  }, []); 

  return (
    <>
      <Header bgcolor=""/>
      <div className="interac_cont">
        <img src={assets.car_remove} alt="" />
        <div className="interac_heading">
          <h1>Know More About Cars</h1>
        </div>
        <div className="interac_image">
          <div className="interac_card1"></div>
          <div className="interac_card2"></div>
          <div className="interac_card3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Interactive;
