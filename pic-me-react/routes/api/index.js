const router = require("express").Router();
const photoRoutes = require("./photos");

// Photo routes
router.use("/photos", photoRoutes);

module.exports = router;