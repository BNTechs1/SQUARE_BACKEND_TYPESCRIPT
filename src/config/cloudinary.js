import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
config();
const CLOUD_NAME = "dphh50qtv"
cosnt CLOUDINARY_API_KEY = "891473819878183"
const CLOUDINARY_API_SECRET = "lsTqPXkv87kiCbpciYfdXmMBw4E"

cloudinary.config({
  // eslint-disable-next-line no-undef
  cloud_name: CLOUD_NAME,
  // eslint-disable-next-line no-undef
  api_key: CLOUDINARY_API_KEY,
  // eslint-disable-next-line no-undef
  api_secret: CLOUDINARY_API_SECRET,
});

export const uploads = (file, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(file, {
        resource_type: "auto",
        folder: folder,
      })
      .then((result) => {
        resolve({
          url: result.url,
          id: result.public_id,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
