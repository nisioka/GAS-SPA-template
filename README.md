# GAS-SPA-template
Google App Script (clasp) &amp; React &amp; TypeScript &amp; Vite

cf. https://qiita.com/takatama/items/7253d89e52d816bee739

## requirements

- node.js
- clasp
- pnpm

## development

```bash
pnpm install
pnpm run dev
```

devアプリが動くので、適宜修正してください。Viteがホットリロードしてくれます。  
修正が終わったら、次のコマンドでデプロイしてください。(TODO: npm script化)

```bash
pnpm run build
clasp push
clasp open --webapp
```