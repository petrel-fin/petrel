# Petrel

Innovative financial planning app meant to take you to the next level of personal wealth management.

## Commands

```sh
# Start database
./start-database.sh

# Push drizzle schema
npm run db:push

# Seed test data
npm run db:seed

# Run application
npm run dev
```

## Debug
```sh
# Access docker container shell
docker exec -it <container_name> bash

```sh
# Connect to db in container
psql -U postgres -d petrel
```
