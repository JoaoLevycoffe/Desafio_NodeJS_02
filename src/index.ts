/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	const nome1:string = 'Gabriel Oliveira, ';
	const idade1:number = 30;
	const peso1:number = 85.25;
	const altura1:number = 1.75;
	const ehDev1:boolean = false;
	
	const nome2:string = 'Gabriela Duarte, ';
	const idade2:number = 22;
	const peso2:number = 70.33;
	const altura2:number = 1.73;
	const ehDev2:boolean = false;

	const nome3:string = 'Leandro Silva, ';
	const idade3:number = 37;
	const peso3:number = 83.65;
	const altura3:number = 1.78;
	const ehDev3:boolean = false;

	const nome4:string = 'Maurício Collela.';
	const idade4:number = 34;
	const peso4:number = 76.25;
	const altura4:number = 1.60;
	const ehDev4:boolean = true;
	
	const pesoTotal:number = (peso1 + peso2 + peso2 + peso4); //302.15
	const alturaTotal:number = (altura1 + altura2 + altura3 + altura4); // 6.85
	const mediaImcs:number = ((302.15 + 6.85) / 4);
	
	const todosOsNomes = [
		{nome: 'Mauricio Collela',},
		{nome: 'Gabriela Duarte',}, 
		{nome: 'Leandro Silva',},
		{nome: 'Mauricio Collela',} 
	]

	const filtraNomes = todosOsNomes.filter( t => t.nome.includes ('Silva'))

	// REQUERIMENTOS: 01, 02 & 03 //

	console.log(idade1 + idade2 + idade3 + idade4); 
	console.log(nome1, nome2, nome3, nome4); 
	console.log(mediaImcs); 
	
	// REQUERIMENTO 04 //
	
	const nomeUsuario1 = 'Gabriel Oliveira';
	const desenvolvedor1 = 'falso';

	if (nomeUsuario1 == 'Gabriel Oliveira' && desenvolvedor1 == 'falso')
	{
		console.log('Usuario não e dev')
	}

	const nomeUsuario2 = 'Gabriela Duarte';
	const desenvolvedor2 = 'falso';
	
	if (nomeUsuario2 == 'Gabriela Duarte' && desenvolvedor2 == 'falso')
	{
		console.log('Usuario não é dev')
	}

	const nomeUsuario3 = 'Leandro Silva';
	const desenvolvedor3 = 'falso';
	
	if (nomeUsuario3 == 'Leandro Silva' && desenvolvedor3 == 'falso')
	{
		console.log('Usuario não é dev')
	}

	const nomeUsuario4 = 'Mauricio Collela';
	const desenvolvedor4 = 'verdadeiro';
	
	if (nomeUsuario4 == 'Mauricio Collela' && desenvolvedor4 == 'verdadeiro')
	{
		console.log('Usuario é dev')
	}
	
	// REQUERIMENTO 05 //

	console.log(filtraNomes)

});
