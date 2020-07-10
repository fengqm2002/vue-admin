# vue-admin
vue3.0beta practice

# GIT从远程仓库克隆项目到本地

仓库名称：vue-admin
项目结构为：  
```   
|-master
|
|-dev
|   |
|   |-vue-component-V1.0.0-20200709
|   |
```   
+ 开发代码在 vue-component-V1.0.0-20200709 分支
##  操作
1. cd 到本地文件夹，进入 git 状态命令下
2. 将本地仓库程序化，
```   
git init
```   
3. 将远程项目从 github 克隆下来，
```   
git clone https://github.com/你的github名/仓库名.git
```   
4. 将 dev 分支拉到本地
```   
git fetch origin dev
```   
5. 在本地创建分支 dev 并切换到该分支,与远程分支关联。
```   
git checkout -b dev origin 
```   
6. 把远程dev分支的内容拉取到本地
```   
git pull origin dev
```   
+ 注：（本地代码是dev分支时需要先git pull origin dev 更新远程代码到本地，在进行git pull ，否则会用冲突）

7. (重复4、5、6) 拉vue-component-V1.0.0-20200709分支到本地
```   
git fetch origin vue-component-V1.0.0-20200709

git checkout -b vue-component-V1.0.0-20200709 origin

git pull origin vue-component-V1.0.0-20200709
```   
+ 从远程拉取结束

## 如果本地仓库存在
1. cd 到工程目录
```  
cd project
``` 
2. 切换到需要更新的分支'dev'，如果已经在则跳过
```  
git checkout dev
```   
3. 拉去远程代码更新本地
```  
git pull -p
```  
3. (第三步等同于下面的命令)
```  
git fetch --prune origin 
git fetch -p
```  

# git 更新远程分支列表
```  
git remote update origin --prune

或

git remote update origin -p
```   