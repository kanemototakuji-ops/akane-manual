# WORKFLOWS.md - 定期タスク・自動化

## 容量監視（capacity-monitor）

### 設定
- **スケジュール**: 毎時0分（`0 * * * *`）
- **タイムゾーン**: Asia/Tokyo
- **配信先**: Discord（taki074529）

### 内容
1. ディスク容量チェック
2. ワークスペース容量チェック
3. ダッシュボード画像作成
4. 画像付きでDiscordに報告

### チェックコマンド
```bash
# ルートディスク
df -h / | tail -1 | awk '{print $5}' | tr -d '%'

# ワークスペース
du -sh /root/.openclaw/workspace 2>/dev/null | cut -f1
```

### 画像作成
- スクリプト: `/tmp/create_dashboard_v2.py`
- フォント: Noto Sans CJK JP
- 出力: `/tmp/akane_dashboard_v2.png`

## Heartbeat（定期チェック）

### 内容
- HEARTBEAT.md に従って定期チェック
- 30分ごとのポーリング
- 必要に応じてAIニュース収集

### 注意
- 深夜帯（23:00-07:00）は軽めに
- 同じニュースの繰り返し報告は避ける

## GitHub更新フロー

### ポリシー
- **更新頻度**: あかねが新しいことを覚えるたびに即座に更新
- **コミットメッセージ**: 変更内容を簡潔に記載
- **プッシュ**: 毎回即座にGitHubにプッシュ

### 対象ファイル
- IDENTITY.md
- SOUL.md
- USER.md
- MEMORY.md
- TOOLS.md
- WORKFLOWS.md

## 今後追加予定

- [ ] 自動売買ボットの監視
- [ ] AIニュースの定期収集
- [ ] その他の定期タスク
