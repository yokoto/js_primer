const program = require('commander');
const fs = require('fs');

program.parse(process.argv);
const filePath = program.args[0];

// 非同期形式
fs.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
    return;
  }
  console.log(file);
});

// 同期形式
// try {
//   const file = fs.readFileSync(filePath);
// } catch (err) {
//   // error handling
// }

