import { CheckmarkBackground, SVG } from './SvgComponentStyles';

interface SVGProps {
  size?: number;
}
export const InfoSvg = (props: SVGProps) => {
  const { size = 1.125 } = props;
  return (
    <SVG
      allowHover
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      size={size}
    >
      {/* ! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
      <path d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z' />
    </SVG>
  );
};

interface RefreshSvgProps extends SVGProps {
  spin?: boolean;
}

export const RefreshSvg = (props: RefreshSvgProps) => {
  const { size = 1.125, spin } = props;
  return (
    <SVG
      allowHover
      spin={spin}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      size={size}
    >
      {/* From Octicons */}
      <path
        fillRule='evenodd'
        d='M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z'
      ></path>
    </SVG>
  );
};

export const CheckmarkSvg = () => {
  return (
    <>
      {/* Requires sibling <div> to add a white background, as the 'check' is transparent. */}
      <CheckmarkBackground />
      <SVG
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        width={18}
        height={18}
        fill='#932093'
        positionAbsolute
      >
        <path
          fillRule='evenodd'
          d='M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z'
        ></path>
      </SVG>
    </>
  );
};
