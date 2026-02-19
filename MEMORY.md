# MEMORY.md - あかねの長期記憶

## システム設定・使い方メモ

### Cronリマインド機能
```bash
# 特定時間にリマインド
cron add --at "2026-02-18T22:41:00+08:00" --text "メッセージ"

# 例：5分後にリマインド
cron add --at "2026-02-18T22:46:00+08:00" --text "5分経ったよ！"

# 毎時実行
cron add --schedule "0 * * * *" --timezone "Asia/Tokyo" --text "毎時リマインド"
```

### 作業中の進捗報告
- 長時間の作業（5分以上）→ 5分おきに進捗を報告
- ユーザーに「作業中です」という明示的な連絡を入れる

### 重要な設定
- リマインドは `cron` コマンドで設定
- `sessionTarget: main` で現在のセッションに通知
- `deleteAfterRun: true` で一度きりのリマインド
- `sessionTarget: isolated` + `delivery` でDiscordに直接通知

## 外部API・ツール

### FxTwitter API（無料Twitter API）
**用途**: Twitter/Xのツイート内容をAPIキー不要で取得

**URL変換ルール**:
```
https://x.com/ユーザー名/status/ID
↓
https://api.fxtwitter.com/ユーザー名/status/ID
```

**取得できる情報**:
- ツイート全文
- 作者情報（名前、スクリーンネーム、アイコン、フォロワー数）
- エンゲージメント（いいね、RT、ブックマーク数）
- メディアURL（画像・動画、複数解像度対応）
- 引用ツイート（全文含む）
- 投稿日時

**使用例**:
```bash
web_fetch https://api.fxtwitter.com/gorochi0315/status/2024269074432479536
```

**特徴**:
- ✅ APIキー不要、完全無料
- ✅ Cloudflare Workersで動作（安定性◎）
- ✅ 日本語・韓国語など多言語対応
- ✅ OpenClawの `web_fetch` ツールで直接取得可能

## 画像生成・ダッシュボード

### Python/Pillowによる画像生成
- **スクリプト**: `/tmp/create_dashboard_v2.py`
- **フォント**: Noto Sans CJK JP（日本語対応）
- **用途**: 容量監視ダッシュボード、各種レポート画像

### 送信方法
```bash
message send --media "/tmp/image.png" --target "user:1355820442857902254"
```

## GitHub連携

### ユーザー情報
- **GitHubユーザー名**: `kanemototakuji-ops`
- **リポジトリ**: `akane-manual`
- **URL**: https://github.com/kanemototakuji-ops/akane-manual

### 自動同期スクリプト
- **場所**: `/root/.openclaw/workspace/scripts/sync-akane-manual.sh`
- **使い方**: `./sync-akane-manual.sh "コミットメッセージ"`
- **同期対象**: IDENTITY.md, SOUL.md, USER.md, MEMORY.md, TOOLS.md, WORKFLOWS.md, SKILLS.md

## Googleアカウント

- **メール**: akanekurokawa0claw@gmail.com
- **パスワード**: Akanetaki12345

## 注意事項

### 容量監視
- ディスク容量: 80%超えで警告
- コンテキスト容量: セッションステータスで確認
- チェック間隔: 1時間ごと（毎時0分）
- **削除禁止**: extensionsフォルダ、システムファイル
- **削除可能**: /tmp/の一時ファイル、古いログ、node_modules（確認後）

### 一時ファイル方針
- 履歴書テンプレートなどの一時ファイルはすぐ削除OK

## 今後追加予定

- [ ] 自動売買ボット（Binance）監視
- [ ] Twitter/X監視・自動収集
- [ ] AIニュース定期収集
- [ ] 天気予報連携
- [ ] カレンダー連携
