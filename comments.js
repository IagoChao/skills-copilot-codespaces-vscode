// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// POST /comment
router.post('/', commentController.createComment);

// GET /comment
router.get('/', commentController.getComment);

// PUT /comment
router.put('/', commentController.updateComment);

// DELETE /comment
router.delete('/', commentController.deleteComment);

module.exports = router;