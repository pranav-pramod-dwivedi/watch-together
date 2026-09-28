export function driveIdFrom(link) {
  if (typeof link !== 'string') return null;
  let m = link.match(/\/file\/(?:u\/\d+\/)?d\/([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  m = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  m = link.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  m = link.match(/\/open\?id=([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  m = link.match(/\/uc\?id=([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  return null;
}

export function toStreamUrl(link) {
  link = (link || '').trim().replace(/^["']|["']$/g, '');
  if (!link) return null;
  if (!/^https?:\/\//i.test(link)) return null;
  if (/drive\.google\.com/.test(link)) {
    const id = driveIdFrom(link);
    if (!id) return null;
    return 'https://drive.google.com/uc?export=download&id=' + encodeURIComponent(id);
  }
  if (/dropbox\.com/.test(link)) {
    if (/[?&]dl=[01]/.test(link)) {
      return link.replace(/([?&])dl=[01]/, '$1raw=1');
    }
    return link.includes('?') ? link + '&raw=1' : link + '?raw=1';
  }
  if (/github\.com\/[^/]+\/[^/]+\/blob\//.test(link)) {
    return link.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
  }
  return link;
}

export function formatTime(sec) {
  if (typeof sec !== 'number' || isNaN(sec) || !isFinite(sec) || sec <= 0) return '0:00';
  sec = Math.floor(sec);
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  const ss = (s < 10 ? '0' : '') + s;
  const mm = (h > 0 && m < 10 ? '0' : '') + m;
  return h > 0 ? h + ':' + mm + ':' + ss : m + ':' + ss;
}

export const ROOM_CODE_CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZ';

export function randCode(len = 5) {
  let s = '';
  for (let i = 0; i < len; i++) {
    s += ROOM_CODE_CHARSET.charAt(Math.floor(Math.random() * ROOM_CODE_CHARSET.length));
  }
  return s;
}
