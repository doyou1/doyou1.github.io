- inflearn course
    - https://www.inflearn.com/course/%EC%BD%94%ED%8B%80%EB%A6%B0%EA%B3%BC-spring-security-jwt-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EB%A7%8C%EB%93%A4%EA%B8%B0

### 강의에서 등장한 Jwt, Spring Security, Annotation 관련 키워드
- Spring JPA
    - 
- gradle allOpen, noArg
    - allOpen : 스프링에서 오픈해준 것외에 추가로 오픈해줄 것들을 명시하는
    - noArg: 매개변수가 없는 생성자를 자동으로 추가해줄 때 명시
- application.yml
    - servlet encoding
        - `force: true` -> request, response 인코딩 강제
    - spring.jpa
        - `open-in-view: true` -> 영속성 컨텍스트가 트랜잭션 범위를 넘어서 레이어까지유지 하게된다.
        - `hibernate.ddl-auto: create` -> 기존에 테이블이 있으면 drop 후 다시 create
        - `hibernate.show_sql: false` -> 로그에 SQL를 출력하기에 hibernate의 sql는 미표시
        - `hibernate.format_sql: true`, `hibernate.hightlight_sql: true` -> 줄맞춤 및 색표시로 가독성 높임
    - logging
        - `pattern.console: ~~~` -> 로그 텍스트 포맷팅
        - `hibernate.SQL: debug` -> SQL을 실행하면 로그 출력
- 회원가입 기능
    - 패키지 구조
        - common/
            - annotation/
            - dto/
            - exception/
            - status/
        - member/
            - controller/   -> api의 엔드포인트
            - dto/          -> api의 request, response 데이터 모델
            - entity/       -> DB 테이블 정보 모델
            - repository/   -> DB 접근
            - service/      -> 실제 비즈니스 로직 처리

    - `@Entity` -> db 테이블 정의 클래스임을 명시
    - `@Id`, `@GeneratedValue(strategy = GenerationType.AUTO)` -> 중복안되는 유니크, 값을 특정하지 않아도 auto increase 패턴 적용
    - `@Column` -> 테이블 컬럼 정의
        - `@Column(nullable = false, length = 30, updatable = false)` -> Not null, 글자수 30, 갱신 불가
    - `@Table(uniqueConstraints = [UniqueConstraint(name = "uk_member_login_id", columnNames = ["loginId"])])` -> 로그인 아이디 중복되지 않도록
    - `@Enumerated(EnumType.STRING)`
        - https://velog.io/@shinmj1207/JPA-Enumerated
        - EnumType.STRING : 각 Enum 이름을 컬럼에 저장한다. ex) G, PG, PG13..
    - `@Transactional`
        - https://velog.io/@sweet_sumin/Transactional%EC%9D%84-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0%EB%8A%94

- Validation 기능
    - Spring Boot Starter Validation
    - annotation class ValidEnum 
        - enum 데이터 유효성 검사 annotation
        - KClass
        - `@Target(AnnotationTarget.FIELD)`
        - `@Retention(AnnotationRetention.RUNTIME)`
        - `@MustBeDocumented`
        - `Constranint(validateBy = [ValidEnumValidator::class])` -> validation check 방법을 정의한 클래스 추가
    - `ConstraintValidator<ValidEnum, Any>`
    - `${value}.any { }`
        - https://agrawalsuneet.github.io/blogs/any-none-all-kotlin/
            ```
            val list = listOf("one", "two", "three", "four")
            val set = setOf("one", "two", "three", "four")
            val map = mapOf(1 to "one", 2 to "two", 3 to "three", 4 to "four")

            println(list.any { it.endsWith("e") })    // true
            println(set.any { it.endsWith("e") })    // true
            println(map.any { it.value.endsWith("e") })    // true
            ```
        - 콜렉션의 요소 중에 하나라도 조건이 `true`라면, `true`

    - Request, Response 모델 작성 팁
        - parameter는 string 형태이자 nullable(@field:NotBlank로 valid check)로 정의, getter는 포맷팅이 잘된 (보기 좋은, db에 저장하기 좋은) 형식일 수 있게 내부에 다시 로직 추가 
        - `@field:NotBlack`
            - Not null
        - `@field:Pattern`, `@field:Email`
            - 정규식, Email형식
        - `@JsonProperty("loginId")`
            - `loginId`라는 키의 값(value)가 들어감
        - Controller에 `@Valid`를 추가하면 엔드포인트를 호출시, 해당 validation check가 진행됨 
            ```
            data class MemberDtoRequest(
                var id: Long?,
                @field:NotBlank
                @JsonProperty("loginId")
                private val _loginId: String?,

                @field:NotBlank
                @field:Pattern(
                        regexp = "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%^&*])[a-zA-Z0-9!@#\$%^&*]{8,20}\$",
                        message = "영문, 숫자, 특수문자를 포함한 8~20자리로 입력해주세요"
                )
                @JsonProperty("password")
                private val _password: String?,

                @field:NotBlank
                @JsonProperty("name")
                private val _name: String?,

                @field:NotBlank
                @JsonProperty("birthDate")
                @field:Pattern(
                        regexp = "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$",
                        message = "날짜형식(YYYY-MM-DD)을 확인해주세요"
                )
                private val _birthDate: String?,

                @field:NotBlank
                @field:ValidEnum(enumClass = Gender::class, message = "MAN이나 WOMAN 중 하나를 선택해주세요.")
                @JsonProperty("gender")
                private val _gender: String?,

                @field:NotBlank
                @field:Email
                @JsonProperty("email")
                private val _email: String?,
            ) {
                val loginId: String
                    get() = _loginId!!
                val password: String
                    get() = _password!!
                val name: String
                    get() = _name!!
                val birthDate: LocalDate
                    get() = _birthDate!!.toLocalDate()
                val gender: Gender
                    get() = Gender.valueOf(_gender!!)
                val email: String
                    get() = _email!!

                private fun String.toLocalDate(): LocalDate = LocalDate.parse(this, DateTimeFormatter.ofPattern("yyyy-MM-dd"))

                fun toEntity(): Member = Member(id, loginId, password, name, birthDate, gender, email)
            }
            ```

- BaseResponse 만들기
    - `enum class ResutCode`
    - `resultCode`, `data`(Generic type), `message`
    - `BaseResponse<Unit>`
        - 전달할 데이터가 없을 시, generic type을 `Unit`으로 선언하자.

- ExceptionHandler 만들기
    - `InvalidInputException`
        - `fieldName`, `message`
        - `RuntimeException(message)`
    - `CustomExceptionHandler`
        - `@RestControllerAdvice`
        - `@ExceptionHandler(MethodArgumentNotValidException::class)`
            - Controller에서 `@Valid`로 수행된 validation check가 실패하면 `MethodArgumentNotValidException` 발생. 
        - `@ExceptionHandler(InvalidInputException::class)`
            - `MemberService`를 보면 아이디 중복시 InvalidInputException 에러 발생 
    - TODO: `toEntity()`와 같이 RequestDto, ResponseDto, Entity 간의 변환 함수는 꼭 추가하자.

- 권한 관리
    - Spring Security
        - 어플리케이션의 보안을 담당하는 스프링 하위 프레임워크
        - 인증과 인가(권한)에 대한 부분을 `Filter`의 흐름에 따라 처리
    - Jwt
        - `Json Web Token`
        - 서로 간의 클레임을 안전하게 표현하기 위한 개방형 업계 표준
        - 개념
            - header: 토큰의 유형과 서명 알고리즘 명시
            - payload: claim이라고 불리는 사용자 인증, 인가 정보
            - signature: 헤더와 페이로드가 비밀키로 서명
        - 구성
            1. `TokenInfo` -> 로그인 시, 토큰 정보를 담아 클라이언트에게 전달하는 용도로 사용
            2. `JwtTokenProvider` -> 토큰을 생성하고 정보를 추출하고, 토큰을 검증함
            3. `JwtAuthenticationFilter` -> Security ContextHolder에 정보를 기록할 Jwt Authentication Filter
            4. `SecurityConfig` -> 인증/인가 관리 설정
            5. `CustomUserDetailsService` -> User Detail Service를 구현 ?? 뭔말이여
        - 관련 라이브러리
            - `jjwt-api`, `jjwt-Impl`, `jjwt-Extension-Jackson`