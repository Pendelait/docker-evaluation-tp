for i in {0..10}; do
    PORT=$((8080+i*3))
    ADDRESS=http://worker$((i))
    docker run --network=tp -e PORT=$PORT -e PLANNER=http://planner:3000 -e ADDRESS=$ADDRESS -e ADD=true -e MUL=true --name worker$((i*3)) -d worker/main
    ADDRESS=http://worker$((i*3+1))
    docker run --network=tp -e PORT=$PORT -e PLANNER=http://planner:3000 -e ADDRESS=$ADDRESS -e ADD=true -e MUL=false --name worker$((i*3+1)) -d worker/main
    ADDRESS=http://worker$((i*3+2))
    docker run --network=tp -e PORT=$PORT -e PLANNER=http://planner:3000 -e ADDRESS=$ADDRESS -e ADD=false -e MUL=true --name worker$((i*3+2)) -d worker/main
    
done

