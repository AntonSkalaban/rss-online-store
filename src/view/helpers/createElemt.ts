const createElement = (tag: string, className: string) =>  {
  const el = document.createElement(tag);
  if (className) el.classList.add(className);
  return el;
}

export default createElement;