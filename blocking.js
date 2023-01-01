const fs = require('fs/promises');
const path = require('path');
const read = async () => {
  const result = fs.readFileSync(
    path.join(__dirname, 'package.json'),
    'utf-8'
  );

  console.log(result);
};
read();
