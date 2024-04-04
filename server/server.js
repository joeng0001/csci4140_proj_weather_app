const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const fs = require("fs");
const csv = require("csv-parser");

var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

async function read_file(file_path) {
  const results = [];
  return new Promise((resolve, reject) =>
    fs
      .createReadStream(file_path)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        resolve(results);
      })
      .on("error", () => {
        reject();
      })
  );
}

async function read_folder(folder_path) {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.readdir(folder_path, async (err, files) => {
      if (err) {
        console.error("Error reading folder:", err);
        reject();
      }

      await Promise.all(
        files.map(async (file) => {
          data = await read_file(folder_path + "/" + file);
          results.push({
            place: file.replace(".csv", ""),
            data,
          });
        })
      );

      resolve(results);
    });
  });
}

/**
 * @format [{"﻿YYYY-MM-DD": "2023-01-01","RISE": "07:03","TRAN.": "12:27","SET": "17:51"}],
 */
app.get("/data/sun", async (req, res) => {
  const Data = await read_file("./data/sun/2023.csv");
  res.json(Data);
});

/**
 * @format [{"﻿Year": "2023","Month": "1","Day": "1","Value": "2","Completeness": "C"}],
 */
app.get("/data/uvRay", async (req, res) => {
  const Data = await read_file("./data/UVRay/2023.csv");
  res.json(Data);
});

/**
 * @format {
 *   "place": "上水",
 *    "data": [{"﻿年/Year": "2023","月/Month": "1","日/Day": "1","數值/Value": "66","數據完整性/data Completeness": "C"},],
 * },
 */
app.get("/data/humidity", async (req, res) => {
  const Data = await read_folder("./data/humidity");
  res.send(Data);
});

/**
 * @format {
 *   "place": "上水",
 *    "data": [{"﻿年/Year": "2023","月/Month": "1","日/Day": "1","數值/Value": "0","數據完整性/data Completeness": "C"}],
 * },
 */
app.get("/data/rainfall", async (req, res) => {
  const Data = await read_folder("./data/rainfall");
  res.send(Data);
});

const PORT = 8088;
http.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});

app.use(express.json());
