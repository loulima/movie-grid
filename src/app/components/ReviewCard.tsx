"use client";

export type Review = {
    author: string;
    content: string;
    url?: string;
  };

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[430px] border-2 p-4 flex flex-col gap-2 bg-gray-100 shadow-lg rounded-lg">
      <div className="bg-blue-500 text-white p-2 rounded-t-lg">
        <h3 className="text-lg font-bold">{review.author}</h3>
      </div>

      <div className="p-4 text-black">
        <p className="text-sm">{review.content.length > 200 ? review.content.slice(0, 200) + "..." : review.content}</p>
      </div>

      {review.url && (
        <a
          href={review.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline text-sm mt-2"
        >
          Ler crítica completa
        </a>
      )}
    </div>
  );
}
