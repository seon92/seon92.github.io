import os
from pathlib import Path
from PIL import Image

# 이미지가 들어있는 폴더
IMG_DIR = Path("assets/img")
# 변환할 해상도 설정 (기본값: 800, 1400)
RESOLUTIONS = [800, 1400]

def convert_to_webp(img_path: Path):
    img = Image.open(img_path)
    img_name = img_path.stem
    for res in RESOLUTIONS:
        output_path = img_path.parent / f"{img_name}-{res}.webp"
        resized_img = img.copy()
        resized_img.thumbnail((res, res), Image.LANCZOS)
        resized_img.save(output_path, "WEBP")
        print(f"Generated: {output_path}")

def main():
    if not IMG_DIR.exists():
        print(f"Directory not found: {IMG_DIR}")
        return

    for file_path in IMG_DIR.iterdir():
        if file_path.suffix.lower() in [".jpg", ".jpeg", ".png"]:
            convert_to_webp(file_path)

if __name__ == "__main__":
    main()