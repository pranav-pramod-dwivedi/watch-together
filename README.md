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

## Notes

- The `<video>` element has **no seek bar** by design — play, pause, restart only.
- Late joiners auto-sync: they get the video + playing state when they connect.
- The app converts Drive share links into the streamable URL automatically
  (`drive.google.com/uc?export=download&id=…`). Direct `.mp4/.webm/.mkv` URLs work too.
- Sync runs through PeerJS's free public broker (`0.peerjs.com`). If that service is
  ever down, rooms won't connect until it's back.
- The Drive link is the only credential — keep it private (don't post it publicly).
- Space bar toggles play/pause.

## Run locally

```bash
python3 -m http.server 8000   # from this folder → http://localhost:8000
```
