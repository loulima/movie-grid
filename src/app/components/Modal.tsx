export default function Modal({ movie, close }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-lg">
          <button className="text-black text-lg font-bold absolute top-4 right-4" onClick={close}>✖</button>
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <p className="mt-4">{movie.overview}</p>
        </div>
      </div>
    );
  }
  