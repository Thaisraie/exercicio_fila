import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Queue } from "./src/Queue";


export function main() {

    const fila = new Queue<string>();

    let opcao: number;

    while (true) {
        console.log(colors.fg.magenta, colors.bg.black,
            "*******************************************");
        console.log("                                             ");
        console.log("        1 - Adicionar Cliente na Fila        ");
        console.log("        2 - Listar todos os Clientes         ");
        console.log("        3 - Retirar Cliente da Fila          ");
        console.log("        0 - Sair                             ");
        console.log("                                             ");
        console.log("*********************************************");
        console.log("                                             ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nPrograma Finalizado!");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                const nome = readlinesync.question("\nInsira seu nome: ");
                fila.enqueue(nome);
                console.log("\nFila:\n");
                fila.printQueue();
                console.log("\nCliente Adicionado!");
            break;
            case 2:
                console.log("Listar todos os Clientes");
                if (fila.isEmpty()){
                    console.log("\nA Fila está vazia!");
                    break;
                }  
                fila.printQueue();
                break;
            case 3:
                console.log("Retirar Cliente da Fila");
                if (fila.isEmpty()){
                    console.log("\nA Fila está vazia! ");
                    break;
                }
                fila.dequeue();
                console.log("\nFila:\n");
                fila.printQueue();
                console.log("\nO Cliente foi Chamado!");

                break;
        }
    }
}

main();