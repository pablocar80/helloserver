interface HelloRequest {
    name: string
}

interface HelloResponse {
    message: string
}

export function helloService(req: HelloRequest): HelloResponse {
    return {
        message: `Hello ${req.name}`
    }
}
