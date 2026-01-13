import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ImageIcon, Loader2 } from "lucide-react";

interface OptimizedImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: "square" | "video" | "4/3" | "3/2" | "auto";
  priority?: boolean;
  showLoader?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  /** Width hint for image optimization (px) */
  width?: number;
}

/**
 * Transforms a Supabase storage URL to use image transformation API
 * This serves appropriately sized images to avoid browser downscaling blur
 */
// Image Transformation API requires Pro plan - just use original URL
const getOptimizedUrl = (url: string, _width?: number): string => {
  return url;
};

/**
 * OptimizedImage - Lazy loading image component with progressive loading
 * 
 * Features:
 * - IntersectionObserver-based lazy loading
 * - Supabase image transformation for optimal sizing
 * - Smooth fade-in animation on load
 * - Native loading="lazy" fallback
 * - Placeholder while loading
 * - Error state handling
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = "auto",
  priority = false,
  showLoader = true,
  onLoad,
  onError,
  width,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(width);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure container width for optimal image sizing
  useEffect(() => {
    if (width || !containerRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        // Use 2x for retina displays
        const newWidth = Math.ceil(entry.contentRect.width * 2);
        setContainerWidth(newWidth > 0 ? newWidth : undefined);
      }
    });
    
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [width]);

  // IntersectionObserver for lazy loading
  useEffect(() => {
    if (priority || !containerRef.current) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before visible
        threshold: 0.01,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    setIsError(false);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setIsError(true);
    setIsLoaded(true);
    onError?.();
  };

  // Aspect ratio classes
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    auto: "",
  };

  // No image source
  if (!src) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "relative bg-muted flex items-center justify-center overflow-hidden",
          aspectClasses[aspectRatio],
          containerClassName
        )}
      >
        <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative bg-muted overflow-hidden",
        aspectClasses[aspectRatio],
        containerClassName
      )}
    >
      {/* Loading placeholder */}
      {!isLoaded && showLoader && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground/50" />
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
          <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
        </div>
      )}

      {/* Actual image - only render when in view */}
      {isInView && (
        <img
          ref={imgRef}
          src={getOptimizedUrl(src, containerWidth)}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded && !isError ? "opacity-100" : "opacity-0",
            className
          )}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
