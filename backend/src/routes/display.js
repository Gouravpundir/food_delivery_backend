const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
      res.send([global.foods,global.foodCategory]);
    } catch (error) {
      res.status(500).send({ error: 'server error' });
    }
  });


module.exports = router