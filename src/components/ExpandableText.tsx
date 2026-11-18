import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  max: number;
}

function ExpandableText({ children, max }: ExpandableTextProps) {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      {!show
        ? children.substring(0, max)
        : children.substring(0, children.length)}
      <button onClick={toggleShow}>{!show ? "Show More" : "Show Less"}</button>
    </div>
  );
}

export default ExpandableText;
