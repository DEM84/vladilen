const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const createUser = (name) => {
  const user = document.createElement("li");
  const userAnchor = document.createElement("a");
  userAnchor.href = "#";
  userAnchor.textContent = name;
  user.append(userAnchor);

  return user;
};

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
    }, 1000);
  }
};

const getAllUsers = () => {
  toggleLoader();
  const result = fetch(USERS_URL, {
    method: "GET",
  });

  result
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      setTimeout(() => {
        users.forEach((user) => {
          const userHTML = createUser(user.name);
          dataContainer.append(userHTML);
        });
      }, 1000);
    })
    .catch((error) => {
      console.error("error!", error);
    })
    .finally(() => {
      toggleLoader();
    });
};

getAllUsers();
