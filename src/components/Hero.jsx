import { BsFacebook, BsInstagram } from "react-icons/bs";
import HeroPic from "../assets/Aboutme.jpg";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:justify-between ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit">
        <h1 className="text-6xl">Phạm Công Bằng</h1>
        <hr className="mt-4" />
        <p className="mt-10 text-xl font-sans text-[#474B4F]">
          Mình là Bằng, một người ham học hỏi và đang nghiên cứu về lĩnh vực lập
          trình web. Mình là một người học trái ngành và những kiến thức về web
          mình đã và đang có chủ yếu là tự học. Mình làm việc chủ yếu sử dụng
          React và Javascript
        </p>
      </div>

      <div className="w-1/4">
        <img
          src={HeroPic}
          alt="HeroPic"
          width={250}
          height={250}
          className="rounded-full w-full border-8 border-white"
        />
      </div>

      <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">Về mình</p>
        <p className="text-slate-300">
          {`Mình mong muốn xây dựng những trang web tuyệt vời bằng những kỹ năng mình có`}
        </p>
        <Link to="skills" smooth={true} duration={700}>
          <button className="px-10 py-2 my-3 rounded-full text-white bg-[#86C232]  hover:bg-[#61892F]">
            Show more...
          </button>
        </Link>

        <div className="flex items-center mt-5 gap-4 cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=100008659365023"
          >
            <BsFacebook size={30} className="rounded-full" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/sabishii.cpp/"
          >
            <BsInstagram size={30} className="rounded-full" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
