import { ReactElement } from "react";

export const Footer = (): ReactElement => {
  return (
    <footer className="w-full text-black text-center py-4 mt-auto">
      <p className="text-sm">&copy; {new Date().getFullYear()} Cinefilia. Todos os direitos reservados.</p>
    </footer>
  );
};
