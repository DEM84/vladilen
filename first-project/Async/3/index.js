const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";
const body = document.querySelector("body");
const dataContainer = document.createElement("ul");
const loader = document.createElement("span");

dataContainer.id = "data-container";
body.append(dataContainer);

loader.id = "loader";
loader.textContent = "Загрузка...";
loader.hidden = true;
dataContainer.append(loader);

const toggleLoader = () => {
  const isHidden = loader.hasAttribute("hidden");
  switch (isHidden) {
    case true:
      loader.removeAttribute("hidden");
      break;
    case false:
      loader.setAttribute("hidden", "");
      break;
  }
};

const renderAlbums = async (data) => {
  toggleLoader();

  try {
    const response = await fetch(data);
    if (!response.ok) throw new Error("Ошибка в запросе данных");
    const dataResults = await response.json();
    const result = dataResults.map((obj) => {
      const el = document.createElement("li");
      el.textContent = obj.title;
      dataContainer.append(el);
    });
  } catch (err) {
    dataContainer.textContent =
      "Произошла ошибка в получении данных об альбомах...";
    console.error(err);
  } finally {
    toggleLoader();
  }
};

renderAlbums(ALBUMS_URL);

// готово
