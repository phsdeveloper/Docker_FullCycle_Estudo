package main

import (
	"fmt"
	"net/http"
	"os"
	"time"
)

func main() {
	fmt.Println("- Container iniciado - Versão 1.0.9")
	args := os.Args[1:] //Obtem os argumentos passados para o programa, ignorando o primeiro argumento que é o nome do programa.
	brasiliaLocation := time.FixedZone("BRT", -3*60*60)

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "Método não permitido", http.StatusMethodNotAllowed)
			return
		}

		fmt.Fprintf(w, "Get chamado em %s de dentro do container\n\n\n", time.Now().In(brasiliaLocation).Format("02/01/2006 15:04:05"))
		
	})


	if len(args) > 0 {
		fmt.Println("  - Servidor iniciado na porta (Argumento recebido): " + args[0])
		fmt.Printf("  - Servidor iniciado em: %s \n\n", time.Now().In(brasiliaLocation).Format("02/01/2006 15:04:05"))

		http.ListenAndServe(":"+args[0], nil)
	} else {
		fmt.Println("  - Servidor iniciado na porta 8080 (DEFAULT)")
		fmt.Printf("  - Servidor iniciado em: %s \n\n", time.Now().In(brasiliaLocation).Format("02/01/2006 15:04:05"))
		
		http.ListenAndServe(":8080", nil)
	}
}
