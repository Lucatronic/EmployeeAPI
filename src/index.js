const express = require("express");
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/employeeRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");


const app = express();
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

app.use(express.json());
app.use(cache("2 minutes"));
app.use("/api/v1/emloyees", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});

