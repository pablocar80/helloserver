import { ValidationError } from "./common"

interface HelloRequest {
    name: string
}

interface HelloResponse {
    message: string
}

export function helloService(req: HelloRequest): HelloResponse {
    if (!req.name) {
        throw new ValidationError("missing name")
    }
    return {
        message: `Hello ${req.name}`
    }
}
