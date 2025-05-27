// controllers/companyController.js
const Company = require("../models/companyModel");
const uploadToCloudinary = require("../config/cloudinary");

// exports.createCompany = async (req, res) => {
//   try {
//     const {
//       companyName,
//       contactNumber,
//       contactPerson,
//       address,
//       location,
//       status,
//       callStatus,
//       date,
//       remarks,
//     } = req.body;

//     let cameraFileUrl = "";
//     let voiceNoteUrl = "";

//     if (req.files?.cameraFile?.[0]) {
//       const result = await uploadToCloudinary(req.files.cameraFile[0].path);
//       if (result.error) return res.status(result.status).json({ message: result.error });
//       cameraFileUrl = result.secure_url;
//     }

//     if (req.files?.voiceNote?.[0]) {
//       const result = await uploadToCloudinary(req.files.voiceNote[0].path);
//       if (result.error) return res.status(result.status).json({ message: result.error });
//       voiceNoteUrl = result.secure_url;
//     }

//     const company = new Company({
//       companyName,
//       contactNumber,
//       contactPerson,
//       address,
//       location,
//       status,
//       callStatus,
//       date,
//       remarks,
//       cameraFile: cameraFileUrl,
//       voiceNote: voiceNoteUrl,
//     });

//     await company.save();

//     res.status(201).json({
//       message: "Company created successfully",
//       company,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

exports.createCompany = async (req, res) => {
  try {
    const {
      companyName,
      contactNumber,
      contactPerson,
      address,
      location,
      status,
      callStatus,
      date,
      remarks,
      voiceNote, 
    } = req.body;

    let cameraFileUrl = "";

    if (req.files?.cameraFile?.[0]) {
      const result = await uploadToCloudinary(req.files.cameraFile[0].path);
      if (result.error) return res.status(result.status).json({ message: result.error });
      cameraFileUrl = result.secure_url;
    }

    const company = new Company({
      companyName,
      contactNumber,
      contactPerson,
      address,
      location,
      status,
      callStatus,
      date,
      remarks,
      cameraFile: cameraFileUrl,
      voiceNote, // directly saving string
    });

    await company.save();

    res.status(201).json({
      message: "Company created successfully",
      company,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// exports.updateCompany = async (req, res) => {
//   try {
//     const {
//       companyName,
//       contactNumber,
//       contactPerson,
//       address,
//       location,
//       status,
//       callStatus,
//       date,
//       remarks,
//     } = req.body;

//     const updateData = {
//       companyName,
//       contactNumber,
//       contactPerson,
//       address,
//       location,
//       status,
//       callStatus,
//       date,
//       remarks,
//     };

//     if (req.files?.cameraFile) {
//       const result = await uploadToCloudinary(req.files.cameraFile[0].path);
//       if (result.error) return res.status(result.status).json({ message: result.error });
//       updateData.cameraFile = result.secure_url;
//     }

//     if (req.files?.voiceNote) {
//       const result = await uploadToCloudinary(req.files.voiceNote[0].path);
//       if (result.error) return res.status(result.status).json({ message: result.error });
//       updateData.voiceNote = result.secure_url;
//     }

//     const updatedCompany = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });
//     if (!updatedCompany) return res.status(404).json({ error: "Company not found" });

//     res.status(200).json({ message: "Company updated successfully", company: updatedCompany });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.updateCompany = async (req, res) => {
  try {
    const {
      companyName,
      contactNumber,
      contactPerson,
      address,
      location,
      status,
      callStatus,
      date,
      remarks,
      voiceNote, 
    } = req.body;

    const updateData = {
      companyName,
      contactNumber,
      contactPerson,
      address,
      location,
      status,
      callStatus,
      date,
      remarks,
      voiceNote, 
    };

    if (req.files?.cameraFile?.[0]) {
      const result = await uploadToCloudinary(req.files.cameraFile[0].path);
      if (result.error) return res.status(result.status).json({ message: result.error });
      updateData.cameraFile = result.secure_url;
    }

    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedCompany) return res.status(404).json({ error: "Company not found" });

    res.status(200).json({ message: "Company updated successfully", company: updatedCompany });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const deleted = await Company.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Company not found" });
    res.json({ message: "Company deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
