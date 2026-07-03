export default function Card({ children }) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-2xl border border-slate-700">
      {children}
    </div>
  );
}