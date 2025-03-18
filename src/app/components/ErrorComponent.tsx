export const ErrorComponent = ({ onRetry }: { onRetry: () => void }) => (
    <div className="flex flex-col items-center justify-center gap-4 p-8 text-red-600">
      <img src="/error-icon.svg" alt="Erro" className="w-20 h-20" />
      <p className="text-lg font-semibold">Ops! Algo deu errado ao carregar o filme.</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Tentar novamente
      </button>
    </div>
  );
  