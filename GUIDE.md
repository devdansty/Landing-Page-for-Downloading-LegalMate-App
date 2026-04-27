# LegalMate Distribution & Upload Guide

This guide explains how to manage and distribute the LegalMate mobile application for both Android and iOS platforms.

---

## 🤖 Android Distribution (APK)

Android users can download the application directly from the landing page.

### 1. How to Upload/Replace the APK
The APK file is served by the Node.js backend. To update the app:
1.  Navigate to the following directory in your project:
    `server/public/apk/`
2.  Delete the existing `LegalMate.apk` file.
3.  Upload your new Flutter-generated APK file to this folder.
4.  **Important**: Ensure the filename is exactly `LegalMate.apk`. If it is named differently, the download link on the website will fail.

### 2. How the Download Route Works
The backend uses an Express route to serve the file:
-   **Endpoint**: `http://your-server-ip:5000/api/download/apk`
-   **Code Location**: `server/server.js`
-   The route uses `res.download(apkPath)` which forces the browser to download the file rather than trying to open it.

---

## 🍎 iOS Distribution (TestFlight)

Since direct installation (sideloading) is restricted on iOS, we use Apple's **TestFlight** for beta distribution.

### 1. Distributing via TestFlight
1.  **Build the iOS App**: Use Xcode to create an "Archive" of your Flutter app.
2.  **Upload to App Store Connect**: Distribute the archive to App Store Connect.
3.  **Setup TestFlight**:
    -   Log in to [App Store Connect](https://appstoreconnect.apple.com/).
    -   Go to your app's page and click on the **TestFlight** tab.
    -   Add "External Testers" to create a public invitation link.
4.  **Get the Link**: Copy the Public Link provided by Apple.

### 2. Updating the iOS Button Link
Once you have your TestFlight link, you must update it in the frontend code:
1.  Open `client/src/components/Modal.jsx`.
2.  Find the `IOSDownloadModal` component.
3.  Locate the `<a>` tag with the class `testflight-btn`.
4.  Replace `https://testflight.apple.com/join/your-placeholder-id` with your actual public link.

---

## 🏁 QR Code Management

The QR code in the "Download" section points to the Android APK download by default.

### How it Works
-   The landing page uses the `qrcode.react` library.
-   **File Location**: `client/src/components/Download.jsx`
-   **Dynamic Update**: If you change the `downloadUrl` variable in `Download.jsx`, the QR code will automatically regenerate to point to the new URL.

### Recommended Usage
For a professional experience, it is recommended to point the QR code to a **Unified Download Page** (a small page that detects the user's OS and shows the correct download button) rather than directly to the APK.

---

## 🚀 Production Deployment Checklist

1.  **Update URLs**: Before deploying, change `http://localhost:5000` in the frontend (`Hero.jsx`, `Download.jsx`) to your actual production domain.
2.  **SSL Certificate**: Ensure your server has HTTPS enabled, as modern mobile browsers may block downloads from non-secure (HTTP) sources.
3.  **File Size**: Keep your APK size optimized for faster user downloads.
