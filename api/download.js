import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    // process.cwd() is the root of your project on Vercel
    // Ensure the path is correct relative to the root
    const filePath = path.join(process.cwd(), "server", "public", "apk", "LegalMate.apk");

    console.log("Attempting to serve APK from:", filePath);

    if (!fs.existsSync(filePath)) {
      console.error("File not found at path:", filePath);
      return res.status(404).json({ 
        error: "APK file not found on server", 
        path: filePath 
      });
    }

    const file = fs.readFileSync(filePath);
    const stat = fs.statSync(filePath);

    res.setHeader("Content-Type", "application/vnd.android.package-archive");
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Content-Disposition", "attachment; filename=LegalMate.apk");

    return res.send(file);
  } catch (error) {
    console.error("Download Error:", error);
    return res.status(500).json({ error: "Internal server error during download" });
  }
}
