# WORKFLOWS.md - 定期タスク・自動化

## 容量監視（capacity-monitor）

### 設定
| 項目 | 値 |
|------|-----|
| **スケジュール** | 毎時0分（`0 * * * *`）|
| **タイムゾーン** | Asia/Tokyo |
| **配信先** | Discord（taki074529）|
| **セッション** | isolated |
| **モデル** | kimi-coding/k2p5 |

### 実行内容
1. ディスク容量チェック
   ```bash
   df -h / | tail -1 | awk '{print $5}' | tr -d '%'
   ```

2. ワークスペース容量チェック
   ```bash
   du -sh /root/.openclaw/workspace 2>/dev/null | cut -f1
   ```

3. ダッシュボード画像作成
   - スクリプト: `/tmp/create_dashboard_v2.py`
   - フォント: Noto Sans CJK JP
   - 出力: `/tmp/capacity_dashboard.png`

4. Discordに画像付きで報告

### しきい値
- ディスク容量: 80%超えで警告
- ワークスペース: 異常な増加を監視

## Heartbeat（定期チェック）

### 内容
- HEARTBEAT.md に従って定期チェック
- 30分ごとのポーリング
- 必要に応じてAIニュース収集

### 注意
- 深夜帯（23:00-07:00）はAIニュースも軽めに
- 同じニュースの繰り返し報告は避ける

## GitHub自動同期

### トリガー条件
以下のファイルが更新された場合、自動的にGitHubにもpush：
- IDENTITY.md（基本情報）
- SOUL.md（価値観・性格）
- USER.md（ユーザー情報）
- MEMORY.md（長期記憶）
- TOOLS.md（環境設定）
- WORKFLOWS.md（ワークフロー）
- SKILLS.md（スキル一覧）

### 同期スクリプト
```bash
/root/.openclaw/workspace/scripts/sync-akane-manual.sh "コミットメッセージ"
```

### ポリシー
- **更新頻度**: ファイル変更時に即座に実行
- **コミットメッセージ**: 変更内容を簡潔に記載
- **プッシュ**: 自動実行

## 今後追加予定

### 自動売買ボット監視
- [ ] Binance取引状況の定期レポート
- [ ] 損益ダッシュボードの自動生成
- [ ] 異常検知時のアラート

### Twitter/X監視
- [ ] 特定アカウントの新着ツイート監視
- [ ] キーワード検索の定期実行
- [ ] 重要ツイートの自動保存

### AIニュース収集
- [ ] 毎日のAIニュース検索
- [ ] 重要記事の要約と保存
- [ ] 週次レポートの生成

### その他
- [ ] 天気予報の定期取得
- [ ] カレンダー連携（予定通知）
- [ ] システム更新の定期チェック

## ワークフロー管理

### Cronジョブ一覧の確認
```bash
cron list
```

### 手動実行
```bash
cron run --jobId <job-id>
```
