const router = require("express").Router();
const mocksController = require("../../controllers/mocksController");

// Matches with "/api/mocks"
router.route("/")
  .get(mocksController.findAll)
  .post(mocksController.create);

// Matches with "/api/mocks/:id"
router
  .route("/:id")
  .get(mocksController.findById)
  .put(mocksController.update)
  .delete(mocksController.remove);

module.exports = router;
