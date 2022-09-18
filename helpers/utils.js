const getAllCategories = async () => {
  const response = await fetch(
    "https://supreme-952f0-default-rtdb.firebaseio.com/fw22.json"
  );
  const jsonData = await response.json();

  const categories = [];
  for (const key in jsonData) {
    categories.push({
      id: key,
      ...jsonData[key],
    });
  }

  return categories;
};

const getAllItems = async () => {
  // const response = await fetch(
  //   "https://supreme-952f0-default-rtdb.firebaseio.com/fw22.json"
  // );
  // const jsonData = await response.json();

  const allCategories = await getAllCategories();

  const allItems = [];

  /////////
  // const triangle = { a: 1, b: 2, c: 3 };

  // function ColoredTriangle() {
  //   this.color = "red";
  // }

  // ColoredTriangle.prototype = triangle;

  // const obj = new ColoredTriangle();

  // for (const prop in obj) {
  //   // if (Object.hasOwn(obj, prop)) {
  //   console.log(`obj.${prop} = ${obj[prop]}`);
  //   // }
  // }
  /////////

  allCategories.forEach((category) => {
    // console.log(category);
    let id = "";
    for (const property in category) {
      if (property !== "id") {
        // console.log(`ITEM => ${property}: ${category[property]}`);
        allItems.push({
          category: id,
          item_name: property,
          property: category[property],
        });
      } else {
        id = category[property];
      }
    }
  });

  return allItems;
};

export { getAllCategories, getAllItems };
