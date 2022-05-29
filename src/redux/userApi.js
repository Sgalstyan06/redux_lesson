export function userAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Hayk Galstyan",
      });
    }, 1200);
  });
}
