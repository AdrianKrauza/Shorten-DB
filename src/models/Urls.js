import mongoose from "mongoose";

export const Urls = mongoose.model("urls", { url: String,shortened :String})