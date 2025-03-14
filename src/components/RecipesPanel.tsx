import BeigeContainer from "./BeigeContainer";
import WhiteRoundedBox from "./WhiteRoundedBox";
import { CTA } from "./Buttons";

const RecipesPanel = () => {
  return (
    <BeigeContainer>
      <>
        <div
          style={{
            background: "#D88D31",
            width: "80%",
            borderRadius: "50px",
          }}
        >
          <h1 style={{ color: "#702814" }}>Recipes</h1>
        </div>
        <WhiteRoundedBox text={"tomato puree"} bells={3000} />
        <WhiteRoundedBox text={"potato potage"} bells={2500} />
        <div style={{ display: "flex", width: "90%" }}>
          <CTA text={"get best profit"} />
          <WhiteRoundedBox text={""} bells={0} />
        </div>
      </>
    </BeigeContainer>
  );
};

export default RecipesPanel;
