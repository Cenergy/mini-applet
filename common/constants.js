export const a = 1;
let tempURL;
if (process.env.NODE_ENV === "development") {
  tempURL = "http://localhost:8000";
} else {
  tempURL = "https://www.aigisss.com/apis";
}

// tempURL = "https://www.aigisss.com/apis";
export const baseURL = tempURL;
