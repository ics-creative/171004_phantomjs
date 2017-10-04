const page = require('webpage').create();
const system = require('system');

// 引数は、system.argsでアクセスできる。
const address = system.args[1];
const output = system.args[2];
const VIEWPORT_W = system.args[3];
const VIEWPORT_H = system.args[4];

page.viewportSize = {
  width: VIEWPORT_W,
  height: VIEWPORT_H,
};

page.open(address,
  function (status) {
    if (status === 'success') {
      // 出力
      page.render(output);
      console.error('キャプチャーに成功しました');
      // 成功として終了
      phantom.exit(0);
    } else {
      console.error('キャプチャーに失敗しました');
      // エラーとして終了
      phantom.exit(1);
    }
  }
);