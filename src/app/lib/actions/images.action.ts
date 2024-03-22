"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../database/mongoose";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Image from "../database/models/image.model";
import { redirect } from "next/navigation";

const populateUser = (query: any) =>
  query.populate({
    path: "author",
    model: User,
    select: "username",
  });

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
    });

    revalidatePath("/");

    return { message: "success" };
  } catch (error) {
    handleError(error);
  }
}

// GET ALL IMAGES
export async function getAllImages() {
  try {
    await connectToDB();

    // Get all images and populate the author field
    const images = await populateUser(Image.find())
      .sort({ createdAt: -1 })
      .lean();

    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw new Error("Failed to fetch images");
  }
}
