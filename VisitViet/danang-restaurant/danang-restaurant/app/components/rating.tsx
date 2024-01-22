import { Form } from "@remix-run/react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { addRatingValue } from "~/models/rating.server";

type Props = {
  value1: string;
  value2: string;
  value: number;
};

export default function RatingCp({ value1, value2, value }: Props) {
  const [rating, setRating] = useState<number>(value);
  const [hover, setHover] = useState<any>();
  console.log("choose rate", rating);
  const handleAddRating = async (valueChange: number) => {
    console.log("submit", valueChange);
    await addRatingValue(value1, value2, valueChange);
  };

  console.log("rating", rating);

  return (
    <Form method="post">
      <div className="flex items-center">
        <input type="text" className="rating" value={rating} />
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <>
              <label key={index}>
                <FaStar
                  className={`star ${
                    ratingValue <= (hover || rating)
                      ? "text-orange-500"
                      : "text-gray-500"
                  } hover:text-orange-500`}
                  size={20}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                  onClick={async () => {
                    setRating(ratingValue);
                    handleAddRating(ratingValue);
                  }}
                />
              </label>
            </>
          );
        })}
      </div>
    </Form>
  );
}
