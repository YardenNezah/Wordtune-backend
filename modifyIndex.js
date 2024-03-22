const fs = require('fs');

// Path to the index.html file
const indexPath = 'build/index.html';

// Read the contents of the index.html file
fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Replace the '/admin/' prefix with an empty string
  const modifiedData = data.replace(/\/admin\//g, '');

  // Write the modified data back to the file
  fs.writeFile(indexPath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File modified successfully.');
  });
});
