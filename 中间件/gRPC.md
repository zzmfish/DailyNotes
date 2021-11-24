---
tags: 未分类
---



## 安装

#### C++
```bash
# 参考: https://grpc.io/docs/languages/cpp/quickstart/
git clone --recurse-submodules -b v1.33.2 https://github.com/grpc/grpc

cd grpc
mkdir -p cmake/build

pushd cmake/build
cmake -DgRPC_INSTALL=ON \
      -DgRPC_BUILD_TESTS=OFF \
      -DCMAKE_INSTALL_PREFIX=$MY_INSTALL_DIR \
      ../..
make -j
make install

popd
```