import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-scroll";

function Nav() {
  const [toggle, setToggle] = useState(false);

  function handleOpenMenu() {
    setToggle(true);
  }

  function handleCloseMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row text-white">
        <div>
          <a
            href="#"
            className="text-[#86C232] font-mono text-3xl tracking-wider flex items-center"
          >
            <CgNametag /> BANGPHAM
          </a>
        </div>
        <div className="space-x-4">
          <div className="'ssm: hidden lg:block space-x-10">
            <Link
              to="skills"
              smooth={true}
              duration={700}
              className="text-[#474B4F] bg-[#86C232]  hover:bg-[#61892F] rounded-full px-5 py-2 text-xl cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={700}
              className="text-[#474B4F] bg-[#86C232]  hover:bg-[#61892F] rounded-full px-5 py-2 text-xl cursor-pointer"
            >
              Projects
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/drive/folders/16PdudGlzsvus5b_5hImex3IelYntwyhQ?usp=sharing"
              className="text-[#474B4F] bg-[#86C232]  hover:bg-[#61892F] rounded-full px-5 py-2 text-xl"
            >
              CV
            </a>
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                onClick={handleCloseMenu}
                size={30}
                className="text-white cursor-pointer"
              />
            ) : (
              <HiMenuAlt1
                onClick={handleOpenMenu}
                size={30}
                className="text-white cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {toggle ? (
        <div className="flex justify-between ml-10 lg:hidden">
          <div>
            <ul>
              <li className="text-white text-xl mb-2 cursor-pointer hover:bg-indigo-800 rounded-full px-5 py-2 ">
                Skills
              </li>
              <li className="text-white text-xl mb-2 cursor-pointer hover:bg-indigo-800 rounded-full px-5 py-2">
                Projects
              </li>
              <li className="text-white text-xl mb-2 cursor-pointer hover:bg-indigo-800 rounded-full px-5 py-2">
                CV
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Nav;
