const fs = require('fs').promises;

async function processFiles() {
  try {
    const content1 = await fs.readFile('file1.txt', 'utf8');
    const content2 = await fs.readFile('file2.txt', 'utf8');

    const combinedContent = content1 + content2;

    await fs.writeFile('output.txt', combinedContent);
    console.log("combinedContenet", combinedContent);

    console.log('Files have been processed and combined successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

processFiles();
