'use client'
import "./page.css";
import { treatments } from "@/assets/treatments";
import ServiceList from "./components/Body/ServiceList";

const Body = () => {
  return (
    <div className="bodyContainer">
      <ul>
        {treatments.map((treatment) => (
          <ServiceList
            key={treatment.id}
            id={treatment.id}
            imageSrc={treatment.imageSrc}
            serviceName={treatment.treatmentName}
          />
        ))}
      </ul>
      <div className="info">
        Not sure about consultation type? Please, call{" "}
        <a href="#">0203 7959063</a>
      </div>
    </div>
  );
};

export default Body;
