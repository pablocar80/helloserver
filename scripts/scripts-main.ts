import { dockerBuild, dockerStart, dockerStop } from "./dockery"

type CommandMap = Record<string, VoidFunction>
const map: CommandMap = {
    'hello': () => console.log('hello'),
    'docker-build': dockerBuild,
    'docker-start': dockerStart,
    'docker-stop': dockerStop
}

const id = process.argv[2]
const command = map[id]
command()
console.log(`Finished ${id}`)
