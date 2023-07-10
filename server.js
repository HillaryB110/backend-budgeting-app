const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
