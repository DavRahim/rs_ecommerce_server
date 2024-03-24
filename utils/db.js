
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    if (process.env.MODE === "pro") {
      await mongoose.connect(process.env.DB_URL_PRO, { useNewURLParser: true });
      console.log("Production database connect....");

    } else {
      await mongoose.connect(process.env.DB_LOCAL_URL, { useNewURLParser: true });
      console.log("Local database connect....");
    }

  } catch (error) {
    console.log(error.message);
  }
};
module.exports = dbConnect

