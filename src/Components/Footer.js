import Fb from "../Assets/img/fb.png";
import X from "../Assets/img/twitter-icon.png";
import gmail from "../Assets/img/gmail_732200.png";
import insta from "../Assets/img/instagram_174855.png";

const Footer = () => {
  return (
    <div className="bg-fuchsia-800  ">
    <div className="px-64 py-40">
      <div className="w-28 h-16 flex space-x-52">
        <h3 className="font-bold text-xl w-[500px]"> connect with US </h3>
        <img src={Fb} />
        <img src={X} />
        <img src={gmail} />
        <img src={insta} />
      </div>
    </div>
    </div>
  );
};
export default Footer;
