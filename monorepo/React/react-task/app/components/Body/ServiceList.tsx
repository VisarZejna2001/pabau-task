'use client';
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/Context/store";

interface ServiceListProps {
  imageSrc: string;
  serviceName: string;
  id: string;
  // setSteps: React.Dispatch<React.SetStateAction<number>>;
}



const ServiceList: React.FC<ServiceListProps> = ({id, imageSrc, serviceName }) => {
  const router = useRouter();
  const { setStep } = useGlobalContext();
  const handleClick = () => {
    setStep('2');
    router.push(`/treatments/${id}`)
  }
  return (
    <li onClick={handleClick}>
        <div className="imageAndName">
          <img src={imageSrc} alt={serviceName} />
          <p>{serviceName}</p>
        </div>
        <span className="material-symbols-outlined">arrow_forward_ios</span>{" "}
    </li>
  );
};

export default ServiceList;
