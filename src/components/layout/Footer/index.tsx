export default function Footer() {
  return (
    <footer className="relative flex items-center justify-between bg-gray-800 p-4 text-gray-300">
      {/* Esquerda */}
      <span className="left-0 top-1/2 h-8 w-8 -translate-y-1/2 bg-teal-500"></span>

      <p>&copy; 2025 Pedro Carvalho. Todos os direitos reservados.</p>

      {/* Direita */}
      <span className="right-0 top-1/2 h-8 w-8 -translate-y-1/2 bg-teal-500"></span>
    </footer>
  );
}
