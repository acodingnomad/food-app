import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer _deOlR6TUPtYcZQjeiKU90jBpxu4BHa4vx15tFLb1mP-Ea_PQF19leBU9RBYkPJbVkSG6FNyID3SrZgpdQTZ7hHVP7h9gNfYcA2iQb6sUEPLct6AyC5sAtCWr2ISXnYx"
  }
});

// yelp.get("/search");
