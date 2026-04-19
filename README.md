# drizzle-postgresql
An example of the Drizzle ORM + PostgreSQL combination.<br>
Based on this [instruction](https://orm.drizzle.team/docs/get-started/postgresql-new)

# postgresql
Create and run docker container:
```
docker run --name drizzle-postgres -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
```
Start stopped container:
```
docker start <container_id>
```