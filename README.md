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
```typescript
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
