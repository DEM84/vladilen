const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodosByIds = async (ids) => {
  console.log(ids);

  try {
    const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));

    console.log("requests:", requests);

    // if (!requests.ok) {
    //   throw new Error("Ошибка в получении данных");
    // }

    let result = await Promise.all(requests);

    console.log("result:", result);

    const dataResults = await result.map((data) => data.json());

    return dataResults;

    // .then((responses) => {
    //   const dataResults = responses.map((data) => data.json());
    //   return Promise.all(dataResults);
    // })

    // .then((allTasks) => {
    //   console.log("allTasks", allTasks);
    // });
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
      console.log("allTasks0", allTasks);
    })
    .catch((error) => {
      console.log(error);
    });
};

getTodosByIds0([43, 21, 55, 100, 10]);
