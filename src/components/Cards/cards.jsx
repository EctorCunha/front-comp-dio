import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function cards() {
  const [search, setSearch] = useState("");
  const [repositories, setRepositories] = useState("");

  useEffect(() => {
    api.get(`/users/${setSearch}/repos`).then((res) => {
      setRepositories(res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {repositories.map((repository) => (
          <div>
            <h2>{repository.name}</h2>
            <p>{repository.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
