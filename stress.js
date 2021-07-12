import http from 'k6/http';
import { sleep } from 'k6';

const TEST_URL = 'http://123.57.95.176/health-check'

export let options = {
  // 例１：同時接続user数10人,期間30秒でどのくらい反復できるか？計測する。
  vus: 10,
  duration: '30s',
};

export default function () {
  http.get(TEST_URL);
  sleep(1);
}
