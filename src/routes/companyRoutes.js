const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const {
  createCompany,
  getAllCompanies,
  getCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");

const multiUpload = upload.fields([
  { name: "cameraFile", maxCount: 1 },
  { name: "voiceNote", maxCount: 1 },
]);

router.post("/", multiUpload, createCompany);
router.get("/", getAllCompanies);
router.get("/:id", getCompany);
router.put("/:id",multiUpload,updateCompany); 
router.delete("/:id", deleteCompany);

module.exports = router;
