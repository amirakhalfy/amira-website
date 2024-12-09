import React, { useEffect } from "react";
import "./Opensource.css";

export default function Picture() {
  const images = ['amour.png', 'amoura.jpg', 'amira.png'];

  function ImagesComponent() {
    return (
      <>
        {images.map((name) => (
          <img key={name} className="w-40 mx-auto" src={name} alt={name} />
        ))}
      </>
    );
  }

  useEffect(() => {
    const myTimer = setInterval(() => {
      console.log('Timer appelé');
    }, 1000);

    return () => clearInterval(myTimer);
  }, []);

  return (
    <div className="flex items-center justify-between">
      <ImagesComponent />
    </div>
  );
}
