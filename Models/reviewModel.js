const mongoose=require("mongoose")

const reviewSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    
  
    rating:{
        type:String,
        required:true,
    },
    breweryId: { 
        type: String, 
        required: true,
      },

    description:{
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
   
},{
    timestamps:true
})

const reviewModel=mongoose.model("reviews",reviewSchema);

module.exports=reviewModel;