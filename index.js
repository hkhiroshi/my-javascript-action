const core = require("@actions/core");
const github = require("@actions/github");

try {
  // 入力パラメータの取得
  const message = core.getInput("message");

  // メッセージを出力
  console.log(`Message: ${message}`);

  // 現在時刻を取得
  const time = new Date().toTimeString();

  // 出力パラメータの設定
  core.setOutput("time", time);

  // GitHub コンテキストの取得と出力
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`Event payload: ${payload}`);
} catch (error) {
  // エラーが発生した場合は失敗として扱う
  core.setFailed(error.message);
}
