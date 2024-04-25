import Link from "next/link";

// icons
import { RiInstagramLine, RiFacebookLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/yociusproductions/"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaLinkedin />
      </Link>
      <Link
        href={"https://www.facebook.com/contactYociusProductions"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://www.instagram.com/yociusproductions/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
