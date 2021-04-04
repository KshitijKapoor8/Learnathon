const router = require('express').Router();
let Code = require('../models/code.model');
const axios = require('axios');
const cherrio = require('cheerio');

router.route('/').get((req, res) => {
  Code.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:_id').get((req, res) => {
    Code.findById(req.params._id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const pid = req.body.pid;
  const uid = req.body.uid;
  const code = req.body.code;

  const newC = new User({pid, uid, code});

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