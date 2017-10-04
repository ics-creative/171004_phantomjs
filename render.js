const page = require('webpage').create();
const system = require('system');

// argsは、phantom.argsでアクセスできる。
const address = system.args[1];
const output = system.args[2];
const width = system.args[3];
const height = system.args[4];

page.viewportSize = {
  width: width,
  height: height,
  margin: '0px',
  padding: '0px'
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