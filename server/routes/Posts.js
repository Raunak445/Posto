const ex = require("express");
const router = ex.Router();
const { Posts,Likes } = require("../models");
const validateToken =require("../middleware/AuthMiddleWare")

// express has routering system implemented in it

// router.get("/",(res, req)=>{
//         req.send("Hello")
// });
// returns hello only at page /posts as thats what we set in app.use

router.get("/", async (req, res) => {
const listOfPosts = await Posts.findAll();
  // const listOfPosts = await Posts.findAll({ include: [Likes] });
  // const likedPosts = await Likes.findAll({ where: { UserId: req.user.id } });
  // res.json({ listOfPosts: listOfPosts, likedPosts: likedPosts });
  res.json(listOfPosts);
});

//Note it is always req then respose I got error due to writing it oppsite error

// always use async when using function from squelize

//The difference between /id and /:id is that the former is a static route, while the latter is a dynamic route with a parameter.

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
  // note both id in path and in param should be same
});

router.post("/", async (req, res) => {
  // we will have some form through user will send the post and we will add to database

  const post = req.body;
  await Posts.create(post);
  // above code converts the data we sent to database

  res.json(post);
});

// This was causing error
// router.post();

module.exports = router;
