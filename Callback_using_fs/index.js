const fs = require('fs');

// Read a file and process its content
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const processedData = data.toUpperCase();

  // Write the processed content to a new file
  fs.writeFile('output.txt', processedData, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log('File has been processed and written successfully.');
  });
});
