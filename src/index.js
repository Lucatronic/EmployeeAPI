const express = require("express");
//const apicache = require("apicache");
const v1EmployeeRouter = require("./v1/routes/employeeRoutes");
const v1RegisterRouter = require("./v1/routes/registerRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");


const app = express();
const PORT = process.env.PORT || 3000;
//const cache = apicache.middleware;

app.use(express.json());
//app.use(cache("2 minutes"));
app.use("/api/v1/employees", v1EmployeeRouter);
app.use("/api/v1/register", v1RegisterRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});

