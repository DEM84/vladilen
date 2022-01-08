const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodosByIds = async (ids) => {
  try {
    const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    let results = await Promise.all(requests);
    let dataResults = await results.map((data) => data.json());
    let allTasks = await Promise.all(dataResults);
    console.log("allTasks:", allTasks);
  } catch (error) {
    console.error("error таков:", error);
  }
};

getTodosByIds([43, 21, 55, 100, 10]);

// готово
