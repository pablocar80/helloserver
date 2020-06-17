import * as dotenv from 'dotenv'

class Settings {

    port: number
    dockerImage: string
    dockerContainer: string

    constructor() {
        this.loadValues()
    }

    loadValues(): void {
        this.port = +process.env.PORT || 3000
        this.dockerImage = process.env.DOCKER_IMAGE || 'myimage'
        this.dockerContainer = process.env.DOCKER_CONTAINER || 'mycontainer'
    }
}

export function loadSettings(): Settings {
    dotenv.config()
    return new Settings()
}
