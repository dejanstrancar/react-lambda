import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: [true, "Name field is required"],
      max: 100
    },
    price: {
      type: Number,
      required: [true, "Price field is required"]
    }
  }),
  Product = mongoose.model("product", schema);
export default Product;
