const express = require('express');
const app = express()
const port = 3000

require("./routes/api/s3")(app);
require("./routes/html/index")(app);

app.listen(port, () => {
  console.log(`AWS Sandbox is waiting for you at http://localhost:${port}`)
})