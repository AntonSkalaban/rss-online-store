import renderPage from "../..";

export const getGridUrl = (e: Event) => {
  const url = new URL(window.location.href);
  let allParams = url.search.substring(1).split('&');

  const target = <HTMLElement>e.target;
  const value = target.dataset?.size;

  if (window.location.href.includes('grid')) {
    allParams = allParams.map((params) => {
      return params.includes('grid')
        ? `grid=${ value }`
        : params;
    }); 

  } else {
    allParams.push(`grid=${ value }`);
    if (!allParams[0]) allParams.shift();
  }

  renderPage(allParams);
}

export const getSortedUrl = (e: Event) => {
  const url = new URL(window.location.href);
  let allParams = url.search.substring(1).split('&');

  const sortOption = <HTMLInputElement>e.target
  const optionValue = sortOption?.value; 

  if (window.location.href.includes('sort')) {
    allParams = allParams.map((params) => {
      return params.includes('sort')
        ? `sort=${ optionValue }`
        : params;
    });

  } else {
    allParams.push(`sort=${ optionValue }`);

    if (!allParams[0]) allParams.shift();
  }

  renderPage(allParams)
};

export  const getSearchedUrl = (e: Event) => {
  const url = new URL(window.location.href);
  let allParams = url.search.substring(1).split('&');

  const target = <HTMLInputElement>e.target;
  const value = target.value.toLocaleLowerCase();

  if (window.location.href.includes('search')) {
    if (value) {
      allParams = allParams.map((params) => {
        return params.includes('search')
          ? `search=${ value }`
          : params;
      }); 
    } else {
      allParams = allParams.filter((params) => !params.includes('search'));
    }

  } else {
    allParams.push(`search=${ value }`);
    if (!allParams[0]) allParams.shift();
  }
        
  renderPage(allParams)
}

export const getFilteredUrl = (e: Event, key: string) => {
  const target = <HTMLInputElement>e.target;
  const value = target.value;
  const isChecked = target.checked;

  const url = new URL(window.location.href);
  let allParams = url.search.substring(1).split('&');

  if (isChecked) {
    if (window.location.href.includes(key)) {
      allParams = allParams.map((param) => {
        return param.includes(key) 
          ? `${ param }↕${ value }`
          : param;
      })
    } else {
      allParams.push(`${ key }=${ value }`);
      if (!allParams[0]) allParams.shift();
    }

  } else {
    const categoryes = allParams.find((param) => param.includes(key))?.split('=')[1].split('%E2%86%95');

    if (categoryes && categoryes.length > 1) {
      allParams = allParams.map((param) => {
        return param.includes(key) 
          ? `${ key }=${ categoryes.filter((brand) => brand !== value ).join('↕') }`
          : param;
      });
    } else {
      allParams = allParams.filter((param) => !param.includes(key));
    }
  }

  renderPage(allParams);
}

export const getSliderUrl = (key: string) => {
  const url = new URL(window.location.href);
  let allParams = url.search.substring(1).split('&');

  const lowerSlider = document.querySelector<HTMLInputElement>(`.lower-${ key }-slider`);
  const upperSlider = document.querySelector<HTMLInputElement>(`.upper-${ key }-slider`);

  if (!lowerSlider || !upperSlider) return;

  const minVal = Math.min(+lowerSlider.value, +upperSlider.value);
  const maxVal = Math.max(+lowerSlider.value, +upperSlider.value);

  if (window.location.href.includes(key)) {
    allParams = allParams.map((params) => {
      return params.includes(key) 
        ? `${ key }=${ minVal }%E2%86%95${ maxVal }`
        : params;
    });

  } else {
    allParams.push(`${ key }=${ minVal }%E2%86%95${ maxVal }`);
    if (!allParams[0]) allParams.shift();
  }

  renderPage(allParams);
}