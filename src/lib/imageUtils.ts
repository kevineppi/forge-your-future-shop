/**
 * Crops an image to a 1:1 square aspect ratio from the center
 * Preserves maximum quality by using lossless PNG or high-quality JPEG
 */
export const cropImageToSquare = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { 
      alpha: true,
      willReadFrequently: false,
    });

    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    img.onload = () => {
      // Use the shorter dimension as the crop size to get 1:1 ratio
      const size = Math.min(img.width, img.height);
      
      // Calculate center crop coordinates
      const offsetX = (img.width - size) / 2;
      const offsetY = (img.height - size) / 2;

      // Set canvas to the crop size (preserving original resolution)
      canvas.width = size;
      canvas.height = size;

      // Enable high-quality image rendering
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Draw the cropped image from center
      ctx.drawImage(
        img,
        offsetX, offsetY, size, size,  // Source rectangle (from center)
        0, 0, size, size                // Destination rectangle
      );

      // Determine output format - use PNG for lossless quality, JPEG with max quality for photos
      const isPng = file.type === 'image/png' || file.name.toLowerCase().endsWith('.png');
      const outputType = isPng ? 'image/png' : 'image/jpeg';
      const quality = isPng ? undefined : 1.0; // PNG doesn't use quality, JPEG at 100%

      // Convert to blob with maximum quality
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        outputType,
        quality
      );

      // Clean up object URL
      URL.revokeObjectURL(img.src);
    };

    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      reject(new Error('Failed to load image'));
    };

    // Load the image from file
    img.src = URL.createObjectURL(file);
  });
};

/**
 * Crops multiple images to 1:1 square format
 */
export const cropImagesToSquare = async (files: FileList): Promise<{ blob: Blob; name: string }[]> => {
  const results: { blob: Blob; name: string }[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    try {
      const croppedBlob = await cropImageToSquare(file);
      results.push({
        blob: croppedBlob,
        name: file.name,
      });
    } catch (error) {
      console.error(`Error cropping image ${file.name}:`, error);
      // Fall back to original file if cropping fails
      results.push({
        blob: file,
        name: file.name,
      });
    }
  }

  return results;
};
