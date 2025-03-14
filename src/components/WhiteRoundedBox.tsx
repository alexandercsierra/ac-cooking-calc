import { ReactElement } from "react";
import { BlueRoundedButton } from "./Buttons";

const WhiteRoundedBox = ({
  text,
  bells,
}: {
  text: string;
  bells: number;
}): ReactElement => {
  return (
    <div
      style={{ background: "white", fontWeight: "600", borderRadius: "25px" }}
      className={"border-none px-6 py-2.5 m-5 w-4/5 flex justify-between"}
    >
      <div>{text}</div>
      <NumItem num={1} />
      <div>{bells}</div>
    </div>
  );
};

const NumItem = ({ num }: { num: number }): ReactElement => {
  return (
    <div className={"flex"}>
      <BlueRoundedButton label={"-"} onClick={() => {}} />
      <div className={"mx-2"}>{num}</div>
      <BlueRoundedButton label={"+"} onClick={() => {}} />
    </div>
  );
};

export default WhiteRoundedBox;
