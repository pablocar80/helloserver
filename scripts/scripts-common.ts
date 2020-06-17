import cp from 'child_process'

export function runBash(command: string): Buffer {
    console.log(command)
    return cp.execSync(command, { stdio: 'inherit' })
}
