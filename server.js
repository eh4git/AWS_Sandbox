const express = require('express');
const app = express()
const port = 3000

app.use(express.static("public"));

require("./public/routes/api/s3")(app);
require("./public/routes/html/index")(app);

app.listen(port, () => {
  console.log(`AWS Sandbox is waiting for you at http://localhost:${port}`)
})