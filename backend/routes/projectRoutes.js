const express = require("express");
const router = express.Router();

const Project = require("../models/Project");


// Get all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Add new project
router.post("/", async (req, res) => {
    try {
        const project = new Project({
            title: req.body.title,
            description: req.body.description,
            technology: req.body.technology
        });

        const savedProject = await project.save();

        res.status(201).json(savedProject);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;