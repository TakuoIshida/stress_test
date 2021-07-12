import http from 'k6/http';
import { check, sleep } from 'k6';

const TEST_URL = 'http://123.57.95.176/health-check'

export let options = {
  // 例２
  stages: [
    { duration: '10s', target: 20 }, //10sで20人のUserに増加させる。
    { duration: '0m30s', target: 10 }, //30秒で10人のUserに減少させる
    { duration: '10s', target: 0 }, //10秒で0人のUserに減少させる
  ],
};

export default function () {
  // 動作未確認。TODO: randumに値を取得する。
  const params = {
    id: 1,
    firstName: 'foo',
    lastName: 'bar',
  }
  let res = http.post(TEST_URL, JSON.stringify(params));
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
