Nx官网: https://nx.dev/


1. npx create-nx-workspace@latest app-name --preset=yarn
2. cd app-name && yarn add @nrwl/angular -D 添加angular项目的依赖
3. nx g @nrwl/angular:host base 设置基座项目
4. nx g @nrwl/angular:remote ng-child --host=base 设置子应用程序(基座为base)
5. yarn start