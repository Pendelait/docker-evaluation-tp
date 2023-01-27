docker network create tp

docker run --network=tp -e PORT=3000 -e TASKS=60 --name planner -d planner/main


