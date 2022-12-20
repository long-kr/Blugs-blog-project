const { PORT = 5001 } = process.env;

const app = require("./app");

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
});