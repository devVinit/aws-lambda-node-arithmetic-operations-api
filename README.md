# AWS Lambda Node Arithmetic Operations API

AWS Lambda Node Arithmetic Operations API
This serverless API provides basic arithmetic operations (addition, subtraction, multiplication, and division) using AWS Lambda, AWS API Gateway and Node.js.

## Base URL

The base URL for this API is:

https://tpig21l8rd.execute-api.ap-south-1.amazonaws.com/prod/

## API Documentation

### 1. Addition

**Endpoint:** `/add`

**Method:** `POST`

**Request Schema:**

```json
{
  "numberA": 100,
  "numberB": 10
}
```

```shell
curl -X POST https://tpig21l8rd.execute-api.ap-south-1.amazonaws.com/prod/add \
-H "Content-Type: application/json" \
-d '{"numberA": 100, "numberB": 10}'
```

### 2. Subtraction

**Endpoint:** `/subtract`

**Method:** `POST`

**Request Schema:**

```json
{
  "numberA": 100,
  "numberB": 10
}
```

```shell
curl -X POST https://tpig21l8rd.execute-api.ap-south-1.amazonaws.com/prod/subtract \
-H "Content-Type: application/json" \
-d '{"numberA": 100, "numberB": 10}'
```

### 3. Multiplication

**Endpoint:** `/multiply`

**Method:** `POST`

**Request Schema:**

```json
{
  "numberA": 100,
  "numberB": 10
}
```

```shell
curl -X POST https://tpig21l8rd.execute-api.ap-south-1.amazonaws.com/prod/multiply \
-H "Content-Type: application/json" \
-d '{"numberA": 100, "numberB": 10}'
```

### 4. Division

**Endpoint:** `/divide`

**Method:** `POST`

**Request Schema:**

```json
{
  "numberA": 100,
  "numberB": 10
}
```

```shell
curl -X POST https://tpig21l8rd.execute-api.ap-south-1.amazonaws.com/prod/divide \
-H "Content-Type: application/json" \
-d '{"numberA": 100, "numberB": 10}'
```
