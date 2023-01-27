docker network create tp

docker run --network=tp -e PORT=8080 -e PLANNER=http://planner:3000 -e ADDRESS=http://worker0 --name worker0 -d worker/main
docker run --network=tp -e PORT=8081 -e PLANNER=http://planner:3000 -e ADDRESS=http://worker1 --name worker1 -d worker/main


