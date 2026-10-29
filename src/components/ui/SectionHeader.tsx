interface SectionHeaderProps {
  index?: string;
  tag?: string;
  title: string;
  description?: string;
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeader({
  title,
  description,
  theme = "dark",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div className={`mb-12 sm:mb-16 ${className}`}>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-heading ${
          isDark ? "text-[#F5F2EA]" : "text-[#101820]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${
            isDark ? "text-[#DDD7C9]/80" : "text-[#555044]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
