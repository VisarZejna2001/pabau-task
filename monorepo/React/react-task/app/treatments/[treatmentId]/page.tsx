"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { treatments } from "@/assets/treatments";
import { useGlobalContext } from "@/app/Context/store";
import "./treatment.css";

interface IParams {
  treatmentId?: string;
}

const TreatmentPage = ({ params }: { params: IParams }) => {
  const router = useRouter();
  const { treatmentId } = params;
  const treatment = treatments.find(
    (treatment) => treatment.id === treatmentId
  );
  const { setStep } = useGlobalContext();

  useEffect(() => {
    setStep('2')
  },[])

  const handleReturnButton = () => {
    setStep("1");
    router.push("/");
  };

  if (treatment === undefined) {
    return (
      <div className="treatmentPageContainer">
        <h1>Oops, this page was not found.</h1>
        <button className="button" onClick={handleReturnButton}>
          Return
        </button>
      </div>
    );
  }

  return (
    <div className="treatmentPageContainer">
      <img src={treatment?.imageSrc} alt={treatment?.treatmentName} />
      <div className="treatmentInfo">
        <h1>{treatment?.treatmentName}</h1>
        <button className="button" onClick={handleReturnButton}>
          Return
        </button>
      </div>
    </div>
  );
};

export default TreatmentPage;
