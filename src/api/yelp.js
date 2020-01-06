import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Xmgnb1tumCHMG-thMcbO-7rkATzhdASEBvrZ0w3q6gZ24HyKVzoPSeM_HGVl6-hHIJN-ONE6wNhxhnAZMv4wzxACn8Tp4c54yR-cMkk7kQf-bWMJO307cbuBX5MTXnYx"
  }
});
