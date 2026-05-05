---
title: "在vscode配置C++环境(clang编译器)"
category: "1"
keywords: "vscode,C++,clang"
date: 2020-12-29
summary: "vscode配置C++编译环境，傻瓜式配置向导，一看就会。clang比gcc编译效率更高。"
featured: true
---

clang 比 gcc 编译效率更高，更多详情自行了解。

## 前提

安装好 vscode，需要下载两个东西：

1. **LLVM** - [下载链接](http://releases.llvm.org/download.html)
2. **MINGW64** - [下载链接](http://sourceforge.net/projects/mingw-w64/files/)

两个都下载好后得到一个安装包一个压缩包。

## 安装步骤

LLVM 双击安装，选择 **Add LLVM to the system PATH for all users**（否则需要自己配置环境变量）。其他选项无脑下一步，路径也别改。

默认路径是 `C:\Program Files\LLVM`，安装完大约 2G 多一点。

## 配置 MINGW64

将 mingw64 压缩包解压后，把 `bin` 目录添加到系统环境变量 PATH 中。

## 测试

创建一个 `hello.cpp` 文件：

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World" << endl;
    return 0;
}
```

在终端中编译运行：

```bash
clang++ hello.cpp -o hello
./hello
```

如果输出 `Hello World`，说明环境配置成功。
