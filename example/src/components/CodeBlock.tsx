import { CopiedNotice, Pre } from "../styles/CodeBlockStyles";
import { SVG } from "../styles/SVG";

export const CodeBlock = ({
  children,
  show = true,
}: {
  children: string[];
  show?: boolean;
}) => {
  const handleCopy = () => {
    const codeContent = children.join("");
    // Copy text to clipboard.
    navigator.clipboard.writeText(codeContent);

    const copiedNotice = document.getElementById("copiedNotice");
    copiedNotice?.classList.remove("animateCopied");
    void copiedNotice?.offsetWidth; // Triggers a reflow.
    copiedNotice?.classList.add("animateCopied");
  };

  return (
    <>
      <CopiedNotice id="copiedNotice">Copied!</CopiedNotice>
      <Pre show={show}>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          className={"copyIcon"}
          onClick={handleCopy}
        >
          <path
            fillRule="evenodd"
            d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
          ></path>
          <path
            fillRule="evenodd"
            d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
          ></path>
        </SVG>
        <code id="codeContent">{children}</code>
      </Pre>
    </>
  );
};
