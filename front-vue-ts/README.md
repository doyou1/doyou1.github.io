# vite path alias 관련 설정

- https://chaika.hatenablog.com/entry/2022/05/14/083000

# tpescript lint 관련 설정

- https://typescript-eslint.io/linting/configs/
- trouble shooting
  - https://stackoverflow.com/questions/66773897/react-using-typescript-dont-use-as-a-type

# eslint && pretiier 에러 발생시

```javascript
// ./.vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
