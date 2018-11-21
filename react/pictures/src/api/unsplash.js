import axios from "axios";

/** axios 꿀팁 */
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID f2082f1a7f5fba3a52b34867fa66a968af62844363332204c9cb912f4de6fec7"
  }
});

