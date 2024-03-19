import { FaRegBuilding } from "react-icons/fa";
import { IoPodium } from "react-icons/io5";
import { CiBookmarkCheck } from "react-icons/ci";
import { TbStack3 } from "react-icons/tb";
import { PiPlantDuotone } from "react-icons/pi";
import { ImClubs } from "react-icons/im";
import { MdArchitecture } from "react-icons/md";
import { SiAltiumdesigner } from "react-icons/si";
import { FaMapPin } from "react-icons/fa6";
import { TfiRulerAlt } from "react-icons/tfi";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

const About = () => {
  return (
    <div className="poppins-semibold gold-star about-container">
      <h2 className="about-heading">About </h2>
      <ul className="about-list">
        <li className="flex justify-center items-center gap-1"><FaRegBuilding className="text-4xl gold-star"/>  42 storeyed project</li>
        <li className="flex justify-center items-center gap-1"><CiBookmarkCheck className="text-4xl gold-star"/> Bookings open</li>
        <li className="flex justify-center items-center gap-1"><IoPodium className="text-4xl gold-star"/> Podium project</li>
        <li className="flex justify-center items-center gap-1"><TbStack3 className="text-4xl gold-star"/> 2 sides open corner project</li>
        <li className="flex justify-center items-center gap-1"><ImClubs className="text-4xl gold-star"/> Modern, fully equipped clubhouse</li>
        <li className="flex justify-center items-center gap-1"><MdArchitecture className="text-4xl gold-star"/> Architecture by Arete Design studio</li>
        <li className="flex justify-center items-center gap-1"><SiAltiumdesigner className="text-4xl gold-star"/>Interior by Mr Zafar Choudhary, Habitat Architects</li>
        <li className="flex justify-center items-center gap-1"><FaMapPin className="text-4xl gold-star"/> Located in sector 83A, near IT City, Mohali, Punjab</li>
        <li className="flex justify-center items-center gap-1"><TfiRulerAlt className="text-4xl gold-star"/> Spanning over 8.01 acres on a 200 feet wide road</li>
        <li className="flex justify-center items-center gap-1"><TbCertificate className="text-4xl gold-star"/> Built on international standards of construction and design</li>
        <li className="flex justify-center items-center gap-1"><PiPlantDuotone className="text-4xl gold-star"/> Rooftop serenity and green spaces</li>
        <li className="flex justify-center items-center gap-1"><MdOutlineSecurity className="text-4xl gold-star"/> Equipped with advanced security systems</li>
      </ul>
    </div>
  );
};

export default About;
