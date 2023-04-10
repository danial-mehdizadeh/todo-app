require("dotenv").config();
require("express-async-errors");
const morgan = require("morgan");
// const cors = require("cors");
const express = require("express");
const app = express();

app.use(morgan("tiny"));
// app.use(cors());

const connectDB = require("./db/connect");
const membersRouter = require("./routes/members");
const tasksRouter = require("./routes/tasks");
const historyRouter = require("./routes/history");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const historyMiddleware = require("./middleware/history-tracker");
// middleware
app.use(express.json());

// routes

// app.use(express.static("dist"));
app.use("/u", membersRouter);
app.use("/tasks", [historyMiddleware, tasksRouter]);
app.use("/history", [historyRouter]);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
