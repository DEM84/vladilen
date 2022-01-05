const IMG_URL = "https://jsonplaceholder.typicode.com/photos";

const dataContainer = document.querySelector("#data-container");

const loader = document.createElement("span");
loader.id = "loader";
loader.textContent = "Загрузка";
dataContainer.append(loader);
document.getElementById("loader").hidden = true;

const toggleLoader = () => {
  const isHidden = loader.hasAttribute("hidden");

  if (isHidden) {
    setTimeout(() => {
      loader.removeAttribute("hidden");
    }, 1);
  } else {
    setTimeout(() => {
      loader.setAttribute("hidden", "");
    }, 100);
  }
};

const getFastestLoadedPhoto = (ids) => {
  toggleLoader();

  const requests = ids.map((id) => {
    return fetch(`${IMG_URL}/${id}`);
  });

  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((response) => {
        return response.json();
      });
      return Promise.race(dataResults);
    })
    .then((photo) => {
      createImage(photo);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      toggleLoader();
    });
};

const createImage = (el) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const header = document.createElement("h3");

  img.className = "photo-item";

  img.src = el.url;
  img.className = "photo-item__image";

  header.className = "photo-item__title";
  header.innerText = el.title;

  dataContainer.append(li);
  li.append(img);
  li.append(header);
};

getFastestLoadedPhoto([60, 12, 55]);
