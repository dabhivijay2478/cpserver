const express = require("express");
const router = express.Router();

const Addnewuser = require("../models/adduserchema");
router.get("/vijay", (req, res) => {
  res.send("vijay router2");
});
router.post("/addnewuser", async (req, res) => {
  const { Name, Password, Email, PhoneNO, Class, Batch, ClubName, FavTech } =
    req.body;

  if (
    !Name ||
    !Password ||
    !Email ||
    !PhoneNO ||
    !Class ||
    !Batch ||
    !ClubName ||
    !FavTech
  ) {
    return res.status(422).json({ error: "Something Error" });
  }

  try {
    const userexits = await Addnewuser.findOne({ Email: Email }).then(
      async (userexits) => {
        if (userexits) {
          return res.status(422).json({ error: "User Already Exits" });
        }

        const user = new Addnewuser({
          Name,
          Password,
          Email,
          PhoneNO,
          Class,
          Batch,
          ClubName,
          FavTech,
        });
        await user.save();

        // if (userRegister) {
        res.status(201).json({ message: "Add User SucessFully Added!@@" });
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
