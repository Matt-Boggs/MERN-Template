const router = require("express").Router();
const mockRoutes = require("./mocks");

// mock routes
router.use("/mocks", mockRoutes);

module.exports = router;
