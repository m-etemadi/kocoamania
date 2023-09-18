import { TIMEOUT_SEC } from '../config/config';

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Loading failed! Please try again`));
    }, s * 1000);
  });
}

async function getJSON(url, errorMsg = 'Something went wrong!') {
  const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
  const data = await res.json();
  if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
  return data;
}

function fixCategoryLink(value) {
  const categoryLowerCase = value.toLowerCase();
  const categoryFixed = categoryLowerCase.split(' ').join('-');
  return categoryFixed;
}
function fixCategoryName(value) {
  const parts = value.split('-');

  if (parts.length === 2) {
    const formattedString = parts
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
    return formattedString;
  } else {
    return value;
  }
}

export { getJSON, fixCategoryLink, fixCategoryName };
