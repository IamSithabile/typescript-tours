import React, { FC, useState } from "react";

interface IProps {
  id: string;
  name: string;
  price: number;
  image: string;
  info: string;
  removeTour: (id: string) => void;
}

const Tour: FC<IProps> = ({ id, name, price, image, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const notInterestedHandler: () => void = () => {
    removeTour(id);
  };

  const readMoreHandler: () => void = () => {
    setReadMore(!readMore);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readMore ? info.substring(0, 200) : info}
          <button onClick={readMoreHandler}>
            {readMore ? "Read More..." : "Read Less..."}
          </button>
        </p>
        <button className="delete-btn" onClick={notInterestedHandler}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
