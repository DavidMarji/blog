const express = require("express");
const router = express.Router();

// get a specific page of a blog
router.get(/\/blogs\/:id\/pages\/:id\/?$/, (req, res) => {
});

// create a new page
router.post(/\/blogs\/:id\/pages\/:id\/?$/, (req, res) => {
});

// update a page
router.put(/\/blogs\/:id\/pages\/:id\/?$/, (req, res) => {
});

// delete a page
router.delete(/\/blogs\/:id\/pages\/:id\/?$/, (req, res) => {
});

module.exports = router;