### vue3-eslint-prittier

- references: https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/

- Installing Prettier

  > npm install --save-dev --save-exact prettier

- Create Prettier config file

  > echo {}> .prettierrc.json

- Installing ESLint

  > npm install --save-dev eslint eslint-plugin-vue

- config ESLint

  - create config file

    > echo {}> .eslintrc.cjs

  - recommended rules for Vue 3

  ```javascript
  // .eslintrc.cjs
  module.exports = {
    env: {
      node: true,
    },
    extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
  };
  ```

- fix to conflict Pretiier & ESLint rule

  - install the eslint-config-prettier config.
    > npm install eslint-config-prettier --save-dev
  - 구성 순서에 따라 다른 구성의 중복 규칙이 처리되므로 확장 배열에 정의된 마지막 구성인지 확인합니다. (뭔말이여ㅕㅕㅕ)

  ```javascript
  //.eslintrc.cjs
  extends: [
  'eslint:recommended',
  "plugin:vue/vue3-recommended",
  "prettier"
  ],
  ```

- Running from the Command Line

  - 이 시점에서 ESLint가 수정 가능한 오류를 보고하고 수정하도록 설정하고 소스 코드를 더 예쁘게 다시 포맷하도록 설정해야 합니다. package.json의 스크립트 섹션에 다음 두 가지 항목을 추가합니다.

  ```javascript
  "scripts":{
  //...
  "lint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
  "format": "prettier .  --write"
  }
  ```

  - 여기에 정의된 lint 명령어는 CI/CD 파이프라인에서 linting을 실행하거나 터미널에서 수동으로 테스트하는 데 유용합니다. 각각의 명령어를 실행하면 빠르게 작동하는 것을 알 수 있지만 개발 프로세스 내내 지속적으로 사용할 필요는 없습니다.

- Setting up ESLint and Prettier with VS Code for Vue3 - 작업 흐름을 간소화하기 위해 IDE에 두 가지 도구를 통합할 수 있습니다. 이렇게 하면 실시간으로 오류가 밑줄로 그어져 있을 뿐만 아니라 ESLint 오류의 자동 수정과 파일 저장 시 더 예쁜 포맷을 제공할 수 있습니다. 시간 절약에 대한 이야기! VS Code는 무료로 인기 있는 IDE이고 제가 사용하는 IDE이므로 Vite powered Vue.js 3 프로젝트를 위해 ESLint와 Pretty를 VS Code에 통합하는 방법에 대해 알아보겠습니다.

      - 먼저 Pretty와 ESLint용 플러그인 2개를 설치해야 합니다. Vetur는 .vue 파일을 위한 구문 강조 기능 및 기타 기능을 제공하므로 아직 설치하지 않았다면 Vetur를 설치해야 합니다.

      ~~- 다음으로 VS 코드 설정에서 Vetur의 템플릿 유효성 검사를 해제하고 ESLint가 `.eslintrc.js` 파일의 규칙을 기반으로 처리하도록 하려면 다음을 제공해야 합니다.~~
      ```javascript
      // Code/User/settings.json
      "vetur.validation.template": false
      ```
      - 업데이트 : Volar는 이제 Vue 3에서 작업할 때 추천하는 VS Code 확장자입니다. 제가 알기로는 ESLint와 Pretty로 제대로 작동하는 특별한 구성은 없습니다. 설치만 하면 됩니다😀

  - 이제 파일에 오류를 직접 보고하는 ESLint가 있지만 Pretty가 코드를 다시 포맷하거나 ESLint가 수정 가능한 문제를 자동으로 수정할 수 있는 자동 설정이 없습니다. VS 코드 설정에 다음을 추가하면 VS 코드가 이 두 가지를 모두 저장하도록 지시할 수 있습니다.

```javascript
// Code/User/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

- 또한 다음 설정을 사용하여 vue와 js 파일이 기본 형식으로 더 예쁘게 구성되도록 해야 합니다:

```javascript
// Code/User/settings.json
"[vue]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
```

- ESLint Errors in the Browser

  - Install `vite-plugin-eslint` by running
    > npm install vite-plugin-eslint --save-dev
  - Register the plugin in `vite.config.js`

  ```javascript
  import { defineConfig } from "vite";
  import eslintPlugin from "vite-plugin-eslint";

  export default defineConfig({
    plugins: [eslintPlugin()],
  });
  ```
