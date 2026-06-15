const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

// Save Contact Message
router.post("/", async (req, res) => {
    try {

        const contact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });

        await contact.save();

        res.status(201).json({
            success: true,
            message: "Message saved successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
});

module.exports = router;