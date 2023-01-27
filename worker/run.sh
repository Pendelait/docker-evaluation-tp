docker network create tp

docker run --network=tp -e PORT=8080 -e PLANNER=http://planner:3000 -e ADDRESS=http://worker --name worker -d worker/main


