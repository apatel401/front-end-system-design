# REST-APIS
- What is REST-APIs?
- REST Benifits
- Building blocks
 - URL
 - Methods
 - Headers
 - Request
 - Resopnse
 - Status code
- Build App
- Postman
- HTTP1/2/3
- Best Practices
- Advance

## REST Benifits

- Ease of use
- Stateless
- Flexibility with Data
- uniform Inteface
- caching
- Separtion of concern
- interoperaibility - language agnostic
- ease of testing
- security


## Building blocks

---------------------    Request        -------------------
--                  -  ------------>    -                 -
--                  -                   -                 -
--      Client      -    Resopnse       -     Server      -
--                  -                   -                 -
--                  -  <------------    -                 -
----------------------                  -------------------

Request ->  HTTP Request Line,HTTP Header, HTTP body empty
Response ->  HTTP Status,HTTP Header, HTTP body (data)


## status code

Status range 1XX -INFORMATION 
** Example **
STATUS CODE 100 - CONTINUE
STATUS CODE 101 - SWITCHING

Status range 2XX - SUCCESS 
** Example **
STATUS CODE 200 - OK
STATUS CODE 201 - CREATED
STATUS CODE 202 - ACCEPTED
STATUS CODE 204 - NO CONTENT
STATUS CODE 206 - PARTIAL CONTENT


Status range 3XX - REDIRECTION 
** Example **
STATUS CODE 301 - MOVED PERMANANTLY
STATUS CODE 302 - TEMPORARY PERMANANTLY
STATUS CODE 307 - 302 = RETAIN METHOD
STATUS CODE 307 - 301 = RETAIN METHOD

Status range 4XX - CLIENT ERROR 
** Example **
STATUS CODE 400 - BAD REQUEST
STATUS CODE 401 - UNAUTHORIZED
STATUS CODE 403 - AUTHORIZATION
STATUS CODE 404 - NOT FOUND
STATUS CODE 405 - METHOD NOT ALLOWED
STATUS CODE 429 - CONCURRENT REQUEST


Status range 5XX - SERVER ERROR 
** Example **
STATUS CODE 500 - INTERNAL SERVER ERROR
STATUS CODE 502 - BAD GATEWAY
STATUS CODE 503 - SERVICE UNAVAILABLE
STATUS CODE 504 - GATEWAY TIMEOUT
STATUS CODE 405 - METHOD NOT ALLOWED
STATUS CODE 429 - INSUFFICIENT STORAGE

