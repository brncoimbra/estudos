const getDog = (data) => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => (img.innerHTML = `<img src="${data.message}">`));
};

const btn = document.getElementById("change-cat");
btn.addEventListener("click", getDog);