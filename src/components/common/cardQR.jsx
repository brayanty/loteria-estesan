import styled from "styled-components";
import lotinEstesant from "@assets/qrLotisan.svg";
const CardQR = () => {
  return (
    <StyledWrapper>
      <div className="card w-2/3 h-2/6 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center content">
          <div>
            <img
              className="h-40 w-40"
              src={lotinEstesant}
              alt="QR Lotin Estesan"
            />
          </div>
          <div className="description">
            <p className="title text-2xl text-black font-bold">
              <strong>200.000.000 COP</strong>
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    overflow: visible;
    cursor: pointer;
    position: relative;
  }

  .card::before,
  .content {
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px #00000022;
    transition: transform 300ms, box-shadow 200ms;
  }

  .card::before {
    position: absolute;
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #ee9933;
    transform: rotateZ(5deg);
  }

  .description {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }

  .info {
    color: #00000066;
  }

  .price::before {
    content: "$";
  }

  .price {
    font-weight: bold;
    color: #ee9933;
  }

  .description p {
    margin-bottom: 10px;
  }

  .card .content {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotateZ(-5deg);
  }

  .content .img {
    width: 150px;
    height: fit-content;
  }

  .card:hover::before,
  .card:hover .content {
    transform: rotateZ(0deg);
  }

  .card:active::before,
  .card:active .content {
    box-shadow: none;
  }
`;

export default CardQR;
