import { promisify } from "util";
import { exec } from "child_process";

const execAsync = promisify(exec);

export async function cat(address) {

    const command = `cat ${address}`;
    
    const { stdout: result } = await execAsync(command);

    console.log('Hino do maior time do Brasil exibido pelo comando cat:', result);

    return [];

}