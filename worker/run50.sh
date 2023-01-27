for i in {0..50}; do
  PORT=$((8080+i))
  ADDRESS=http://worker$i
  docker run --network=tp -e PORT=$PORT -e PLANNER=http://planner:3000 -e ADDRESS=$ADDRESS --name worker$i -d worker/main
done