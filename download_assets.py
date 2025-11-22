import os
import subprocess

# --- CONFIGURATION ---
OUTPUT_DIR = "public/videos"
YTDLP_PATH = "/usr/local/bin/yt-dlp"  # Your standalone binary path

# --- THE ASSET MANIFEST (Derived from Deep Research) ---
assets = [
    {
        "filename": "hero_clouds.mp4",
        "url": "https://www.youtube.com/watch?v=A1lIPM-onVw",
        "start": "02:14",
        "end": "02:29",
        "desc": "INVESTOR HERO: Above the Clouds (Mavic 4 Pro)"
    },
    {
        "filename": "fg_flow.mp4",
        "url": "https://www.youtube.com/watch?v=JUVkVB3SUf4",
        "start": "00:48",
        "end": "01:05",
        "desc": "FG SCENE 1: Senna NSX Footwork (Suzuka)"
    },
    {
        "filename": "fg_crash_loop.mp4",
        "url": "https://www.youtube.com/watch?v=JXrvz8XTIoc",
        "start": "00:00",
        "end": "00:10",
        "desc": "FG SCENE 2: TV Static Noise Loop (4K)"
    },
    {
        "filename": "fg_crash_transition.mp4",
        "url": "https://www.youtube.com/watch?v=9nfKYSeWEPg",
        "start": "00:00",
        "end": "00:05",
        "desc": "FG SCENE 2 (Trans): CRT Turn Off / Signal Death"
    },
    {
        "filename": "fg_victory.mp4",
        "url": "https://www.youtube.com/watch?v=QVI295YOiuA",
        "start": "49:08",
        "end": "49:15",
        "desc": "FG SCENE 3: Victory Flag Wave (1993)"
    },
    {
        "filename": "city_drone.mp4",
        "url": "https://www.youtube.com/watch?v=NHa8gpLzUmM",
        "start": "01:04",
        "end": "01:20",
        "desc": "CONTEXT: Balneário Camboriú Vertical City"
    },
    {
        "filename": "tower_render.mp4",
        "url": "https://www.youtube.com/watch?v=U1sWeBZwaeY",
        "start": "01:06",
        "end": "01:15",
        "desc": "CONTEXT: Official Senna Tower Render"
    }
]

# --- EXECUTION ENGINE ---
def download_assets():
    # 1. Ensure Directory Exists
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        print(f"Created directory: {OUTPUT_DIR}")

    print(f"--- INITIALIZING PROJECT VERTEX ASSET ACQUISITION ---")
    print(f"Target Directory: {OUTPUT_DIR}\n")

    for asset in assets:
        print(f"Downloading: {asset['desc']}...")
        output_path = os.path.join(OUTPUT_DIR, asset['filename'])
        
        # The Command: Best Video (MP4) + Muted + Specific Section
        cmd = [
            YTDLP_PATH,
            "-f", "bestvideo[ext=mp4]",       # Video only (no audio track to save space)
            "--download-sections", f"*{asset['start']}-{asset['end']}",
            "-o", output_path,
            "--force-overwrites",             # Overwrite if exists
            asset['url']
        ]

        try:
            subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)
            # Verify file creation
            if os.path.exists(output_path):
                size = os.path.getsize(output_path) / (1024 * 1024)
                print(f"✅ Success: {asset['filename']} ({size:.2f} MB)")
            else:
                print(f"❌ Failed: {asset['filename']} (File not found)")
        except subprocess.CalledProcessError as e:
            print(f"❌ Error downloading {asset['filename']}: {e}")

    print(f"\n--- ACQUISITION COMPLETE ---")
    print(f"Next Step: Upload contents of '{OUTPUT_DIR}' to Vercel Blob.")

if __name__ == "__main__":
    download_assets()