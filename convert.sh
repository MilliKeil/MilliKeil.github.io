#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Please install it before running this script."
    exit 1
fi

# Set the input and output directories
input_dir="images"
output_dir="images_new"
max_width=1000  # Set the maximum width for the downsized images

# Create the output directory if it doesn't exist
mkdir -p "$output_dir"

# Loop through the images in the input directory and downsize them
for input_image in "$input_dir"/*.{jpg,jpeg,png,gif,webp,JPG}; do
    if [ -e "$input_image" ]; then
        output_image="$output_dir/$(basename "$input_image")"
        convert "$input_image" -resize "$max_width"x "$output_image"
        echo "Resized: $input_image -> $output_image"
    fi
done

echo "Image downsizing complete."

