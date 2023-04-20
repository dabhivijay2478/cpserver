// const express = require("express");
// const router = express.Router();

// const Addeventschema = require("../models/addeventschema");

// router.post("/Addevent", async (req, res) => {
//   const { EventName, HandlerName, Descrption, Contact, Certifiacate } =
//     req.body;

//   if (!EventName || !HandlerName || !Descrption || !Contact || !Certifiacate) {
//     return res.status(422).json({ error: "Something Error" });
//   }

//   try {
//     const eventexsits = await Addeventschema.findOne({
//       EventName: EventName,
//     }).then(async (eventexsits) => {
//       if (eventexsits) {
//         return res.status(422).json({ error: "Event Already Exits" });
//       }

//       const Event = new Addeventschema({
//         EventName,
//         HandlerName,
//         Descrption,
//         Contact,
//         Certifiacate,
//       });
//       await Event.save();

//       // if (userRegister) {
//       res.status(201).json({ message: "Add Event SucessFully Added!" });
//       // }
//       // else
//       // {
//       // res.status(201).json({message:"failed"})
//       // }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;
