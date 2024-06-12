import fs from "fs";
import { pipeline } from "stream/promises";

export const generate = async ({ path, width, height, name }) => {
  try {
    const response = await fetch(`https://picsum.photos/${width}/${height}`, {
      method: "GET",
    });
    console.log(process.cwd());
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const contentType = response.headers.get("content-type").split("/").pop();
    const imgPath = `${path}/${name}.${contentType}`;

    const writeStream = fs.createWriteStream(imgPath);
    await pipeline(response.body, writeStream);

    return imgPath;
  } catch (err) {
    console.log(err);
  }
};
