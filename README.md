# watch-together

Free, private, **temporary** watch party for friends who live far apart. No accounts,
no servers, nothing stored. Your video streams from **your own Google Drive**; the
room syncs play/pause over **peer-to-peer** (PeerJS). Built as a single static page.

## What it does

- Paste a Google Drive link or any direct `.mp4` / `.webm` / `.mkv` video URL.
- **Create room** → share the invite link (it carries the room code).
- Friends open the link → auto-join → **Play / Pause / Restart** stays in sync for everyone.
- Chat included. Nothing is stored anywhere.

**Important for Google Drive links:** 1–3 GB files may not stream directly in a
browser because Google returns a *download* page instead of a playable file. If the
video fails to load, the app shows a hint. In that case use a direct `.mp4` URL
(any host that streams) instead.

## How to use

1. **Upload** the movie to Google Drive (Drive → New → File upload), free up to 15 GB.
2. Right-click the file → **Share** → **General access: Anyone with the link → Viewer** → copy link.
3. Open the app → paste the Drive link → **Load**.
4. **Create room** → copy the invite link → send to your friends.
5. Friends open the link → auto-join → anyone can play/pause, everyone follows. Chat included.
6. Done? **Delete the Drive file** — that's the only cleanup.

## Run it

### Option A — GitHub Pages (recommended, free)

1. Push this repo to GitHub.
2. Go to **Settings → Pages** → Source: **Deploy from a branch**, branch `main`, folder `/` → Save.
3. Your app is live at `https://<user>.github.io/watch-together/`.
4. The invite links auto-point to wherever the page is hosted — just send them as-is.

### Option B — local server

```bash
python3 -m http.server 8000   # from this folder → http://localhost:8000
```

Then open `http://localhost:8000` (share your LAN IP so friends on the same network
can join the room).

## Notes

- No seek bar by design — **Play / Pause / Restart** only.
- Sync runs through PeerJS's free public broker (`0.peerjs.com`). If it's ever down,
  rooms won't connect until it's back.
- Space bar toggles play/pause.
- The Drive link is the only credential — keep it private and delete it when done.