import { Loader2 } from "lucide-react";

export const LoadingComponent = () => (
  <div className="flex flex-col items-center justify-center gap-4 p-8 text-gray-700">
    <Loader2 className="animate-spin" size={48} />
    <p className="text-lg font-semibold">Carregando...</p>
  </div>
);
