# github pages 배포 (최신, 20231001 추가)
- 결과물
    - react: https://doyou1.github.io/web-study-clone/react/
    - vue(대부분 미완성): https://doyou1.github.io/web-study-clone/vue/
---
- 배포 방식
    - release 브랜치의 docs에 dev 브랜치의 각각의 빌드 결과물 배치(※참고: release 브랜치의 github-pages-deploy.sh)
    - 참고: https://docs.github.com/pages
# 목적
- Web App 개발 라이브러리, 프레임워크인 React와 Vue에 대한 기술 함양
- html, css, js 기술 함양(css는 tailwind 활용 예정)
- 협업에 활용되는 Git에 대한 기술 함양

# 작업 내용
- React, Vue 각각의 공식 사이트 클론 코딩
    - 사이트 레이아웃을 보고, 구현 방법을 스스로 파악해 가장 비슷하게 만듬
    - 참고
        - react: https://react.dev/
        - vue: https://vuejs.org/
- 일차적으로 메인페이지를 완성한 후, 다른 상세페이지를 보며 리팩토링 진행

# 협업룰
- 브랜치명은 관련된 issue#No를 추가해 생성한다.
    - ex) feature/3-icon-change
- issue에 따른 브랜치 생성은 dev 브랜치를 중심으로 한다.(브랜치 생성전, 항상 최신화 필수!)
- 본인이 진행할 작업에 대한 issue를 생성한다.
    - Assignees: 해당 이슈 작업자
- Pull Request 
    - Assignees: 해당 PR 작업자
    - Reviwer: 해당 PR Merge 승인권자, 코드리뷰 담당자
    - PR Merge시 해당 issue와 (remote) branch를 삭제하도록 한다. (./.github/PULL_REQUEST_TEMPLATE.md 참고)
- 주요한 branch 정리
    - main: 최종 릴리스 버전 브랜치
    - dev: 개발중인 버전, 통합된 최신 브랜치
- 주의사항
    - 개발 시작전 항상 본인의 local 브랜치 확인!!!
    - 개발 시작전 항상 !!git pull!! remote로부터 최신화 상태임을 확인해야한다. (conflict 문제 발생 원인이 됨)
    - 활성화중인 issue를 확인해 작업 파일, 범위가 겹치지 않도록 주의한다.

# 참고
- front-react(react) 로컬 빌드 방법
    1. npm install : (package.json 변경 없을 시 실행 필요X) package.json에 정의된 라이브러리 설치(node_modules 생성 및 업데이트)
    2. npm start : React 프로젝트 실행
- front-vue(vue) 로컬 빌드 방법
    1. npm install : (package.json 변경 없을 시 실행 필요X) package.json에 정의된 라이브러리 설치(node_modules 생성 및 업데이트)
    2. npm run dev : Vue (개발용) 프로젝트 실행(코드 변경시 새로고침 없이 자동 적용)
