const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  users: {
    all: sql('./sql/user/all.sql'),
    create: sql('./sql/user/create.sql'),
    find: sql('./sql/user/find.sql'),
  },
  sentences: {
    get: sql('./sql/sentence/get.sql'),
  },
};

module.exports = sqlProvider;
