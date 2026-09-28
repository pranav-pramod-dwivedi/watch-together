import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  driveIdFrom,
  toStreamUrl,
  formatTime,
  randCode,
  ROOM_CODE_CHARSET
} from '../src/watch-utils.mjs';

describe('watch-together utilities', () => {
  describe('driveIdFrom', () => {
    it('extracts ID from standard Google Drive URL', () => {
      assert.equal(
        driveIdFrom('https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J/view?usp=sharing'),
        '1A2B3C4D5E6F7G8H9I0J'
      );
    });

    it('extracts ID from multi-account Google Drive URL (/file/u/0/d/...)', () => {
      assert.equal(
        driveIdFrom('https://drive.google.com/file/u/0/d/1A2B3C4D5E6F7G8H9I0J/view'),
        '1A2B3C4D5E6F7G8H9I0J'
      );
      assert.equal(
        driveIdFrom('https://drive.google.com/file/u/2/d/XYZ_123-abc/preview'),
        'XYZ_123-abc'
      );
    });

    it('extracts ID from query parameter Drive URL', () => {
      assert.equal(
        driveIdFrom('https://drive.google.com/open?id=DRIVE_ID_999'),
        'DRIVE_ID_999'
      );
      assert.equal(
        driveIdFrom('https://drive.google.com/uc?id=UC_ID_777&export=download'),
        'UC_ID_777'
      );
    });

    it('returns null for non-drive URLs or malformed links', () => {
      assert.equal(driveIdFrom('https://example.com/video.mp4'), null);
      assert.equal(driveIdFrom(''), null);
      assert.equal(driveIdFrom(null), null);
    });
  });

  describe('toStreamUrl', () => {
    it('converts Google Drive link to direct uc download stream', () => {
      const url = toStreamUrl('https://drive.google.com/file/u/1/d/12345ABCDE/view');
      assert.equal(url, 'https://drive.google.com/uc?export=download&id=12345ABCDE');
    });

    it('rewrites Dropbox links with raw=1 query parameter', () => {
      assert.equal(
        toStreamUrl('https://www.dropbox.com/s/xyz/video.mp4?dl=0'),
        'https://www.dropbox.com/s/xyz/video.mp4?raw=1'
      );
      assert.equal(
        toStreamUrl('https://www.dropbox.com/scl/fi/xyz123/video.mp4?rlkey=abc&dl=0'),
        'https://www.dropbox.com/scl/fi/xyz123/video.mp4?rlkey=abc&raw=1'
      );
      assert.equal(
        toStreamUrl('https://www.dropbox.com/s/xyz/video.mp4'),
        'https://www.dropbox.com/s/xyz/video.mp4?raw=1'
      );
    });

    it('converts GitHub blob link to raw content URL', () => {
      const input = 'https://github.com/user/repo/blob/main/video.mp4';
      const expected = 'https://raw.githubusercontent.com/user/repo/main/video.mp4';
      assert.equal(toStreamUrl(input), expected);
    });

    it('passes through direct http/https URLs', () => {
      assert.equal(toStreamUrl('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'), 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
    });

    it('blocks dangerous protocols', () => {
      assert.equal(toStreamUrl('javascript:alert(1)'), null);
      assert.equal(toStreamUrl('data:text/html,<script>alert(1)</script>'), null);
      assert.equal(toStreamUrl('file:///etc/passwd'), null);
    });
  });

  describe('formatTime', () => {
    it('formats seconds into mm:ss and hh:mm:ss', () => {
      assert.equal(formatTime(0), '0:00');
      assert.equal(formatTime(5), '0:05');
      assert.equal(formatTime(65), '1:05');
      assert.equal(formatTime(3599), '59:59');
      assert.equal(formatTime(3600), '1:00:00');
      assert.equal(formatTime(3665), '1:01:05');
    });

    it('handles negative, NaN, and non-numeric inputs gracefully', () => {
      assert.equal(formatTime(-10), '0:00');
      assert.equal(formatTime(NaN), '0:00');
      assert.equal(formatTime(Infinity), '0:00');
      assert.equal(formatTime(-Infinity), '0:00');
      assert.equal(formatTime(null), '0:00');
      assert.equal(formatTime(undefined), '0:00');
      assert.equal(formatTime('60'), '0:00');
    });
  });

  describe('randCode', () => {
    it('generates a 5-character string from the room charset', () => {
      for (let i = 0; i < 30; i++) {
        const code = randCode();
        assert.equal(code.length, 5);
        for (const char of code) {
          assert.equal(ROOM_CODE_CHARSET.includes(char), true);
        }
      }
    });
  });
});
