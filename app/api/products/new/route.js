import Products from "@/models/products";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { userId, title, description, price } = await request.json();

  try {
    await connectToDB();
    const newProduct = new Products({ creator: userId, title, description, price });

    await newProduct.save();
    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};