const sprite = `
  <svg>
    <symbol id="icon-arrow-top" viewBox="0 0 100 100">
      <path d="M50,36.5l37.4,36.9c1,1,2.4,1.6,3.9,1.6c1.5,0,2.8-0.6,3.9-1.6l3.3-3.2c1-1,1.6-2.4,1.6-3.8s-0.6-2.8-1.6-3.8l-44.5-44 c-1-1-2.4-1.6-3.9-1.6c-1.5,0-2.9,0.6-3.9,1.6L1.6,62.5c-1,1-1.6,2.4-1.6,3.8c0,1.4,0.6,2.8,1.6,3.8l3.3,3.2c2.1,2.1,5.6,2.1,7.7,0 L50,36.5z" />
    </symbol>
    <symbol id="icon-arrow-right" viewBox="0 0 100 100">
      <path d="M26.6,87.4c-2.1,2.1-2.1,5.6,0,7.7l3.2,3.3c1,1,2.4,1.6,3.8,1.6c1.4,0,2.8-0.6,3.8-1.6l43.9-44.5c1-1,1.6-2.4,1.6-3.9 c0-1.5-0.6-2.8-1.6-3.9l-44-44.5c-1-1-2.4-1.6-3.8-1.6c-1.4,0-2.8,0.6-3.8,1.6l-3.2,3.3c-1,1-1.6,2.4-1.6,3.9c0,1.5,0.6,2.8,1.6,3.9 L63.5,50L26.6,87.4z" />
    </symbol>
    <symbol id="icon-arrow-bottom" viewBox="0 0 24 24">
      <path d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z" />
    </symbol>
    <symbol id="icon-arrow-left" viewBox="0 0 100 100">
      <path d="M36.5,50l36.9-37.4c1-1,1.6-2.4,1.6-3.9c0-1.5-0.6-2.8-1.6-3.9l-3.2-3.3c-1-1-2.4-1.6-3.8-1.6s-2.8,0.6-3.8,1.6l-44,44.5 c-1,1-1.6,2.4-1.6,3.9c0,1.5,0.6,2.9,1.6,3.9l43.9,44.5c1,1,2.4,1.6,3.8,1.6c1.4,0,2.8-0.6,3.8-1.6l3.2-3.3c2.1-2.1,2.1-5.6,0-7.7 L36.5,50z" />
    </symbol>
  </svg>
`;


const SVGsprite = () => {
  return (
    <div id="svgSprite" style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: sprite }} />
  )
}

export default SVGsprite;