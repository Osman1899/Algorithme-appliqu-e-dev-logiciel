function dijkstra(graph, start) {
    let distances = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    let visited = new Set();

    while (true) {
        let current = null;

        for (let vertex in distances) {
            if (!visited.has(vertex) && (current === null || distances[vertex] < distances[current])) {
                current = vertex;
            }
        }

        if (current === null) {
            break;
        }

        visited.add(current);

        for (let neighbor in graph[current]) {
            let distance = distances[current] + graph[current][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
            }
        }
    }

    return distances;
}
