import mongoose from "mongoose";


const Schema = mongoose.Schema;
const InventroyProfileSchema = new Schema(
  {
    Id: {
      type: String,
      required: true,
      
    },
    name: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
    },
    place: {
      type: String,
      required: true,
    },
    phone:{
        type : String,
        required:true,
    }

  },
  { timestamps: true }
);

const itemAdd = mongoose.model("InventroyProfileSchema", InventroyProfileSchema);

export default itemAdd;