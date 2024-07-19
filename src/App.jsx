import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("177");

  const fetchNewAdvice = () => {
    axios
      .get(`https://api.adviceslip.com/advice?cacheBuster=${new Date().getTime()}`)
      .then((res) => {
        setAdvice(res.data.slip.advice);
        setId(res.data.slip.id);
      })
      .catch((error) => {
        alert("Error fetching advice");
      });
  };

  useEffect(() => {
    fetchNewAdvice();
  }, []);

  return (
    <main className="w-full min-h-dvh bg-dark-blue font-manrope">
      <div className="w-full min-h-dvh grid place-items-center p-8">
        <div className="text-light-cyan text-center w-full sm:w-4/5 lg:w-2/5 bg-dark-grayish-blue relative p-4 py-8 md:p-12 lg:p-14 rounded-2xl">
          <h1 className="text-xl text-neon-green mb-8">
            ADVICE <span>#{id}</span>
          </h1>

          <div>
            <p className="md:text-quote text-xl font-bold">{`"${advice}"`}</p>

            <div className="w-full my-8">
              <img
                className="mx-auto"
                src="/images/pattern-divider-desktop.svg"
                alt=""
              />
            </div>
          </div>

          <button
            onClick={fetchNewAdvice}
            className="p-6 rounded-full bg-neon-green absolute -bottom-8 left-[50%] translate-x-[-50%]"
          >
            <img src="/images/icon-dice.svg" alt="" />
          </button>
        </div>
      </div>
    </main>
  );
}
