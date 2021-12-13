import axios from "axios";

function fetchUsers(query) {
  if (!query) {
    return Promise.reject("Your Search is Empty");
  }
  return axios.get("https://api.github.com/search/users", {
    params: {
      q: query
    }
  });
}

export default fetchUsers;
