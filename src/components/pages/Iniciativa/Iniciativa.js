import React from 'react';
import './Iniciativa.css';
import Init from '../../assets/iniciativa.png';

const Iniciativa = () => {
    return (
        <>
            <div className="iniciativa">
                <h3 className='destaque'>
                    Como Nasceu o PetVerso?
                </h3>
                <img className='imginit' src={Init} />
                {/* <br />
                <h5 className='destaque2'>
                    Com previsão de faturamento de R$ 40 bilhões, mercado pet cresceu na pandemia. 
                </h5>
                <h5 className='destaque2'>
                    Devido a mesma pandemia e com o desemprego em alta no país, milhares de pessoas encontraram no empreendedorismo individual uma fonte de renda. 
                </h5> */}
                <br />
                <p className='parar'>
                    A problemática que deu origem ao projeto PetVerso acontece pouco antes da explosão da pandemia de Covid-19, onde as previsões econômicas no Brasil eram otimistas e aquecidas. Logo em seguida a onda da Covid atingiu o país e a economia em cheio, negócios tiveram que pausar suas atividades por meses, cerca de um milhão de empresas fecharam as portas e 13,4 milhões de pessoas terminaram o ano desempregadas, segundo o Instituto Brasileiro de Geografia e Estatística (IGBE). 
                </p>
                <p className='parar'>
                     Com o aumento do desemprego os brasileiros passam a buscar fontes alternativas de renda e encontram no empreendedorismo uma alternativa. Paralelamente o mercado pet entra em crescimento e tem previsões de faturamento de 40 bilhões de reais.
                </p>
                <br />
                <p className='parar'>
                    Um dos setores menos afetados pela crise da Covid-19 foi o dos pets: a área de cuidados, acessórios e alimentos, classificada como serviço essencial desde o princípio, cresceu 13,5% em 2020, segundo o Instituto Brasil Pet. 
                </p>
                <p className='parar'>
                    Concomitantemente, que a pandemia impactou diretamente a maneira como as pessoas se relacionam e interagem entre si já é realidade conhecida. A mudança, porém, parece também afetar a maneira como as pessoas têm se relacionado com os próprios animais de estimação.
                </p>
                <br />
                <p className='parar'>
                    Há um novo normal não apenas no mercado como um todo como no comportamento humano e suas relações, as pessoas passaram a estabelecer relações com seus pets mais como membros de suas familias e menos como "animais" apenas.
                    
                </p>
                <p className='parar2'>
                    
                    A ponte entre o crescimento do mercado pet e as novas relações entre humanos e seus pets é o PetVerso, um marketplace que apresenta aos "pais e mães" de pets os pequenos e médios empreendedores do nicho, um universo de produtos para seus bichinhos. 
                </p>
            </div>
        </>
    )
}

export default Iniciativa;