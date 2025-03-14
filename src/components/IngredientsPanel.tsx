import BeigeContainer from "./BeigeContainer";
import WhiteRoundedBox from "./WhiteRoundedBox";
import { CTA } from "./Buttons";

const IngredientsPanel = () => {
  return (
    <BeigeContainer>
      <>
        <input
          placeholder={"search for ingredients"}
          style={{
            fontSize: "20px",
            fontWeight: "600",
            background: "white",
            color: "black",
            borderRadius: "25px",
            border: "none",
            padding: "10px 25px",
            margin: "20px",
            width: "80%",
          }}
        />
        <WhiteRoundedBox text={"tomato"} bells={100} />
        <WhiteRoundedBox text={"potato"} bells={300} />
        <CTA text={"find recipes"} />
      </>
    </BeigeContainer>
  );
};

export default IngredientsPanel;
