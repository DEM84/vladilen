const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

let names = [];

let onlineUsers = users
  .map((el) => {
    if (el.status === "online") {
      names.push(el.username);
      return el;
    }
  })
  .filter((el) => el);

let usersOnlineNames = names.join(", ");

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);
