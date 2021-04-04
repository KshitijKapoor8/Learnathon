const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useemCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

console.log(new Date().toJSON());

console.log(new Date().toJSON());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const challengeRouter = require('./routes/challenges');
app.use('/challenges', challengeRouter);

const codeRouter = require('./routes/codes');
app.use('/code', codeRouter);

const profile = require( './routes/api/profile' );
app.use('/api', profile );

// const postsRouter = require("./routes/posts");
// app.use("/posts", postsRouter);
// const commentsRouter = require("./routes/comments");
// app.use("/comments", commentsRouter);
// const categoryRouter = require("./routes/categories");
// app.use("/categories", categoryRouter);
// const imagesRouter = require("./routes/images");
// app.use("/images", imagesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});