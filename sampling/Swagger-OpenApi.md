- reference: https://www.youtube.com/watch?v=akbdsrOpQ60&list=PLRx0vPvlEmdAezo0wkmUdT6WBCch0_1ie

# Swagger ? Open API ?

### Swagger
- 스웨거(Swagger)는 대표적인 API 관리 도구이다. 일반적으로 프로그램을 개발할 때에는 백엔드 개발자와 프론트엔드 개발자가 서로 협력하는 형태로 개발을 진행하게 된다. 이때 백엔드 프로그램과 프론트엔드 프로그램 사이에서 정확히 어떠한 방식으로 데이터를 받을 지에 대한 명세가 필요해진다. 이러한 내용이 담긴 문서를 일반적으로 `API 명세서`라고 한다.
- 스웨거(Swagger) 특정한 프로그램의 API 기능을 명세하고, API 기능을 바로 테스트할 수 있도록 돕는다.
- `API 명세작성`, `바로 테스트!(Mock server)`
    - 명세만 잘 되어있으면 서버 사이드 개발은 너무 쉽다!

### OpenAPI
- OpenAPI는 `REST API를 위한 표준 API 명세 규격`이다! 특정 서버 API가 있을 때, 요청, 응답, API 접근 경로 등의 정의 방법을 규정하고 있다! 
- 작성형식이 `json`, `yaml`으로 러닝커브가 낮다.

### Swagger 활용 방법
- 실제 api 서버 개발 중에 api 명세 관련 문법을 추가해 코드 작성과 명세를 동시에 진행 하는 경우
- `yaml` 등의 문서 파일로 api 명세를 정의하고 그 yaml 자체로 서버를 돌리는 경우?? 말이 맞나??

### SwaggerHub
1. [SwaggerHub 공식사이트](https://app.swaggerhub.com/) 로그인
2. Create New -> Create New API
3. 이하의 내용 입력 및 테스트
```yaml
openapi: 3.0.0
info:
  version: 1.0.0
  title: 20231107_API_Example
  description: Swagger 실습을 위한 API Example
servers:
  - description: JSON Placeholder API
    url: https://jsonplaceholder.typicode.com
  - description: Google Search API
    url: https://www.google.com
paths:
  # JSON Placeholder API
  /todos/{id}:
    get:
      summary: Returns a todo by ID
      parameters: 
        - name: id
          in: path
          required: true
          description: The ID of the todo to return
          schema:
            type: integer
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  userId:
                    type: integer
                  id:
                    type: integer
                  title:
                    type: string
                  completed:
                    type: boolean
  # Google Search API
  /complete/search:
    get:
      summary: 자동완성 검색 결과를 반환합니다.
      parameters:
        - name: q
          in: query
          schema:
            type: string
        - name: client
          in: query
          schema:
            type: string
      responses:
        '200':
          description: A Text File
          content:
            text/plain:
              schema:
                type: string
```