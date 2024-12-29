```sh
# Compress file
pigz -9 largefile.csv
# Compress folder
tar cf - /path/to/folder | pigz > folder.tar.gz
```
