export const retrieveId = () => {
  const lastId = parseInt(localStorage.getItem("lastId"));

  if (lastId >= Number.MAX_SAFE_INTEGER) {
    localStorage.clear();
    return 0;
  }

  return lastId;
};

const tokenizeText = (text, sep) => text.split(" ").join(sep);
const untokenizeText = (text, sep) => text.split(sep).join(" ");

export const retrieveTodos = (lastId) => {
  const todos = [];
  for (let i = 1; i <= lastId; i++) {
    const item = localStorage.getItem(i.toString());

    if (item) {
      const data = item.split(" ");

      todos.push({
        id: i,
        title: untokenizeText(data[0], "~"),
        completed: data[1] === "true",
        created: data[2],
      });
    }
  }

  return todos;
};

export const storeState = ({ lastId, todos }) => {
  localStorage.setItem("lastId", lastId);

  todos.forEach(({ id, title, completed, created }) =>
    localStorage.setItem(
      id.toString(),
      `${tokenizeText(title, "~")} ${completed} ${created}`
    )
  );
};

export const getCurrentDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  return mm + "/" + dd + "/" + today.getFullYear();
};
