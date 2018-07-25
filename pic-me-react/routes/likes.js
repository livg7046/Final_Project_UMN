const express = require('express');
const router = express.Router();
const Likes = require('../models/Likes.js');
const Comment = require('../models/Comment.js');
const passport = require('passport');
require('../config/passport')(passport);