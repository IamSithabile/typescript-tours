import React, { useState, useEffect, FC, ReactElement } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

export interface ITours {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState<ITours[]>([]);

  const fetchTours: () => void = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTourHandler: (id: string) => void = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  let content: ReactElement | null = null;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading) {
    content = <Tours items={tours} removeTour={removeTourHandler} />;
  }

  if (tours.length === 0 && !isLoading) {
    content = (
      <section className="container">
        <h1>No tours left</h1>;
        <button
          className="btn"
          onClick={() => {
            fetchTours();
          }}
        >
          Fetch more
        </button>
      </section>
    );
  }

  return <main>{content}</main>;
};

export default App;
