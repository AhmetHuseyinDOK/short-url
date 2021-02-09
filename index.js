const express = require("express");
const app = express();

const URLService = require("./services/url");
const prisma = require("./prisma");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<b>Quick Redirect Url</b> By <a href='https://github.com/AhmetHuseyinDOK/'>Software Artisan</a<");
});

app.post("/url", async (req, res) => {
  res.send({
    url: await URLService.shorten(req.body.url),
  });
});

app.get("/:url", async (req, res) => {
  res.redirect(await URLService.resolve(req.params.url));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});
