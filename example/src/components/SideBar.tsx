import { useState } from "react";
import { SideBarContainer, SlidingBackground } from "../styles/SideBarStyles";

const SideBarItem = ({ link, name }: { link: string; name: string }) => {
  const [show, setShow] = useState(false);

  const handleMouseOver = () => setShow(true);

  const handleMouseLeave = () => setShow(false);

  return (
    <>
      <SlidingBackground show={show} />
      <li>
        <a
          href={link}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {name}
        </a>
      </li>
    </>
  );
};

export const SideBar = () => {
  return (
    <SideBarContainer>
      <h5>Contents</h5>
      <ul className="sidebar-ul">
        <SideBarItem link="#Top" name="Top" />

        <SideBarItem link="#Demos" name="Demos" />

        <SideBarItem link="#API" name="API" />
      </ul>
    </SideBarContainer>
  );
};
