import React from "react";
import styled from "styled-components";
import qrImage from "../../assets/qrLotisan.svg";

const Card = () => {
  const colors = [
    "142,249,252",
    "142,252,204",
    "142,252,157",
    "215,252,142",
    "252,252,142",
    "252,208,142",
    "252,142,142",
    "252,142,239",
    "204,142,252",
    "142,202,252",
  ];

  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="inner">
          {colors.map((color, index) => (
            <div
              key={index}
              className="card"
              style={{
                "--index": index,
                "--color": color,
                "--total": colors.length,
              }}
            >
              <div className="glow">
                <div className="flex items-center justify-between flex-col p-2">
                  <div className="flex flex-wrap flex-col ga-1 items-center justify-center">
                    <div className="font-bold text-white  text-shadow-black text-shadow-2xs text-xs  ">
                      Numero caliente
                    </div>
                    <div>🔥</div>
                    <div className="font-extrabold text-white text-shadow-black text-shadow-2xs  text-xs">
                      Escanea y gana!!!
                    </div>
                  </div>
                  <div className="">
                    <img
                      className=" h-24 w-24"
                      src={qrImage}
                      alt="qr para escanear"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    width: 50vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 700px;
  }

  .inner {
    position: relative;
    transform-style: preserve-3d;
    animation: rotate 90s linear infinite;
    width: 130px;
    height: 170px;
  }

  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(var(--color), 0.3);
    border: 2px solid rgba(var(--color), 0.5);
    border-radius: 15px;
    transform: rotateY(calc((360deg / var(--total)) * var(--index)))
      translateZ(250px);
  }

  .glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(var(--color), 0.4) 0%,
      rgba(var(--color), 0.1) 50%,
      transparent 90%
    );
    opacity: 0.8;
  }

  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(140deg);
      background: rgba(var(--color), 0.9);
    }
    100% {
      transform: rotateY(200deg);
    }
  }
`;

export default Card;
