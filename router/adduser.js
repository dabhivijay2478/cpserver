const express = require("express");
const router = express.Router();

const Addnewuser = require("../models/adduserchema");
const Addnewclub = require("../models/addclubschema");

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


        res.status(201).json({ message: "Add User SucessFully Added!@@" });
    
      }
    );
  } catch (error) {
    console.log(error);
  }
});

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

router.get("/clubreport", async (req, res) => {
  const result = await Addnewclub.find({});

  res.send(result);
});

router.delete("/deleteClubName/:id", async (req, res) => {
  try {
    const ClubName = req.params.id;
    const deletedEvent = await Addnewclub.findOneAndDelete({
      ClubName: ClubName,
    });
    if (!deletedEvent) {
      return res.status(404).send("ClubName not found");
    }
    res.send("ClubName deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

router.put("/updateclub/:id", async (req, res) => {
  try {
    const clubName = req.params.id;
    const club = await Addnewclub.findOneAndUpdate(
      { ClubName: clubName },
      req.body,
      {
        new: true,
      }
    );

    if (!club) {
      return res.status(404).send({ error: "Club not found" });
    }

    res.send(club);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});
module.exports = router;
