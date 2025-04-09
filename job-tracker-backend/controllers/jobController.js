const Job = require('../models/Job');
const mongoose = require('mongoose');

// @desc    Create a new job application
// @route   POST /api/jobs
exports.createJob = async (req, res) => {
  try {
    console.log("📥 Creating job with data:", req.body);

    const { company, role, status, appliedDate, link } = req.body;

    // Validate required fields
    if (!company || !role || !appliedDate) {
      return res.status(400).json({ message: 'Company, Role, and Date are required.' });
    }

    const newJob = new Job({ company, role, status, appliedDate, link });
    const savedJob = await newJob.save();

    res.status(201).json(savedJob);
  } catch (error) {
    console.error("❌ Error creating job:", error.message);
    res.status(500).json({ message: 'Server error while creating job' });
  }
};

// @desc    Get all job applications
// @route   GET /api/jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ appliedDate: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.error("❌ Error fetching jobs:", error.message);
    res.status(500).json({ message: 'Server error while fetching jobs' });
  }
};


exports.deleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Job ID format' });
    }

    const deleted = await Job.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Job ID format' });
    }

    const updated = await Job.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Job not found for update' });
    }

    res.status(200).json(updated);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ message: error.message });
  }
};
