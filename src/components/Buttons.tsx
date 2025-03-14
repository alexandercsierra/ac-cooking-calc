import { ReactElement } from "react";

export const CTA = ({ text }: { text: string }): ReactElement => {
  return (
    <button
      style={{
        borderRadius: "25px",
        padding: "10px 25px",
        boxShadow: "none",
        border: "none",
        fontWeight: "800",
        fontSize: "18px",
        background: "#A2D8E5",
        color: "black",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export const BlueRoundedButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}): ReactElement => {
  return (
    <button
      onClick={onClick}
      className={"cursor-pointer mx-2 justify-center align-items-baseline flex"}
      style={{
        background: "dodgerblue",
        borderRadius: "100%",
        width: "25px",
        height: "25px",
        color: "white",
      }}
    >
      <p>{label}</p>
    </button>
  );
};
