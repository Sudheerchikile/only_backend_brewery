const express=require("express");
const router=express.Router();
const Review=require("../Models/reviewModel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");


router.get('/reviews/:breweryId', async (req, res) => {
    const { breweryId } = req.params;
    
  
    try {
      const reviews = await Review.find({ breweryId }).exec();
      res.json(reviews);
    } catch (err) {
      console.error('Error fetching reviews:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  
  router.post('/newReview', async (req, res) => {
    const { breweryId, name, rating, description } = req.body;
  
    try {
      const newReview = new Review({ breweryId, name, rating, description });
      const savedReview = await newReview.save();
      res.status(201).json(savedReview);
    } catch (err) {
      console.error('Error adding review:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });



module.exports=router