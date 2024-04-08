import mongoose from "mongoose";


const Schema = mongoose.Schema;
const InventroySchema = new Schema(
  {
    Id: {
      type: String,
      required: [true, "Please provide your ID"],      
    },
    name: {
      type: String,
      required: [true,"Please enter the product name"],
      
    },
    qty: {
      type: String,
      required:[true,"Please provide quantity"],
    },
    price: {
      type: String,
      required: [true,"Please  provide the price of the product"],
    },

  },
  { timestamps: true }
);

const itemAdd = mongoose.model("InventroySchema", InventroySchema);

export default itemAdd;