const input = document.querySelector("#add-to-list");
const button = document.querySelector("#add-button");
let allTrashIcons = null;

const clearList = (list) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  console.log("after clearlist is complete");
};

const addFuncTotextInput = () => {
  button.addEventListener("click", () => {
    postList(input.value);
  });
};

const addFuncToTrashIcons = async (icons, list) => {
  await icons.forEach((item) => {
    item.addEventListener("click", () => {
      const listId = list[icons.indexOf(item)].id;
      deleteFromList(listId);
      console.log(`using ID: `, listId);

      // const updateDomAfterDel = async () => {};
      // const reloadDOM = async () => {
      //   await deleteFromList(listId);
      //   clearList(ul);
      //   reloadFunc;
      //   console.log("after all is complete", reloadFunc);

      // reloadDOM();
      // };
    });
  });
};

// ADD TO ELEMENTS TO DOM
const displayFunctionalList = async (list) => {
  const currentList = await list;
  console.log(currentList);

  const displayDomElements = async () => {
    await currentList.forEach((item) => {
      const div = ul.appendChild(document.createElement("div"));
      div.appendChild(document.createElement("li")).innerText =
        item.description;
      div.appendChild(document.createElement("img")).src = "trash.png";
    });
  };

  displayDomElements();

  allTrashIcons = Array.from(document.querySelectorAll("img"));

  console.log(`in functionalList: `, allTrashIcons);

  addFuncToTrashIcons(allTrashIcons, currentList);
};

displayFunctionalList(getList());
addFuncTotextInput();

// console.log(`under functionalList: `, allTrashIcons);

//

// const updateDomAfterDel = async () => {
//   await deleteFromList(id);
// };
// const reloadDOM = async () => {
//   await updateDomAfterDel();
//   clearList(ul);
//   displayDomElements();
//   console.log("after all is complete");
// };

// allTrashIcons.forEach(item => {
//   deleteFunct
// Array.from.liElements.forEach((element) => {});

// const liElements = document.querySelectorAll("li");

// console.log(liElements);

// const deleteFunct = button.addEventListener("click", (id) => {
//   deleteList(id);
//   clearList(ul)
//   getList();
// });
