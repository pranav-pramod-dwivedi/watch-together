<p align="center">
  <img src="assets/cover.svg" width="830" alt="watch-together cover" />
</p>

<h1 align="center">watch-together 🍿</h1>

<p align="center">
  <b>private · synced watch parties</b> for friends who live far apart.
  <br/>No accounts. No servers. Nothing stored. Just a link.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/stack-HTML%20%2B%20JS%20%2B%20PeerJS-4f8cff" alt="stack" />
  <img src="https://img.shields.io/badge/host-GitHub%20Pages-24292e" alt="host" />
  <img src="https://img.shields.io/badge/video-Google%20Drive-35c47f" alt="video" />
</p>

---

You load the movie from **your own Google Drive**, create a room, and send your friends
one link. Everyone joins, hits **play**… and it stays in sync. Play/pause/restart for one =
play/pause/restart for all. Chat included. It's a watch party, minus the travel. ✈️

## 🚀 Live

> 🔗 **https://pranav-pramod-dwivedi.github.io/watch-together/**

Open it, click **create room**, share the invite link — done.

## ✨ What it feels like

- **Paste a link** → Drive link or any direct `.mp4` / `.webm` / `.mkv` URL.
- **Create room** → a 5-letter code + invite link, all in one tap.
- **Friends join** → late joiners auto-sync to right where you are.
- **Controls** → play / pause / restart. That's it. No annoying seek bar fights. 😌
- **Chat** → jabber away while the movie plays.
- **Space bar** toggles play / pause.

## ▶️ Quick start

### Option A — your own GitHub Pages (that's the live link above)
```bash
git clone git@github.com:pranav-pramod-dwivedi/watch-together.git
cd watch-together
python3 -m http.server 8000     # → http://localhost:8000
```
Then turn on **Settings → Pages → Deploy from branch → `master` / `/`**.

### Option B — totally local (test with friends on the same Wi-Fi)
```bash
python3 -m http.server 8000     # share your LAN IP + :8000
```

## ⚠️ Google Drive gotcha
1–3 GB Drive files sometimes hand back a *download page* instead of a playable video
(Drive's 100 MB streaming limit). If it won't play, the app shows a little hint — just
drop in a direct `.mp4` URL instead and you're golden.

## 🔐 The nitty-gritty
- **The Drive link is the only credential** — it's your file, your rules. Delete it when you're done.
- Sync rides on PeerJS's free public broker (`0.peerjs.com`). If that broker ever naps, rooms wait until it wakes up.
- Nothing is stored on any server. Ever. That's the whole point.

---

<p align="center">made with ❤️ &amp; way too much free time · rewā, india</p>