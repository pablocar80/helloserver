import { loadSettings } from "../src/settings";
import { runBash } from "./scripts-common";

const setup = loadSettings()

export function dockerBuild(): void {

    // stop container
    runBash(`docker stop ${setup.dockerContainer} || true`)

    // remove container
    runBash(`docker rm ${setup.dockerContainer} || true`)

    // remove image
    runBash(`docker rmi ${setup.dockerImage}:latest || true`)

    // build image
    runBash(`docker image build --tag ${setup.dockerImage}:latest .`)
}

export function dockerStart(): void {
    dockerStop()
    const image = setup.dockerImage
    const container = setup.dockerContainer
    const port = setup.port
    runBash(`docker container run -d --name ${container} --publish ${port}:${port} ${image}:latest`)
}

export function dockerStop(): void {
    runBash(`docker stop ${setup.dockerContainer} || true`)
    runBash(`docker rm ${setup.dockerContainer} || true`)
}
