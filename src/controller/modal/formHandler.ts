export const checkValid = (value: string, re: RegExp, error: HTMLElement) => {
  if (!re.test(value)) error.style.display = 'block';
}

export const hideError = (value: string, re: RegExp, error: HTMLElement) => {
  if (re.test(value) && error.style.display === 'block') error.style.display = 'none';
}

export const checkLength = (target : HTMLInputElement, value: string, length: number) => {
  if (value.length > length) {
    target.value = value.substring(0, length)
  }
}