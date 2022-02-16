const Icon = (props) => {
  const attributes = {
    width: (props.size || [])[0],
    height: (props.size || [])[1] || (props.size || [])[0],
    opacity: props.opacity,
    fill: props.fill ? props.fill : null,
    className: props.className,
    style: props.style,
  };

  const path = '#' + props.name;

  return (
    <svg ref={props.iconRef} {...attributes}>
      <use xlinkHref={`${path}`} />
    </svg>
  );
}

export default Icon;
