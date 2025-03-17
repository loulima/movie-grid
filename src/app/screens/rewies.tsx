"use client";

import { useEffect, useState } from "react";
import { getMovieReviews } from "../services/fetchMovies";
import ReviewCard, { Review } from "../components/ReviewCard";


export default function MovieReviews({ params }: { params: { movieId: string } }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getMovieReviews(Number(params.movieId)).then(setReviews);
  }, [params.movieId]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Críticas do Filme</h2>

      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Nenhuma crítica encontrada.</p>
      )}
    </div>
  );
}
