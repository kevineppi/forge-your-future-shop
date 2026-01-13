/**
 * Crops an image to a 1:1 square aspect ratio from the center
 * Preserves original quality by using the shorter dimension as the crop size
 */
export const cropImageToSquare = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

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

      // Draw the cropped image from center
      ctx.drawImage(
        img,
        offsetX, offsetY, size, size,  // Source rectangle (from center)
        0, 0, size, size                // Destination rectangle
      );

      // Convert to blob with high quality
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        file.type || 'image/jpeg',
        0.95 // High quality
      );
    };

    img.onerror = () => {
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
