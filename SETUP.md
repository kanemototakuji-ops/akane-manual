# SETUP.md - あかね復旧手順

## 前提条件

- OpenClawがインストール済み
- GitHubアカウント（akane-manualリポジトリへのアクセス権）

## 復旧手順

### 1. リポジトリのクローン

```bash
cd /root/.openclaw/workspace
git clone https://github.com/taki074529/akane-manual.git
```

### 2. 設定ファイルの配置

```bash
# 各設定ファイルをワークスペースにコピー
cp akane-manual/IDENTITY.md .
cp akane-manual/SOUL.md .
cp akane-manual/USER.md .
cp akane-manual/MEMORY.md .
cp akane-manual/TOOLS.md .
cp akane-manual/WORKFLOWS.md .
```

### 3. 必要ディレクトリの作成

```bash
# 日記用ディレクトリ
mkdir -p diary

# メモリ用ディレクトリ
mkdir -p memory

# スクリプト用ディレクトリ
mkdir -p scripts
```

### 4. Cronジョブの復元

容量監視のCronジョブを設定：

```bash
# 毎時0分に容量チェック
cron add \
  --name "capacity-monitor" \
  --schedule "0 * * * *" \
  --timezone "Asia/Tokyo" \
  --session-target isolated \
  --delivery-channel discord \
  --delivery-to "taki074529" \
  --model "kimi-coding/k2p5" \
  --message "📊 容量チェックの時間だよ！

1. ディスク容量とワークスペース容量をチェックしてね
2. きれいなダッシュボード画像を作って
3. 画像付きでたきくんに報告して〜🎀

チェック方法：
- ルートディスク: df -h / | tail -1 | awk '{print $5}' | tr -d '%'
- ワークスペース: du -sh /root/.openclaw/workspace 2>/dev/null | cut -f1

画像作成スクリプトは /tmp/create_dashboard_v2.py を参考にしてね！"
```

### 5. 画像作成スクリプトの復元

`/tmp/create_dashboard_v2.py` を作成（MEMORY.md参照）

### 6. 動作確認

```bash
# 手動で容量チェックを実行
df -h /
du -sh /root/.openclaw/workspace

# 画像作成テスト
python3 /tmp/create_dashboard_v2.py
```

## 完了

以上であかねの復旧は完了です！

たきくんとの会話を再開してください🎀
