import { useMovieDetails } from '@/hooks/useMovieDetails';
import { ReactElement } from 'react';
import { X } from 'lucide-react';
import { ErrorComponent } from './ErrorComponent';
import { LoadingComponent } from './LoadingComponent';

type MovieModalProps = {
  movieId: number;
  onClose: () => void;
};

export const MovieModal = ({ movieId, onClose }: MovieModalProps): ReactElement => {
  const { movie, loading, error, refetch } = useMovieDetails(movieId);

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent onRetry={refetch} />;
  if (!movie) return <div>Filme não disponível</div>;
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 text-black">
      <div className="bg-white w-full max-w-xl rounded-lg p-6 relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <X size={30} />
        </button>
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <p className="mb-2">
          <strong>Data de Lançamento:</strong> {new Date(movie.release_date).toLocaleDateString("pt-BR")}
        </p>
        <p className="mb-2">
          <strong>Nota:</strong> {movie.vote_average} ⭐
        </p>
        <p className="mb-4">
          <strong>Sinopse:</strong> {movie.overview}
        </p>
        <div className="flex gap-2 flex-wrap">
          {movie.genres.map((genre: any) => (
            <span key={genre.id} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
