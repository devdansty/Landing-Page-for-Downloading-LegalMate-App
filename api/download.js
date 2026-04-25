import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "FYP/server/public/apk/app-release.apk");

    if (!fs.existsSync(filePath)) {
      return res.status(404).send("APK not found");
    }

    const file = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "application/vnd.android.package-archive");
    res.setHeader("Content-Disposition", "attachment; filename=LegalMate.apk");

    res.send(file);
  } catch (error) {
    res.status(500).send("Server error");
  }
}
