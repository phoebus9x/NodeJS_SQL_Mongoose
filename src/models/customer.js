const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
//shape data
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    address: String,
    phone: String,
    image: String,
    description: String,
  },
  {
    timestamps: true,
    // Assign a function to the "statics" object of our animalSchema through schema options.
    // By following this approach, there is no need to create a separate TS type to define the type of the statics functions.
    // statics: {
    //   findByIdCustom(name) {
    //     return this.find({ name: new RegExp(name, "i") });
    //   },
    // },
  }
);

customerSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
