# 内置分类词库来源

来源：[KyleBing/english-vocabulary](https://github.com/KyleBing/english-vocabulary)

固定版本：`c4c6c80879ff17d7025c28fb853a4991c8e6be6a`

仓库声明许可证：BSD-3-Clause，原文保存在 `KyleBing-BSD-3-Clause.txt`。

导入文件：`json/1-初中-顺序.json`、`json/2-高中-顺序.json`、`json/3-CET4-顺序.json`、`json/4-CET6-顺序.json`、`json/5-考研-顺序.json`。

本项目进行了字段转换、英文大小写去重、重复释义合并和卡片释义筛选。保留完整释义，不复制音频、图片或例句。筛选数量和输入、输出 SHA-256 可在 `src/data/vocabularies/manifest.json` 核对。

这些是社区整理学习词库，不代表最新官方考试大纲或官方完整词表。

上游沿革：KyleBing README 说明数据由 `kajweb/dict` 派生；后者说明来源为有道背单词应用。上述 BSD 许可证为该仓库的许可声明，本项目未取得有道等上游权利方单独授权，不能据此声称上游内容的再分发授权已全部核实。
