const express = require("express");
const router = express.Router();

const Addnewclub = require("../models/addclubschema");

router.post("/addnewclub", async (req, res) => {
  const { ClubName, Factulty, Student, Dates } = req.body;

  if (!ClubName || !Factulty || !Student || !Dates) {
    return res.status(422).json({ error: "Something Error" });
  }

  try {
    const clubexits = await Addnewclub.findOne({ ClubName: ClubName }).then(
      async (clubexits) => {
        if (clubexits) {
          return res.status(422).json({ error: "Club Already Exits" });
        }

        const user = new Addnewclub({
          ClubName,
          Factulty,
          Student,
          Dates,
        });
        await user.save();

        // if (userRegister) {
        res.status(201).json({ message: "Add Club SucessFully Added!@@" });
        // }
        // else
        // {
        // res.status(201).json({message:"failed"})
        // }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
