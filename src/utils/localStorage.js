function save(field, content) {
  if (window.localStorage) {
    localStorage.setItem(field, JSON.stringify(content));
    localStorage.setItem(content, 'Alessandro');
  }
}

function get(field) {
  if (window.localStorage) {
    return localStorage.getItem(field);
  }

  return null;
}

export default {
  save,
  get,
}
