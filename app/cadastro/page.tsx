import Card from "../components/Card/card-service";

export default function Cadastro() {
  return (
    <main className="flex flex-col justify-center items-center text-secondary ">
        <div className="mb-[50px]">
            <img src="./img/logo-default.png" className="w-[100px]"></img>
        </div>

        <div className="flex flex-col justify-center bg-[#D9D9D9] w-[700px] rounded-[18px] p-12 mb-[50px] drop-shadow-default">

           
            <h1 className="text-3xl uppercase text-center font-bold mb-[50px]">Cadastro Salesforce</h1>
        

            <form action="url_de_destino" method="post" className="flex justify-center flex-wrap">

                <div className="flex flex-col flex-auto mb-[25px] mx-[25px]">
                    <label htmlFor="nome" className="font-bold ">Seu nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome:" required className="rounded-xl p-1 text-center"/>
                </div>
            
                <div className="flex flex-col flex-auto mb-[25px] mx-[25px]">
                    <label htmlFor="nome" className="font-bold ">Nome da empresa:</label>
                    <input type="text" id="nome" name="nome" required placeholder="Digite o nome da empresa" className="rounded-xl p-1 text-center"/>
                </div>

                <div className="flex flex-col flex-auto mb-[25px] mx-[25px]">
                    <label htmlFor="nome" className="font-bold ">E-mail corporativo:</label>
                    <input type="email" id="nome" name="nome" required placeholder="Digite seu e-mail" className="rounded-xl p-1 text-center"/>
                </div>

                <div className="flex flex-col flex-auto mb-[25px] mx-[25px]">
                    <label htmlFor="nome" className="font-bold ">Telefone:</label>
                    <input type="tel" id="nome" name="nome" placeholder="Digite seu nome" required className="rounded-xl p-1 text-center"/>
                </div>

                <div className="flex flex-col flex-auto mb-[25px] mx-[25px]">
                    <label htmlFor="nome" className="font-bold ">País:</label>
                    <input type="text" id="nome" name="nome" required placeholder="Digite seu país de origem" className="rounded-xl p-1 text-center"/>
                </div>

                <div className="flex flex-col flex-auto mb-[25px] mx-[25px]">
                    <label htmlFor="nome" className="font-bold ">Idioma:</label>
                    <input type="tel" id="nome" name="nome" placeholder="Digite seu idioma de preferência" required className="rounded-xl p-1 text-center"/>
                </div>

                <div className="flex flex-col w-[700px] position- mb-[25px] mx-[25px]">
                    <label htmlFor="nome" className="font-bold ">Crie suas senha:</label>
                    <input type="password" id="nome" name="nome" placeholder="Digite seu idioma de preferência" required className="rounded-xl p-1 text-center"/>
                </div>
                
                <button type="submit" className="bg-secondary text-white font-bold px-6 py-3 w-[300px] rounded-[30px] my-[25px] transition-all hover:drop-shadow-dark-shine">
                CADASTRAR</button>
                
            </form>

        </div>
        
    </main>
  );
}