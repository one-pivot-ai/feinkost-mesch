export default function Loading() {
  return (
    <div className="bg-background min-h-screen">

      {/* Hero skeleton */}
      <div className="skeleton w-full h-[600px] rounded-none" />

      {/* Specialties skeleton */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 md:py-24">
        <div className="skeleton h-4 w-24 mb-4" />
        <div className="skeleton h-9 w-64 mb-12" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="skeleton h-44 md:h-52" />
          ))}
        </div>
      </div>

      {/* Catering skeleton */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <div className="skeleton aspect-[4/3] sm:aspect-[4/5] rounded-2xl" />
          <div className="space-y-4">
            <div className="skeleton h-4 w-28" />
            <div className="skeleton h-9 w-3/4" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-5/6" />
            <div className="skeleton h-4 w-4/6" />
          </div>
        </div>
      </div>

      {/* About + Founder skeleton */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <div className="space-y-4">
            <div className="skeleton h-4 w-28" />
            <div className="skeleton h-9 w-3/4" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-5/6" />
          </div>
          <div className="skeleton aspect-[3/2] sm:aspect-[4/5] rounded-2xl" />
        </div>
      </div>

      {/* FAQ skeleton */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14 md:py-24 space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton h-16 rounded-2xl" />
        ))}
      </div>

    </div>
  );
}
