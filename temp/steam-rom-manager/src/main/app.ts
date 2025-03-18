import {
    crashReporter
} from "electron";

// Crash Reporting
crashReporter.start({
    productName: "steam-rom-manager",
    companyName: "cbd",
    submitURL:
      "https://cbd.sp.backtrace.io:6098/post?format=minidump&token=f2caa6949cf9a39cb04a0cfef310e0479f47e6cb070b3b0cd0f4d54b97281730",
    uploadToServer: true,
  });