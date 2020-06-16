import { Express } from 'express'

export type ServiceRunner<TRequest, TResponse> = (req: TRequest) => (TResponse)

export function registerService<TReq, TRes>(app: Express,
    url: string, runner: ServiceRunner<TReq, TRes>): void {
    app.post(url, (req, res) => {
        const result = runner(req.body as unknown as TReq)
        res.send(result)
    })
}

export class ValidationError extends Error {    
}
