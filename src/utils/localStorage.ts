export function setCityToLocalStorage(city: string) {
  return localStorage.setItem("lastCity", city);
}

export function removeCityFromLocalStorage() {
  return localStorage.removeItem("lastCity");
}

export function getCityFromLocalStorage() {
  return localStorage.getItem("lastCity");
}
