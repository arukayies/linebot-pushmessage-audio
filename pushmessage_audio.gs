const TOKEN = 'LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)';
const DEBUGID = 'LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)';

//LINEBOTで音声メッセージを送るサンプル
function pushmessage_audio() {
  //音声メッセージを送る
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TOKEN, //LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)
    },
    'method': 'POST',
    'payload': JSON.stringify({
      'to': DEBUGID, //LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)
      'messages': [{
        'type': 'audio',
        'originalContentUrl': 'https://soundeffect-lab.info/sound/battle/mp3/sword-slash1.mp3',//音声：効果音ラボ
        'duration': 60000 // 音声ファイルの長さ（ミリ秒）
      }],
      'notificationDisabled': false // trueだとユーザーに通知されない
    }),
  });
}