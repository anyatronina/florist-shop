export function generateRandomId(data) {
  const min = 1;
  const max = data.length;
  const randomArr = [];

  while (randomArr.length < 3) {
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!randomArr.includes(id)) {
      randomArr.push(id);
    }
  }

  const newData = data.filter((item) => randomArr.includes(parseInt(item._id)));

  return newData;
}
