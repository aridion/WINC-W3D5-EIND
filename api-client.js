const baseURL = `https://wincacademydatabase.firebaseio.com/aron`;
const jsonEnd = `.json`;
const ul = document.querySelector("#to-do");

// ul.contentWindow.location.reload(true);

const getList = async () => {
  try {
    const apiAnswer = await fetch(`${baseURL}/tasks${jsonEnd}`, {
      method: "GET",
    });

    const result = await apiAnswer.json();

    // console.log("Before (the raw result):", result);
    let tasks = Object.keys(result).map((key) => ({
      id: key,
      description: result[key].description,
      done: result[key].done,
    }));
    // console.log("After the tasks array", tasks);

    return tasks;
  } catch (err) {
    console.log(`this is how you ****ed up in GET: `, err);
  }
};

const postList = async (input) => {
  try {
    const apiAnswer = await fetch(`${baseURL}/tasks${jsonEnd}`, {
      method: "POST",
      body: `{"description": "${input}", "done": false}`,
    });
    const result = await apiAnswer.json();
    console.log(`id for new list item: ${result}`);
    location.reload();
  } catch (err) {
    console.log(`this is how you ****ed up in POST: `, err);
  }
};

const deleteFromList = async (id) => {
  try {
    const apiAnswer = await fetch(`${baseURL}/tasks/${id}${jsonEnd}`, {
      method: "DELETE",
    });
    console.log(
      `using URL in deleteFromList(): ${baseURL}/tasks/${id}${jsonEnd}`
    );
    const result = apiAnswer == null;
    console.log("deleted from firebase with id: ", id);
    location.reload();
  } catch (err) {
    console.log(`this is how you ****ed up in DELETE: `, err);
  }
};
