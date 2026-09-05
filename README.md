# watch-together

Free, private, **temporary** watch party for friends who live far apart. No accounts
on the app, no servers, no credit card, nothing stored. Your video streams from
**your own Google Drive**; sync is peer-to-peer.

## Why this stack (picked for your constraints)

| Constraint | Choice | Why |
|---|---|---|
| 1–3 GB files, no CC, works from India | **Google Drive** (15 GB free) | The only free host that reliably streams big video direct in a player from India. pixeldrain, GoFile CDN and tmpfiles are blocked/broken here; Litterbox caps at 1 GB |
| Sync, no CC, no accounts | **PeerJS** P2P data channels | No server, no API key, no Firebase. The host's browser IS the room |
| Host the app, free, no CC | **GitHub Pages** | Static, free forever, no payment method |

## How to use (host)

1. **Upload the movie to Google Drive** (drive.google.com → New → File upload).
   Files up to 15 GB free. For 1–3 GB movies: no splitting needed.
2. **Share it**: right-click the file → *Share* → *General access* → **Anyone with the link** → *Viewer* → Copy link.
3. Open this app → **paste the Drive link** → Load.
4. **Create room** → send the invite link (it already carries the room code) to your friends.
5. Friends open the link → auto-join → anyone can **Play / Pause / Restart** and everyone follows. Chat included.
6. Done? **Delete the Drive file** — that's the cleanup. Nothing else to remove.

## Keyboard shortcuts

Shortcuts are active whenever the video is loaded and you're not typing in an input field.

| Key | Action |
| --- | --- |
| `Space` | Play / pause |
| `F` | Fullscreen toggle |
| `M` | Mute toggle |
| `←` / `→` | Seek 5 s back / forward |
| `↑` / `↓` | Volume up / down |
| `Home` / `End` | Jump to start / end |
| `PageUp` / `PageDown` | Skip 30 s forward / back |

When the host seeks with any of the arrow / Home / End / PageUp / PageDown keys,
the new position is broadcast to everyone in the room so they stay in sync.

## Notes

- The `<video>` element has **no visible seek bar** by design — control playback with
  the buttons and the keyboard shortcuts above. Seeking via keyboard is synced to the room.
- Late joiners auto-sync: they get the video + playing state when they connect.
- The app converts Drive share links into the streamable URL automatically
  (`drive.google.com/uc?export=download&id=…`). Direct `.mp4/.webm/.mkv` URLs work too.
- Sync runs through PeerJS's free public broker (`0.peerjs.com`). If that service is
  ever down, rooms won't connect until it's back.
- The Drive link is the only credential — keep it private (don't post it publicly).

## Run locally

```bash
python3 -m http.server 8000   # from this folder → http://localhost:8000
```
