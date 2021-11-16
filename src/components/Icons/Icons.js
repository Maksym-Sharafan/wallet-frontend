import IconsSVG from './icons.svg';

function Icons({ name, size, className, color }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={color}
      width={size}
      height={size}
    >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}

export default Icons;
