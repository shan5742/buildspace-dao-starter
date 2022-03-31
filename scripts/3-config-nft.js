import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0xD575706882b75a859372Ba62F4c5eE4c920aC3Cb"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Big Slick",
        description: "This NFT will give you access to PokerDAO!",
        image: readFileSync("scripts/assets/poker.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
