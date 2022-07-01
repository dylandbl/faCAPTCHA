import { Pre } from "../styles/CodeBlockStyles";

export const CodeBlock = ({
  children,
  screenWidth,
}: {
  children: string;
  screenWidth: number;
}) => {
  return (
    <Pre screenWidth={screenWidth}>
      <code>{children}</code>
    </Pre>
  );
};
