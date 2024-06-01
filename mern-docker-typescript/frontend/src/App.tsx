import { useEffect, useState } from "react";

const App = () => {
  const [fetchAgin, setFetchAgain] = useState(false);
  const [joke, setJoke] = useState("");
  const [error, setError] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getRandomJoke = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch("http://localhost:3000/joke", {
          headers: {
            Accept: "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) {
          setJoke(`${data.setup} ${data.punchline}`);
        }
      } catch (error: any) {
        setError("An error occurred while fetching joke");
      } finally {
        setLoading(false);
      }
    };

    getRandomJoke();
  }, [fetchAgin]);

  return (
    <div>
      <h1>Random Joke Generator</h1>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}

      {!loading && !error && <p>{joke}</p>}

      <button onClick={() => setFetchAgain(!fetchAgin)}>
        Get Another Random Joke!
      </button>
    </div>
  );
};

export default App;
