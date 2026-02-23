# YouTube Live Stream Setup Guide

## Current Status
The application has been configured with YouTube channel information for 12 Jyotirlingas and local Gujarat temples. However, YouTube's embed system requires **actual video IDs** rather than just channel references.

## Channel URLs Provided

### 12 Jyotirlingas
1. **Somnath Temple** - [@SomnathTempleOfficialChannel](https://www.youtube.com/@SomnathTempleOfficialChannel/live)
2. **Mahakaleshwar Temple** - [@mahakaleshwar_live](https://www.youtube.com/@mahakaleshwar_live/live)
3. **Omkareshwar Temple** - [@ShriOmkarOfficial](https://www.youtube.com/@ShriOmkarOfficial/live)
4. **Kashi Vishwanath Temple** - [@ShreeKashiVishwanathMandir](https://www.youtube.com/@ShreeKashiVishwanathMandir/live)

### Local Gujarat Temples
1. **Umiya Mata Unjha** - [@umiyamatajiunjha](https://www.youtube.com/@umiyamatajiunjha/live)
2. **Ambaji Temple** - [@officialambajitemple](https://www.youtube.com/@officialambajitemple/live)
3. **Salangpur Hanuman** - [@salangpurhanumanji](https://www.youtube.com/@salangpurhanumanji/live)
4. **Dwarkadhish Temple** - [@shridwarkadhishmandirofficial](https://www.youtube.com/@shridwarkadhishmandirofficial/live)
5. **Ranchhodrai Dakor** - [@RanchhodraijiLiveDarshanDakor](https://www.youtube.com/@RanchhodraijiLiveDarshanDakor/live)

## How to Update with Live Video IDs

### Step 1: Find Active Live Streams
1. Visit each channel's live page (links above)
2. If a live stream is currently active, you'll see the video player
3. Copy the URL from your browser's address bar

### Step 2: Extract Video ID
From a URL like:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```
The video ID is: `dQw4w9WgXcQ` (the part after `watch?v=`)

### Step 3: Update the Code
Open: `src/app/services/darshan-data.ts`

Find the temple entry and update the `youtubeId`:

**Before:**
```typescript
{
  id: 'somnath',
  name: { en: 'Somnath Temple', ... },
  youtubeId: 'live_stream?channel=UCxxxxx', // Placeholder
  ...
}
```

**After:**
```typescript
{
  id: 'somnath',
  name: { en: 'Somnath Temple', ... },
  youtubeId: 'dQw4w9WgXcQ', // Actual live stream video ID
  ...
}
```

### Step 4: Mark as Live or Not
Update the `isLive` property:
- `isLive: true` - Shows "LIVE NOW" badge
- `isLive: false` - Shows "Live darshan will resume shortly" overlay

## Alternative: YouTube Data API (Advanced)

For automatic live stream detection, you can integrate YouTube Data API v3:

### Required Setup:
1. Get API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable YouTube Data API v3
3. Use the `search` endpoint to find live broadcasts:

```typescript
// Example API call
const apiKey = 'YOUR_API_KEY';
const channelId = 'UCqm8xMW91i--_EkLXXgj_gQ'; // Somnath channel
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;
```

This will return the current live video ID if a stream is active.

## Current Implementation

The app currently uses placeholder channel references formatted as:
```
youtubeId: 'live_stream?channel=CHANNEL_ID'
```

This format **may not work** for all channels. For best results:
- **Replace with actual video IDs** when live streams are active
- **Update `isLive` flag** accordingly
- Consider implementing YouTube API integration for automatic detection

## Testing

After updating video IDs:
1. Save the file
2. The dev server will auto-reload
3. Navigate to the temple's tab
4. Check if the video loads correctly
5. If it shows "Video unavailable", the stream may be offline or the ID is incorrect

## Adding More Temples

To add more temples, follow this format in `darshan-data.ts`:

```typescript
{
  id: 'unique-temple-id',
  name: {
    en: 'Temple Name',
    hi: 'मंदिर का नाम',
    gu: 'મંદિરનું નામ'
  },
  category: 'jyotirlinga', // or 'local-temple' or 'devotional-video'
  youtubeId: 'YOUR_VIDEO_ID',
  location: {
    en: 'City, State',
    hi: 'शहर, राज्य',
    gu: 'શહેર, રાજ્ય'
  },
  deity: {
    en: 'Deity Name',
    hi: 'देवता',
    gu: 'દેવતા'
  },
  isLive: true, // or false
  description: { // Optional
    en: 'Description',
    hi: 'विवरण',
    gu: 'વર્ણન'
  }
}
```

## Notes

- YouTube live streams must be **public** and **embeddable** (not restricted by the channel owner)
- Some temples may not allow embedding - check channel settings
- Video IDs change each time a new live stream starts
- Consider implementing a backend service to manage active stream IDs
- The current `live_stream?channel=` format is a fallback that may work for some channels

## Support

If you encounter issues:
1. Check if the channel allows embedding
2. Verify the video ID is correct
3. Ensure the stream is currently live
4. Check browser console for errors
5. Try the YouTube URL directly in a browser first
