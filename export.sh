#!/bin/bash

MD_FILE="./進撃の巨人.md"

LINE_BGN=$(sed -n '/\<\!\-\- main\.mmd \-\-\>/=' $MD_FILE)
LINE_END=$(sed -n '/\<\!\-\- main\.mmd end \-\-\>/=' $MD_FILE)
LINE_BGN=$(expr $LINE_BGN + 3)
LINE_END=$(expr $LINE_END - 3)

echo $LINE_BGN
echo $LINE_END

mkdir -p out
cat $MD_FILE |awk "$LINE_BGN<=NR && NR<=$LINE_END{print \$0}" > out/main.mmd
