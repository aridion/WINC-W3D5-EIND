const baseURL = `https://wincacademydatabase.firebaseio.com/aron`;
const jsonEnd = `.json`;
const ul = document.querySelector("#to-do");

const getList = async () => {
  try {
    const apiAnswer = await fetch(`${baseURL}/tasks${jsonEnd}`, {
      method: "GET",
    });

    const result = await apiAnswer.json();

    let tasks = Object.keys(result).map((key) => ({
      id: key,
      description: result[key].description,
      done: result[key].done,
    }));

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
    // ul.contentWindow.location.reload(true);
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

// const putList = async (listID, listDesc, listDone) => {
//   try {
//     let apiAnswer = null;
//     if (listDone == true) {
//       let apiAnswer = await fetch(`${baseURL}/tasks${listID}${jsonEnd}`, {
//         method: "PUT",
//         body: `{"description": "${listDesc}", "done": false}`,
//       });
//     } else {
//       let apiAnswer = await fetch(`${baseURL}/tasks${listID}${jsonEnd}`, {
//         method: "PUT",
//         body: `{"description": "${listDesc}", "done": true}`,
//       });
//     }
//     const result = await apiAnswer.json();
//     console.log(`id for new list item: ${result}`);
//     location.reload();
//   } catch (err) {
//     console.log(`this is how you ****ed up in POST: `, err);
//   }
// };
