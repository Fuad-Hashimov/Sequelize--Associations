const express = require("express");
const app = express();
const db = require("./models");
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
const userRoutes = require("./routes/user_routes");
app.use("/api/users", userRoutes);

const postRouter = require("./routes/post_routes");
app.use("/api/posts", postRouter);

const profileRouter = require("./routes/profile_routes");
app.use("/api/profiles", profileRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server is listenning at: http://localhost:${PORT}`);
  });
});
