import axios from "axios";
export default axios.create({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  timeout: 500000,
});
