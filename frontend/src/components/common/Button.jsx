export default function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  fullWidth = false,
  loading = false,
  disabled = false,
}) {
  const baseClasses =
    "rounded-xl px-5 py-3 font-semibold transition-all duration-300 flex items-center justify-center";

  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/30",

    secondary:
      "bg-slate-700 hover:bg-slate-600 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${(loading || disabled) ? "opacity-60 cursor-not-allowed" : ""}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}