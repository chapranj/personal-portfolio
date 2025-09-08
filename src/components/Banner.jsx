import { useState, useEffect } from "react";
import headerImg from "../assets/img/banner-pic-2.jpeg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Software Engineer"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-900 px-6"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <span className="text-purple-400 uppercase tracking-wide text-sm mb-2 block">
            Welcome to my Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi! I'm Pranjal Chauhan{" "}
            <span className="text-purple-400">{text}</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={() => (window.location.hash = "#connect")}
              className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-transform transform hover:scale-105"
            >
              Let’s Connect <ArrowRightCircle size={25} />
            </button>
            <a
              href="/PranjalResumeGen.pdf"
              download="Pranjal_Resume.pdf"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium text-center transition-transform transform hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={headerImg}
            alt="Header"
            className="rounded-full w-64 md:w-80 shadow-xl transform transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};
