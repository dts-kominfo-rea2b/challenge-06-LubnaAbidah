// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) =>{
  let baca = [];
  fs.readFile(file1, (err, data) => {
    if (err) throw err;
    let data1 = JSON.parse(data);
    const result1 = data1.message.split(" ")[1];
    baca.push(result1);
  });
  
  fs.readFile(file2, (err, data) => {
      if (err) throw err;
      let data2 = JSON.parse(data);
      const result2 = data2[0].message.split(" ")[1];
      baca.push(result2);
    });
  
  fs.readFile(file3, (err, data) => {
      if (err) throw err;
      let data3 = JSON.parse(data);
      const result3 = data3[0].data.message.split(" ")[1];
      baca.push(result3);
    });

    fnCallback(null, baca);
};
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
