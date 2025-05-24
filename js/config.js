const API_BASE_URL = window.location.origin.includes("aahakalyanam.co.in")
    ? ""  // In production, use relative path
    : "http://159.89.174.77:5000"; // In dev, talk to local backend