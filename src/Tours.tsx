import React, { FC } from "react";
import Tour from "./Tour";
import { ITours } from "./App";

export interface IProps {
  items: ITours[];
  removeTour: (id: string) => void;
}

const Tours: FC<IProps> = ({ items, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {items.map((tour: ITours) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
