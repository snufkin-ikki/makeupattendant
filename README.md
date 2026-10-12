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
