import { Container } from "@/components/Container";

type PageLoadingProps = {
  preHeading: string;
  heading: string;
  subText?: string;
  rows?: number;
  grid?: boolean;
};

/** Route-level fallback shown while a server component is fetching CMS data. */
export function PageLoading({
  preHeading,
  heading,
  subText,
  rows = 6,
  grid = false
}: PageLoadingProps) {
  return (
    <Container>
      <section className="py-16 max-w-6xl mx-auto" aria-busy="true" aria-live="polite">
        {/* Header */}
        <p className="text-xs tracking-widest uppercase text-mainOtherText mb-2">
          {preHeading}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-mainText mb-2">
          {heading}
        </h1>
        {subText && (
          <p className="mt-4 text-mainOtherText">
            {subText}
          </p>
        )}
        {/* Loading Skeleton */}
        <div className={`flex ${grid ? "grid grid-cols-2" : "flex-col"} columns-2 gap-10 pt-5`}>
          <span className="sr-only">Loading {heading.toLowerCase()}…</span>
          {Array.from({ length: rows }, (_, index) => (
            <div key={index} className="rounded-xl bg-trueGray-200 border border-mainAccent p-20 animate-pulse"></div>
          ))}
          
        </div>
      </section>
    </Container>
  );
}
