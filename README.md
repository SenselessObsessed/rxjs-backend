Backend к заданию RXjS

## Polling

### Легенда

Вы делаете корпоративную систему, в рамках которой есть система обмена сообщениями, аналогичная email. Вам необходимо реализовать периодический опрос сервера о поступлении новых сообщений. Поскольку для работы в вашей организации используестя rxjs, то и сделать вам это нужно с его помощью.

### Описание

#### Серверная часть

Реализуйте простой REST endpoint `/messages/unread`, который возвращает непрочитанные сообщения. Для генерации случайных данных можете воспользоваться библиотекой [faker](https://www.npmjs.com/package/@faker-js/faker).

Формат выдаваемых сообщений:

```json
{
  "status": "ok",
  "timestamp": 1553400000,
  "messages": [
    {
      "id": "<uuid>",
      "from": "anya@ivanova",
      "subject": "Hello from Anya",
      "body": "Long message body here" ,
      "received": 1553108200
    }
    {
      "id": "<uuid>",
      "from": "alex@petrov",
      "subject": "Hello from Alex Petrov!",
      "body": "Long message body here",
      "received": 1553107200
    },
    ...
  ]
}
```
