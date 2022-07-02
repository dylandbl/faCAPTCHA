import { Pre } from "../styles/CodeBlockStyles";

export const CodeBlock = ({
  children,
  margin,
  show = true,
}: {
  children: string | string[];
  margin?: "top" | "left";
  show?: boolean;
}) => {
  return (
    <Pre margin={margin} show={show}>
      <code>{children}</code>
    </Pre>
  );
};
