# makeupattendant

これまでのデータをバックアップするためのリポジトリです。

## フォルダ構成

| フォルダ | 用途 |
| --- | --- |
| `data/` | バックアップするデータ本体（CSV・JSON・画像など） |
| `docs/` | メモ・仕様・作業記録などのドキュメント |

## バックアップ手順（例）

```bash
# 1. ファイルを data/ や docs/ に置く
# 2. 変更を記録して GitHub に送る
git add .
git commit -m "Backup: YYYY-MM-DD"
git push
```

## 注意

- パスワード・APIキー・個人情報などの機密データは置かないでください（`.gitignore` で一部除外しています）。
- 1ファイル 100MB を超えるものは GitHub に置けません。大きなファイルは Git LFS などを検討してください。

## Claude 用スキル

| スキル | 場所 | 内容 |
| --- | --- | --- |
| UI UX Pro Max | `.claude/skills/ui-ux-pro-max/` | 配色・フォント・レイアウト・アクセシビリティなどのUI/UXデザイン知識集（MIT ライセンス） |

- 取得元: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill （v2.15.0、コミット `7246805`）
- このリポジトリで Claude Code を使うと自動で読み込まれます。
- 変更点: テスト用フォルダを除外し、検索スクリプトの呼び出しパスをこのリポジトリ用に修正。
