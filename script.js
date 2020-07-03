const input = document.querySelector("#add-to-list");
const button = document.querySelector("#add-button");
let allTrashIcons = null;
let allCheckboxes = null;

const clearList = (list) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  console.log("after clearlist is complete");
};

const displayDomElements = async (list) => {
  await list.forEach((item) => {
    const div = ul.appendChild(document.createElement("div"));
    // div.appendChild(document.createElement("input")).type = "checkbox";
    div.appendChild(document.createElement("li")).innerText = item.description;
    div.appendChild(document.createElement("img")).src = "trash.png";
  });
};

const addFuncToTextInput = () => {
  button.addEventListener("click", () => {
    postList(input.value);
  });
};

const addFuncToTrashIcons = async (icons, list) => {
  const currentList = await list;
  await icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const listId = currentList[icons.indexOf(icon)].id;
      deleteFromList(listId);
      console.log(`using ID: `, listId);
    });
  });
};

// const addFuncToCheckboxes = async (boxes, list) => {
//   const currentList = await list;
//   await boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//       const listId = currentList[boxes.indexOf(box)].id;
//       const listDesc = currentList[boxes.indexOf(box)].description;
//       const listDone = currentList[boxes.indexOf(box)].done;
//       deleteFromList(listId, listDesc, listDone);
//       console.log(`put stuff in: `, currentList);
//     });
//   });
// };

// ADD ALL ELEMENTS AND FUNCTIONALITY TO DOM
const displayFunctionalList = async (list) => {
  const currentList = await list;
  console.log(currentList);

  displayDomElements(currentList);

  allTrashIcons = Array.from(document.querySelectorAll("img"));
  // allCheckboxes = Array.from(document.querySelectorAll("div > input"));

  console.log(`in functionalList: `, allTrashIcons);

  addFuncToTrashIcons(allTrashIcons, currentList);
  // addFuncToCheckboxes(allCheckboxes, currentList);
};

displayFunctionalList(getList());
addFuncToTextInput();
