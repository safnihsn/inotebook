const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Route 1 : Fetching user notes using : GET "/api/notes/fetchallnotes" Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(501).send("Internal server error!");
  }
});

//Route 2 : Adding notes using : POST "/api/notes/addnotes" Login required
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter a valid title !").isLength({ min: 1 }),
    body("description", "Description must be at least 5 characters").isLength({
      min: 3,
    }),
  ],
  async (req, res) => {
    try {
      const notes = await Notes.find({ user: req.user.id });
      const { title, description, tag } = req.body; //destructuring
      // if there is an error return bad request and error
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
      }
      // creating notes
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const savedNotes = await note.save();

      res.json(savedNotes);
    } catch (error) {
      console.error(error.message);
      res.status(501).send("Internal server error!");
    }
  }
);

//Route 3 : Updating an existing notes using : PUT "/api/notes/updatenote" Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // Create a newnote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return req.status(404).send("Note not found!");
    }
    if (note.user.toString() !== req.user.id) {
      return req.status(401).send("Not Allowed!");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(501).send("Internal server error!");
  }
});

//Route 4 : Deleting an existing notes using : DELETE "/api/notes/deletenote" Login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //find the note to be deleted and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return req.status(404).send("Note not found!");
    }
    // allow deletion only if user owns this Note
    if (note.user.toString() !== req.user.id) {
      return req.status(401).send("Not Allowed!");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted.", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(501).send("Internal server error!");
  }
});

module.exports = router;
