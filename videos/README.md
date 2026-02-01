# Video Upload Instructions

## How to Add Your Videos

1. **Place your video files** in this `videos` folder
2. **Name them** as follows:
   - `video1.mp4`
   - `video2.mp4`
   - `video3.mp4`
   - `video4.mp4`

3. **Update the video configuration** in `script.js`:
   - Open `script.js`
   - Find the `videoConfig` array (around line 2697)
   - Update the titles, descriptions, and file paths to match your videos

## Video Format Recommendations

- **Format**: MP4 (H.264 codec recommended for best browser compatibility)
- **Resolution**: 1920x1080 (1080p) or higher
- **Aspect Ratio**: 16:9 (widescreen)
- **File Size**: Try to keep under 50MB per video for faster loading
- **Duration**: 30 seconds to 2 minutes works best for portfolio demos

## Optional: Add Thumbnails

If you want custom thumbnails instead of the first frame:
1. Create thumbnail images (JPG or PNG)
2. Place them in this folder
3. Update the `thumbnail` property in `videoConfig` with the image path

## Example Configuration

```javascript
const videoConfig = [
    {
        id: 1,
        title: 'Combat System Demo',
        description: 'Real-time combat handling 100+ players',
        src: 'videos/video1.mp4',
        thumbnail: 'videos/thumb1.jpg' // Optional
    },
    // ... more videos
];
```

## Testing

After adding your videos:
1. Open `index.html` in a browser
2. Navigate to the "DEMO_REEL" section
3. Click the play button on any video to test playback

## Troubleshooting

- **Video not playing?** Check that the file path is correct and the video format is MP4
- **Video not loading?** Make sure the file is in the `videos` folder and the filename matches what's in `script.js`
- **Large file sizes?** Consider compressing your videos using tools like HandBrake or online compressors
