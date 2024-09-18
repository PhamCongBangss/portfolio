import Project from "./Project";
import guessingGame from "../assets/guessingGame.png";
import Dice from "../assets/Dice.png";
import BankistApp from "../assets/BankistApp.png";
import pizza from "../assets/PizzaOrdering.png";
import portfolio from "../assets/portfolio.png";
import calculator from "../assets/calculator.png";
function Projects() {
  const projects = [
    {
      use: {
        html: true,
        css: true,
        javascript: true,
        react: false,
        reactRouter: false,
        redux: false,
      },
      projectName: "Calculator",
      description: "Mô phỏng máy tính cầm tay đơn giản",
      projectImg: calculator,
      code: "https://github.com/PhamCongBangss/Calculator",
      web: "https://calculator-sage-pi-68.vercel.app/",
    },
    {
      use: {
        html: true,
        css: true,
        javascript: true,
        react: false,
        reactRouter: false,
        redux: false,
      },
      projectName: "Guessing Number Game",
      description:
        "Trò chơi đoán số trong khoảng từ 1-100 cho đến khi nào đúng kết quả",
      projectImg: guessingGame,
      code: "https://github.com/PhamCongBangss/guessing-number-game",
      web: "https://guessing-number-game-bangphamne.vercel.app/",
    },

    {
      use: {
        html: true,
        css: true,
        javascript: true,
        react: false,
        reactRouter: false,
        redux: false,
      },
      projectName: "Bankist app",
      description:
        "Mô phỏng một app ngân hàng đơn giản, có chức năng kiểm tra đăng nhập, các thao tác chuyển tiền và mượn tiền đơn giản. Hiển thị các thông tin cơ bản, thời gian thực",
      projectImg: BankistApp,
      code: "https://github.com/PhamCongBangss/Bankist-App",
      web: "https://bankist-app-bangpham-ne.vercel.app",
    },

    {
      use: {
        html: false,
        css: false,
        javascript: true,
        react: true,
      },
      projectName: "Portfolio",
      description: "Trang cá nhân về thông tin và kỹ năng của bản thân mình",
      projectImg: portfolio,
      code: "https://github.com/PhamCongBangss/pizza-ordering",
      web: "https://pizza-ordering-bangphamne.vercel.app/",
    },
    {
      use: {
        html: true,
        css: true,
        javascript: true,
        react: false,
        reactRouter: false,
        redux: false,
      },
      projectName: "Dice game",
      description:
        "Trò chơi thao tác giữa 2 người chơi, lần lượt mỗi người quay xúc xắc, sau đó người chơi chọn giữ điểm đó và đổi người chơi, hoặc quay tiếp để tiếp tục cộng dồn điểm. Khi quay ra 1 điểm thì người chơi mất hết điểm hiện có và đổi lượt. Ai đạt 100 điểm trước là người chiến thắng",
      projectImg: Dice,
      code: "https://github.com/PhamCongBangss/Dice-game",
      web: "https://dice-game-bangphamne.vercel.app/",
    },

    {
      use: {
        html: false,
        css: false,
        javascript: true,
        react: true,
        reactRouter: true,
        redux: true,
      },
      projectName: "Pizza Ordering App",
      description:
        "  Trang web mô phỏng việc đặt pizza, có các thao tác nhập thông tin, đặt các món pizza hiện có, các nút bấm tăng giảm số lượng đặt hàng. Hiển thị các thông tin trong giỏ hàng, tự động tính tổng tiền theo đơn đặt hàng. Chức năng điền thông tin cá nhân để xác nhận đặt hàng và sau khi đặt hàng cung cấp ID để kiểm tra thông tin đơn hàng ( giá cả, số lượng, thời gian giao hàng,...)",
      projectImg: pizza,
      code: "https://github.com/PhamCongBangss/pizza-ordering",
      web: "https://pizza-ordering-bangphamne.vercel.app/",
    },
  ];

  return (
    <>
      <div className="max-w-full mt-32">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-[#61892F] mt-10 uppercase"> Projects</h1>
        </div>

        <div className="p-2 md:p-16">
          <div className="grid grid-cols-2 gap-4 p-5">
            {projects.map((project, index) => (
              <Project project={project} key={index} />
            ))}
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Projects;
