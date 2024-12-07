const express = require("express");
const https = require("https");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let data = "";
  const request = https.get(
    "https://data.cityofnewyork.us/resource/gkne-dk5s.json?vendor_id=VTS",
    (response) => {
      response.setEncoding("utf-8");
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        console.log(data);
      });
    }
  );
  request.end()
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
