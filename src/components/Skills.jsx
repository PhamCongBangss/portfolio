import JavascriptIcon from "../assets/javascript.png";
import HtmlIcon from "../assets/html.png";
import CssIcon from "../assets/css.jpg";
import ReactIcon from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import ReduxIcon from "../assets/redux.png";
import RouterIcon from "../assets/ReactRouter.png";
import gitIcon from "../assets/git.png";

function Skills() {
  return (
    <div className="max-w-full mt-20">
      <div className="grid justify-items-center m-10 mb-24">
        <h1 className="text-3xl text-[#61892F] mt-10 uppercase"> Skills</h1>
      </div>

      <div className="my-12 flex gap-3 justify-around items-center ">
        <div className="p-4 bg-[#474B4F] hover:scale-125 hover:bg-[#6B6E70] transition-all ease-in-out cursor-pointer ">
          <div className="flex justify-center items-center">
            <img
              src={HtmlIcon}
              alt="icon"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>

          <p className="text-lg uppercase font-bold text-white mt">HTML</p>
        </div>

        <div className="p-4 bg-[#474B4F] hover:bg-[#6B6E70] hover:scale-125 transition-all ease-in-out cursor-pointer ">
          <div className="flex justify-center items-center ">
            <img
              src={CssIcon}
              alt="icon"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>

          <p className="text-lg uppercase font-bold text-center text-white mt-2 ">
            CSS
          </p>
        </div>

        <div className="p-4 bg-[#474B4F] hover:bg-[#6B6E70] hover:scale-125 transition-all ease-in-out cursor-pointer ">
          <div className="flex justify-center items-center">
            <img src={JavascriptIcon} alt="icon" width={50} height={50} />
          </div>

          <p className="text-lg uppercase font-bold text-center text-white mt-2">
            Javascript
          </p>
        </div>

        <div className="p-4 bg-[#474B4F] hover:bg-[#6B6E70] hover:scale-125 transition-all ease-in-out cursor-pointer">
          <div className="flex justify-center items-center">
            <img
              src={ReactIcon}
              alt="icon"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>

          <p className="text-lg uppercase font-bold text-center text-white mt-2">
            React
          </p>
        </div>

        <div className="p-6 bg-[#474B4F] hover:bg-[#6B6E70] hover:scale-125 transition-all ease-in-out cursor-pointer">
          <div className="flex justify-center items-center">
            <img
              src={Tailwind}
              alt="icon"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>

          <p className="text-lg uppercase font-bold text-center text-white mt-2">
            Tailwind
          </p>
        </div>

        <div className="p-4 bg-[#474B4F] hover:bg-[#6B6E70] hover:scale-125 transition-all ease-in-out cursor-pointer">
          <div className="flex justify-center items-center">
            <img
              src={ReduxIcon}
              alt="icon"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>

          <p className="text-lg uppercase font-bold text-center text-white mt-2">
            Redux
          </p>
        </div>

        <div className="p-4 bg-[#474B4F] hover:bg-[#6B6E70] hover:scale-125 transition-all ease-in-out cursor-pointer">
          <div className="flex justify-center items-center">
            <img
              src={RouterIcon}
              alt="icon"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>

          <p className="text-lg uppercase font-bold text-center text-white mt-2">
            React Router
          </p>
        </div>

        <div className="p-4 bg-[#474B4F] hover:bg-[#6B6E70] hover:scale-125 transition-all ease-in-out cursor-pointer">
          <div className="flex justify-center items-center">
            <img
              src={gitIcon}
              alt="icon"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>

          <p className="text-lg uppercase font-bold text-center text-white mt-2">
            git
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
