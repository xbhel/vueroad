#!/bin/bash

## cpi <src> <dest> [pattern] [depth 1]
## cpi: "cp ignore"，用于在拷贝忽略指定文件或目录，pattern: 忽略文件的模式匹配符，depth: 查找层数，默认 -1

src=$1
dest=$2
pattern=$3
params=("$@")
depth=1

file_path="$0"
# 获取当前文件名称并去掉 .sh
file_name=$(basename "$0" .sh)
link_name="/usr/bin/$file_name"

# 获取 depth 参数
for ((i = 0; i < "${#params[@]}"; i++)); do
  if [ "${params[i]}" == 'depth' ]; then
    depth=${params[i + 1]}
    break
  fi
done

# -mindepth 1 选项指定find命令忽略当前目录本身
# -maxdepth 1 选项指定 find 命令只在当前目录层级搜索，而不进一步递归子目录
# 使用 -not选项结合 -name 选项来排除指定文件
readarray -t files <<<"$(find "$src" -maxdepth "$depth" -mindepth 1 -not -name "$pattern")"
mkdir -p "$dest"
cp -r "${files[@]}" "$dest"

# 在 /usr/bin 路径下创建符合链接，以便可以直接执行命令
chmod +x "$file_path"
if ! [ -h "$link_name" ] && ! [ -f "$link_name" ]; then
  # 兼容 windows, windows 上创建链接包含路径报错
  ln -s "$file_path" "$file_name" && mv "$file_name" /usr/bin/
fi
