import { Schema, model } from "mongoose"


let ProductSchema = new Schema({
    name:String,
    description:String,
    time:String,
    image:String
})

export let ProductModel= model("musics",ProductSchema)