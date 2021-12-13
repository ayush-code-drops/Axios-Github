import { useState } from "react";
import fetchUsers from "./fetchUsers";

function Github() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSearch = () => {
    setIsLoading(true);
    fetchUsers(query)
      .then((res) => {
        setUsers(res.data.items);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      {isLoading && <div>..Loading</div>}
      {isError && alert("something went wrong")}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />

      <button onClick={handleSearch}>{isLoading ? "loading" : "search"}</button>

      {users?.map((items) => {
        return <p key={items.id}>{items.login}</p>;
      })}
    </div>
  );
}

export default Github;
