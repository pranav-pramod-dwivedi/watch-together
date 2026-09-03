<p align="center">
  <img src="assets/cover.svg" width="830" alt="watch-together cover" />
</p>

<h1 align="center">watch-together</h1>

<p align="center">
  Watch the same movie with a friend who lives too far away for a couch.<br/>
  No accounts, no servers, nothing stored. Just a link you'll misplace.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/stack-HTML%20%2B%20JS%20%2B%20PeerJS-4f8cff" alt="stack" />
  <img src="https://img.shields.io/badge/host-GitHub%20Pages-24292e" alt="host" />
</p>

Video site on **your Google Drive**. You hit create room, send one link, and when
anyone presses play, pause or restart, everyone else gets dragged along with them.
There's also a chat box, for the "*did you catch that*" moments.

## Try it live

https://pranav-pramod-dwivedi.github.io/watch-together/

Open it, create room, send the invite. Finding a friend is on you.

## What you can do

- Paste a Drive link, or any video URL ending in `.mp4`, `.webm` or `.mkv`.
- Create room gives you a 5-letter code and an invite link with the code already in it.
- Friends join and auto-sync to wherever you are in the movie.
- Only play, pause and restart. No seek bar, so nobody can jump ahead and spoil it.
- Space bar plays / pauses. Chat's there if you want it.

## Run it yourself

```bash
python3 -m http.server 8000   # from this folder → http://localhost:8000
```

Permanent home is just enabling **Settings → Pages → branch `master`, folder `/`**.

## The Google Drive catch

Small files stream fine. Once they're bigger (roughly 100 MB+) Drive starts handling the
browser a download page instead of a watchable video, and the app will tell you it
broke. At that point just use a direct `.mp4` link and carry on.

## Fine print

- Sync goes through PeerJS's free public broker. If that goes down, rooms go down with it.
- The Drive link is the only credential. Keep it private. Delete the file when you're done.
- Nothing is stored anywhere, mostly because there's no server to store it on.

<p align="center">the movie might be bad, but at least you suffer together</p>
