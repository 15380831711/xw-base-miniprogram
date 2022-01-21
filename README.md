# xw-base-miniprogram
~~基于TypeScript的微信小程序基础项目（更新中......）~~

<font color='red'>由于最近几年都在用taro和uni跨端开发，原生方式几乎没怎么用......建议使用最新版本微信开放工具新建ts工程，支持less、sass，对于ts的支持更加友好，强烈推荐！（几年前官方存在的问题基本都已修复）</font>

# 开发指引

## 克隆项目

git clone https://github.com/15380831711/xw-base-miniprogram.git

## 修改“xw-base-miniprogram”工程名

建议修改“xw-base-miniprogram”工程名，并全局替换工程内的“xw-base-miniprogram”为你的项目文件夹名。

## 安装依赖

npm i

## 编译ts文件

npm run tsc

vscode中使用 CTRL + SHIFT + B 开启tsc监视（自动编译ts文件）

## 微信开发者工具中导入项目

微信开发者工具导入的项目，目前不会自动编译ts，所以使用vscode检测ts文件并自动编译ts文件为js文件，微信开发者工具中会自动刷新项目。

目前微信开发者工具新建页面，默认没有ts文件，需要手动新建。

## 其它开发工具

目前主要用于ts page 的创建，后期会加入创建基础项目等功能。

### 安装

`npm i @xiaheng/xa-cli -g`

### 创建 ts page

`xw-cli create page my-page`
