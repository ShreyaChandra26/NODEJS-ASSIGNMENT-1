const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, fileContent, (err) => {
      if (err) {
        reject(err);
      }

     resolve(fileContent)
    });
    resolve(console.log(fileContent))
  });
};

myFileWriter("File.txt", "Hello");

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const myFileReader = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(console.log(data));
    });
  });
};

myFileReader("File.txt");

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


const myFileUpdater = async (fileName, fileContent) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(fileName, fileContent, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(console.log(data));
    });
  });
};

myFileUpdater("File.txt", " World");

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const myFileDeleter = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.unlink(fileName, (err) => {
      if (err) {
        reject(err);
      }
      resolve(console.log("File deleted"));
    });
  });
};

myFileDeleter("./File.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
