import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_KEY_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const uploadResult = await cloudinary.uploader
            .upload(localFilePath, {
                resource_type: "auto"
            }
            )
        console.log("file upload successfully", uploadResult?.url)

    } catch (error) {
        fs.unlinkSync(localFilePath)  // remove the locally  saved temp file as the upload operation got failed.
        return null;

    }
}
export { uploadOnCloudinary }

