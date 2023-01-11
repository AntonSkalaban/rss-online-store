const getAllParams = () => {
  const url = new URL(window.location.href);
  return url.search.substring(1).split('&');
}

const getValue = (e: Event) => {
  const target = <HTMLInputElement>e.target
  return target.value; 
}

const replaceQueryParam = (allParams: string[], value: string, key: string) => {
  return  allParams.map((params) => {
    return params.includes(key)
      ? `${ key }=${ value }`
      : params;
  });
}

const addQueryParam = (allParams: string[], value: string, key: string) => {
  allParams.push(`${ key }=${ value }`);
  if (!allParams[0]) allParams.shift();
  return allParams;
}



export const getUrlWithOneParam =(e: Event, key: string) => {
  let allParams = getAllParams();
  const value = getValue(e);
 
  if (window.location.href.includes(`${ key }=`)) {
    allParams = replaceQueryParam(allParams, value, `${ key }`);

  } else {
    allParams = addQueryParam(allParams, value, `${ key }`);
  } 
  return allParams;
}

export const getGridUrl = (e: Event) => {
  let allParams = getAllParams();

  const target = <HTMLElement>e.target;
  const value = target.dataset?.size;

  if(value) {
    if (window.location.href.includes('grid')) {
      allParams = replaceQueryParam(allParams, value, 'grid');

    } else {
      allParams = addQueryParam(allParams, value, 'grid');
    }
  }
  return allParams;
}

export const getFilteredUrl = (e: Event, key: string) => {
  let allParams = getAllParams();

  const target = <HTMLInputElement>e.target;
  const value = target.value;
  const isChecked = target.checked;

  if (isChecked) {
    if (window.location.href.includes(key)) {
      allParams = allParams.map((param) => {
        return param.includes(key) 
          ? `${ param }↕${ value }`
          : param;
      })
    } else {
      allParams = addQueryParam(allParams, value , key);
    }

  } else {
    const categoryes = allParams.find((param) => param.includes(key))?.split('=')[1].split('%E2%86%95');

    if (categoryes && categoryes.length > 1) {
      allParams = replaceQueryParam(allParams, `${ categoryes.filter((brand) => brand !== value ).join('↕') }`, key);
    } else {
      allParams = allParams.filter((param) => !param.includes(key));
    }
  }

  return allParams;
}

export const getSliderUrl = (key: string) => {
  let allParams = getAllParams();

  const lowerSlider = document.querySelector<HTMLInputElement>(`.lower-${ key }-slider`);
  const upperSlider = document.querySelector<HTMLInputElement>(`.upper-${ key }-slider`);

  if (lowerSlider  && upperSlider) {
    const minVal = Math.min(+lowerSlider.value, +upperSlider.value);
    const maxVal = Math.max(+lowerSlider.value, +upperSlider.value);

    if (window.location.href.includes(key)) {
      allParams = replaceQueryParam(allParams, `${ minVal }%E2%86%95${ maxVal }`, key);

    } else {
      allParams = addQueryParam(allParams, `${ minVal }%E2%86%95${ maxVal }`, key);
    }
  }
  return allParams;
}