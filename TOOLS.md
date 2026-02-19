# TOOLS.md - 環境固有の設定

## システム情報

| 項目 | 値 |
|------|-----|
| **OS** | Linux 6.8.0-55-generic (x64) |
| **Node.js** | v22.22.0 |
| **シェル** | bash |
| **ワークスペース** | /root/.openclaw/workspace |

## OpenClaw設定

### チャンネル
| チャンネル | 設定 |
|-----------|------|
| Discord | taki074529（たきくんとのDM）|

### モデル
- **デフォルト**: kimi-coding/k2p5

### スキル保存場所
- **グローバル**: `/usr/lib/node_modules/openclaw/skills/`
- **ワークスペース**: `/root/.openclaw/workspace/skills/`

## SSH設定

### GitHub用SSHキー
- **種類**: ED25519
- **場所**: `/root/.ssh/id_ed25519`
- **フィンガープリント**: SHA256:F0fhsGBXrFWLFp6rjt46N2Vv1tLvob2+h7SOuWjhG3E
- **用途**: akane-manualリポジトリへのpush

## スクリプト・ツール

| スクリプト | 場所 | 用途 |
|-----------|------|------|
| sync-akane-manual.sh | `/root/.openclaw/workspace/scripts/` | GitHub自動同期 |
| create_dashboard_v2.py | `/tmp/create_dashboard_v2.py` | ダッシュボード画像生成 |
| check_capacity.sh | `/root/.openclaw/workspace/scripts/` | 容量監視（予定）|

## フォント

### 日本語対応フォント
- **Noto Sans CJK JP**: `/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc`
- **用途**: 画像生成時の日本語表示

## 今後追加予定

### Cameras
- [ ] カメラ名と設置場所

### SSHホスト
- [ ] リモートサーバー接続設定

### TTS
- [ ] 好みのボイス設定
- [ ] デフォルトスピーカー

### その他
- [ ] デバイスニックネーム
- [ ] 部屋名
- [ ] 環境固有の設定

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.
