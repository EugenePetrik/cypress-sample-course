const fs = require('fs');

module.exports.resetDatabase = () => {
  let filename = 'app/data.json';
  let content = JSON.stringify(
    {
      todos: [],
      accounts: [],
    },
    null,
    2,
  );

  fs.writeFileSync(filename, content);

  return null;
};
