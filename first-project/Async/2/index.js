const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodosByIds = async (ids) => {
  // console.log(ids);

  try {
    const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    console.log("requests:", requests);

    // if (!requests.ok) {
    //   throw new Error("Ошибка в получении данных");
    // }

    let results = await Promise.all(requests);
    console.log("results:", results);

    let dataResults = results.map((data) => {
      console.log("data", data);
      return data.json();
    });

    console.log("dataResults:", dataResults);

    //
  } catch (error) {
    console.error("error таков:", error);
  }
};

getTodosByIds([43, 21, 55, 100, 10]);

//

const getTodosByIds0 = (ids) => {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((data) => data.json());
      return Promise.all(dataResults);
    })
    .then((allTasks) => {
      console.log("allTasks оригинал", allTasks);
    })
    .catch((error) => {
      console.log(error);
    });
};

getTodosByIds0([43, 21, 55, 100, 10]);
