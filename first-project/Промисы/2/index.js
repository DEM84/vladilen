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

const getUsersByIds = (ids) => {
  toggleLoader();
  const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`));

  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((response) => {
        return response.json();
      });
      return Promise.all(dataResults);
    })
    .then((users) => {
      users.forEach((user) => {
        const userHTML = createUser(user.name);
        dataContainer.append(userHTML);
      });
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      toggleLoader();
    });
};

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const createUser = (name) => {
  const user = document.createElement("li");
  const userAnchor = document.createElement("a");
  userAnchor.href = "#";
  userAnchor.textContent = name;
  user.append(userAnchor);

  return user;
};

getUsersByIds([5, 6, 2, 1]);
