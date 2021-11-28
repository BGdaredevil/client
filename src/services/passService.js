const passGenerator = (userId) => {
  userId = extender(userId);

  return userId
    .split("")
    .sort((a, b) => b.localeCompare(a))
    .join("");
};

export default passGenerator;

const extender = (str) => (str.length < 8 ? extender(str + str) : str.slice(0, 8));
