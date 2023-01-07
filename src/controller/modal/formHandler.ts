export const checkValid = (e: Event, re: RegExp, error: HTMLElement) => {
  const target = <HTMLInputElement>e.target;
  const value = target.value.trim();

  if (!re.test(value)) error.style.display = 'block';
}

export const hideError =  (e: Event, re: RegExp, error: HTMLElement) => {
  const target = <HTMLInputElement>e.target;
  const value = target.value.trim();

  if (re.test(value) && error.style.display === 'block') error.style.display = 'none';
}