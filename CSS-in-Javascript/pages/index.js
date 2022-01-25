import { theme } from '../src/theme';

/* CSS in JS

## Pros
- O JS sinaliza erros de codigos de "tema" da sua aplicação e mudanças gerais

## Contras

- É mais um script para o navegador rodar
*/



function Button ({children}){
    return(
        <>
            <button className="button">
                {children}
            </button>
            <style jsx>{`
           button{
                border: 1px solid darkgreen;
                background-color: ${theme.colors.primary[500]};
                padding: 8px 10px;
                font-weight:bold;
        }
`} 
            </style>  
        </>
    )

}

export default function Home(){
    return(
        <div>
            Tela
            <Button>
            Botão
            </Button>
            <button className="button">
                Botão
            </button>
        </div>

    )
}