# ORM

Your db credentials must be save in .env file with the following format:

- DB_ENGINE: (postgresql/mysql/mongo)
- DB_HOST: (localhost/etc)
- DB_PORT: (80/etc)
- DB_USER: (postgres/etc)
- DB_PASSWORD: (x)
- DB_NAME: (users/customers/etc)

this orm automatically creates a connection pool, so you don't have to be connecting and disconnecting your db instance whenever you want to use your models.
