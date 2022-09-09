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

export { getAllCategories };
