import React from 'react';
import './Iniciativa.css';
import Init from '../../assets/11.png';

const Iniciativa = () => {
    return (
        <>
            <div>
                <h3 className='destaque'>
                    Como Nasceu o PetVerso?
                </h3>
                <img className='imginit' src={Init} />
                <br />
                <h5 className='destaque2'>
                    Com previsão de faturamento de R$ 40 bilhões, mercado pet cresceu na pandemia. 
                </h5>
                <h5 className='destaque2'>
                    Devido a mesma pandemia e com o desemprego em alta no país, milhares de pessoas encontraram no empreendedorismo individual uma fonte de renda. 
                </h5>
                <br />
                <p className='parar'>
                    No início de 2020, as previsões para a economia no Brasil eram otimistas. Então veio a pandemia de Covid-19: negócios tiveram que pausar suas atividades por meses, cerca de um milhão de empresas fecharam as portas e 13,4 milhões de pessoas terminaram o ano desempregadas, segundo o Instituto Brasileiro de Geografia e Estatística (IGBE).
                    Ao buscar outras fontes de renda para se manter, muitos brasileiros encontraram no empreendedorismo uma alternativa.
                </p>
                <br />
                <p className='parar'>
                    Concomitantemente, que a pandemia impactou diretamente a maneira como as pessoas se relacionam e interagem entre si já é realidade conhecida. A mudança, porém, parece também afetar a maneira como as pessoas têm se relacionado com os próprios animais de estimação.
                    Um dos setores menos afetados pela crise da Covid-19 foi o dos pets: a área de cuidados, acessórios e alimentos, classificada como serviço essencial desde o princípio, cresceu 13,5% em 2020, segundo o Instituto Brasil Pet. 
                </p>
                <br />
                <p className='parar'>
                    Há um novo normal não apenas no mercado como um todo como no comportamento humano e suas relações, as pessoas passaram a estabelecer relações com seus pets mais como membros de suas familias e menos como "animais" apenas.
                    A ponte entre o "boom" mercadológico e  as novas relações é o PetVerso, um marketplace que apresenta aos "pais e mães" de pets pequenos e médios empreendedores do nicho.
                </p>
            </div>
        </>
    )
}

export default Iniciativa;