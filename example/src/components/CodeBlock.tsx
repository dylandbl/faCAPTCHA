import { Pre } from "../styles/CodeBlockStyles";

export const CodeBlock = ({
  children,
  show = true,
}: {
  children: string | string[];
  show?: boolean;
}) => {
  return (
    <Pre show={show}>
      <code>{children}</code>
    </Pre>
  );
};
