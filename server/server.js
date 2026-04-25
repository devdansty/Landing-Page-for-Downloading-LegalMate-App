const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files if needed later
// app.use(express.static(path.join(__dirname, '../client/dist')));

// Configure APK Path
const APK_DIR = path.join(__dirname, 'public', 'apk');
const APK_FILENAME = 'LegalMate.apk'; // This should match the actual filename

// Endpoint to download the APK
app.get('/api/download/apk', (req, res) => {
    const apkPath = path.join(APK_DIR, APK_FILENAME);
    
    // Check if file exists
    if (fs.existsSync(apkPath)) {
        res.download(apkPath, APK_FILENAME, (err) => {
            if (err) {
                console.error("Error downloading APK:", err);
                res.status(500).send({ message: "Could not download the file. " + err });
            }
        });
    } else {
        res.status(404).send({ message: "APK file not found. Please ensure the APK is uploaded to the server." });
    }
});

// Simple API endpoint to get info
app.get('/api/info', (req, res) => {
    res.json({
        appName: 'LegalMate',
        version: '1.0.0',
        platform: 'Android',
        description: 'AI Legal Assistant for Everyone'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Ensure your APK is placed at: ${path.join(APK_DIR, APK_FILENAME)}`);
});
