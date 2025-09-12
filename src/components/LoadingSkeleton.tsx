import { Skeleton } from "@/components/ui/skeleton";

interface LoadingSkeletonProps {
  type?: "card" | "form" | "pricing" | "stats";
  className?: string;
}

const LoadingSkeleton = ({ type = "card", className = "" }: LoadingSkeletonProps) => {
  switch (type) {
    case "card":
      return (
        <div className={`space-y-4 ${className}`}>
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-8 w-full" />
        </div>
      );
      
    case "form":
      return (
        <div className={`space-y-4 ${className}`}>
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
      );
      
    case "pricing":
      return (
        <div className={`space-y-6 ${className}`}>
          <div className="space-y-3">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-16 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      );
      
    case "stats":
      return (
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <Skeleton className="h-8 w-16 mx-auto" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </div>
          ))}
        </div>
      );
      
    default:
      return <Skeleton className={className} />;
  }
};

export default LoadingSkeleton;