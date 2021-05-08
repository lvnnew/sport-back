
```sh
curl 'http://air-ep.stage.apps.stage01.making.ventures/app-api/register' \
  -H 'content-type: application/json' \
  --data-raw '{"firstname":"123","password":"123123","lastname":"123","passwordСonfirmation":"123123","birthDay":"2021-05-25T11:08:00.000Z","email":"tebuchet@gmail.com","passportNumber":"123123","gender":"male"}'
```

Adm register
```sh
curl 'http://air-ep.stage.apps.stage01.making.ventures/adm-api/register' \
  -H 'content-type: application/json' \
  --data-raw '{"email":"tebuchet@gmail.com","password":"123123","passwordСonfirmation":"123123"}'
```

Adm login
```sh
curl 'http://air-ep.stage.apps.stage01.making.ventures/adm-api/login' \
  -H 'content-type: application/json' \
  --data-raw '{"email":"tebuchet@gmail.com","password":"123123"}'
```
