import { useState } from "react";
import { cn } from "@/lib/utils";
import OptimizedImage from "./OptimizedImage";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

interface ImageGalleryImage {
  id: string;
  image_url: string;
  thumbnail_url?: string | null;
  alt_text?: string | null;
  is_primary?: boolean;
}

interface ImageGalleryProps {
  images: ImageGalleryImage[];
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "4/3" | "3/2";
  showThumbnails?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

/**
 * ImageGallery - Multi-image gallery with thumbnails and navigation
 * 
 * Features:
 * - Main image with thumbnails
 * - Arrow navigation
 * - Dot indicators for mobile
 * - Smooth transitions
 * - Lazy loading for all images
 */
const ImageGallery = ({
  images,
  alt,
  className,
  aspectRatio = "4/3",
  showThumbnails = true,
  showArrows = true,
}: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(() => {
    // Start with primary image if available
    const primaryIndex = images.findIndex(img => img.is_primary);
    return primaryIndex >= 0 ? primaryIndex : 0;
  });

  // Handle empty images array
  if (!images || images.length === 0) {
    return (
      <div className={cn("relative bg-muted flex items-center justify-center", className)}>
        <ImageIcon className="w-16 h-16 text-muted-foreground/50" />
      </div>
    );
  }

  const currentImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  const goToPrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Main Image */}
      <div className="relative group">
        <OptimizedImage
          src={currentImage.image_url}
          alt={currentImage.alt_text || alt}
          aspectRatio={aspectRatio}
          priority={activeIndex === 0}
          containerClassName="w-full"
          className="transition-transform duration-700 group-hover:scale-105"
        />

        {/* Navigation Arrows */}
        {hasMultipleImages && showArrows && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110 z-10"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110 z-10"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Dot Indicators (mobile friendly) */}
        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/80"
                )}
                aria-label={`Bild ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        {hasMultipleImages && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-medium z-10">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {hasMultipleImages && showThumbnails && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-200",
                index === activeIndex
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-60 hover:opacity-100"
              )}
            >
              <OptimizedImage
                src={image.thumbnail_url || image.image_url}
                alt={`${alt} - Bild ${index + 1}`}
                aspectRatio="square"
                showLoader={false}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
