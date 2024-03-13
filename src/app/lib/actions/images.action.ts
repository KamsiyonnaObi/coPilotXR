"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../database/mongoose";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Image from "../database/models/image.model";
import { redirect } from "next/navigation";

// ADD IMAGE
export async function addImage({ image, userId }: AddImageParams) {
    try {
      await connectToDB();
  
      const author = await User.findById(userId);
  
      if (!author) {
        throw new Error("User not found");
      }
  
      const newImage = await Image.create({
        ...image,
        author: author._id,
      })
  
      revalidatePath("/");
  
      return JSON.parse(JSON.stringify(newImage));
    } catch (error) {
      handleError(error)
    }
  }