import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";

const addProjects = TryCatch(async (req, res, next) => {
  const { title, link, tech } = req.body;

  if (!title || !link || !tech) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }
});
