interface HelloRequest {
    name: string
}

interface HelloResponse {
    message: string
}

export function helloService(req: HelloRequest): HelloResponse {
    if (!req.name) {
        throw "missing name"
    }
    return {
        message: `Hello ${req.name}`
    }
}
