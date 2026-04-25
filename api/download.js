import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    // process.cwd() is the root of your project on Vercel
    const filePath = path.join(process.cwd(), "server", "public", "apk", "app-release.apk");

    console.log("Checking path:", filePath); // This will show in Vercel logs

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ 
        error: "APK not found", 
        checkedPath: filePath 
      });
    }

    const file = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "application/vnd.android.package-archive");
    res.setHeader("Content-Disposition", "attachment; filename=LegalMate.apk");

    return res.send(file);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
}