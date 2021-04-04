const router = require('express').Router();
let Challenge = require('../models/challenge.model');
const axios = require('axios');
const cherrio = require('cheerio');

router.route('/').get((req, res) => {
  Challenge.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:_id').get((req, res) => {
    C.findById(req.params._id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const output = req.body.output;

  const newC = new User({title, body, output});

  newC.save()
    .then(() => res.json('Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



// router.route("/update/:id").post((req, res) => {
//     User.findByIdAndUpdate(req.params.id)
//         .then((user) => {
//             user.wishlist = req.body.wishlist;
//             user.save();
//             return res.status(200).json(user);
//         })
//   });



module.exports = router;