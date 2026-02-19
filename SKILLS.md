# SKILLS.md - あかねのスキル一覧

## グローバルスキル（/usr/lib/node_modules/openclaw/skills/）

### コミュニケーション
| スキル名 | 説明 |
|---------|------|
| discord | Discord操作（メッセージ送信、リアクションなど）|
| bluebubbles | iMessage連携 |

### 生産性・管理
| スキル名 | 説明 |
|---------|------|
| apple-notes | Apple Notes連携 |
| apple-reminders | Apple Reminders連携 |
| bear-notes | Bear Notes連携 |
| 1password | 1Password連携 |
| eightctl | Eight Sleep連携 |

### 開発・技術
| スキル名 | 説明 |
|---------|------|
| coding-agent | コーディングエージェント |
| gh-issues | GitHub Issues管理 |
| canvas | Canvas描画・操作 |
| clawhub | ClawHubスキル管理 |
| gemini | Google Gemini連携 |

### 情報収集
| スキル名 | 説明 |
|---------|------|
| blogwatcher | ブログ監視 |
| gifgrep | GIF検索 |
| camsnap | カメラ撮影 |

### その他
| スキル名 | 説明 |
|---------|------|
| food-order | フードオーダー |
| blucli | BlueCLI連携 |

## ワークスペーススキル（/root/.openclaw/workspace/skills/）

### プレゼンテーション
| スキル名 | 説明 | 場所 |
|---------|------|------|
| generate-presentation | プレゼン資料生成 | workspace/skills/generate-presentation/ |
| pptx-generator | PPTX生成テンプレート | workspace/skills/pptx-generator/ |
| tiangong-wps-ppt-automation | WPS/PowerPoint自動化 | workspace/skills/tiangong-wps-ppt-automation/ |
| office | Officeスキル（Excel/Word/PowerPoint）| workspace/skills/office/ |

## 主要スキルの詳細

### PPTX生成（generate-presentation）
- **用途**: McKinsey風のプレゼン資料作成
- **テンプレート**: `template.js`
- **使い方**: `node template.js`

### WPS/PowerPoint自動化（tiangong-wps-ppt-automation）
- **用途**: WindowsでのPPT操作自動化
- **機能**: テキスト読み取り、PDFエクスポート、画像抽出、フォント統一など

### Officeスキル
- **対応**: Excel, Word, PowerPoint, Google Workspace
- **機能**: フォーマット、数式、自動化

## 今後追加したいスキル

- [ ] 自動売買ボット（Binance）
- [ ] Twitter/X監視（FxTwitter API活用）
- [ ] AIニュース収集
- [ ] 天気予報連携
- [ ] カレンダー連携

## スキルの使い方

```bash
# スキルの場所を確認
ls /usr/lib/node_modules/openclaw/skills/
ls /root/.openclaw/workspace/skills/

# SKILL.mdを読む
cat /usr/lib/node_modules/openclaw/skills/weather/SKILL.md
```
