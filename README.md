# 실행 방법

### PM2 프로세스 관리자 설정
pm2 설치
```
sudo npm install pm2 -g
```
pm2를 사용하면 모니터링이 가능하며,  
프로세스가 중단되어도 자동으로 재실행 한다.

추가적인 pm2 기능 보기
```
pm2 examples
```

### 패키지 설치
```
npm install
```


### ENV 설정
grigo-back-end-node 디렉토리에 .env파일을 생성한다.
```
SECRETKEY=
HOST=
USERNAME=
PASSWORD=
DATABASE=
PORT=
```
secrectkey: 클라이언트 인증 키, 오타 수정 예정..  
host: 호스트 주소  
username: DataBase 사용자  
password: DataBase 비밀번호  
database: DataBase 이름
port: 실행 포트

### 실행
**백그라운드에서 실행**
```
pm2 start ./dist/src/main.js
// 이름 설정하여 실행하고 싶은 경우
pm2 start ./dist/src/main.js --name crawling
```

# Rest API 개발 문서
```typescript
baseURL: http://localhost:****/api
```
## Schedule
```GET baseURL/schedule```
### Request
```typescript
Header: {
  key: SECRETKEY
}
```
### Response
```
[
    {
        "id": 1,
        "date": ".08 .18 ~ .08 .18",
        "content": "[학 부] 2020학년도 후기 학위수여식",
        "month": 8,
        "year": 2021
    },
    {
        "id": 2,
        "date": ".08 .16 ~ .08 .16",
        "content": "광복절 대체공휴일",
        "month": 8,
        "year": 2021
    },
    {
        "id": 3,
        "date": ".08 .17 ~ .08 .27",
        "content": "[학부·대학원] 2학기 등록기간",
        "month": 8,
        "year": 2021
    },
    {
        "id": 4,
        "date": ".08 .15 ~ .08 .15",
        "content": "광복절",
        "month": 8,
        "year": 2021
    },
    {
        "id": 5,
        "date": ".06 .14 ~ .08 .31",
        "content": "하계방학",
        "month": 8,
        "year": 2021
    },
    {
        "id": 6,
        "date": ".08 .17 ~ .08 .17",
        "content": "[대학원] 2020학년도 후기 학위수여식",
        "month": 8,
        "year": 2021
    },
    {
        "id": 7,
        "date": ".08 .09 ~ .08 .20",
        "content": "[학부·대학원] 2학기 수강신청기간",
        "month": 8,
        "year": 2021
    },
    {
        "id": 8,
        "date": ".08 .02 ~ .08 .06",
        "content": "하계 집중 휴무기간",
        "month": 8,
        "year": 2021
    }
]
```
