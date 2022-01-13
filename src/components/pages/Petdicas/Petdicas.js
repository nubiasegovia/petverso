import React, { useState, useEffect, useLocation } from 'react';
import Dicas from '../../assets/petversoback3.png';
import './Petdicas.css';
import PataCDireita from '../../assets/patachorrodireita.png';
import PataCEsquerda from '../../assets/patachorroesquerda.png';
import cat4 from '../../assets/gatinho4.png';
import coelho from '../../assets/insta4.jpg';

const PetDicas = () => {


    return (
        <>
            <div>
                   
                      
                <div className="cardPetDicas">
                    <div className="dicasTopo">
                        <img className="PatasImg" src={PataCEsquerda}/>
                        <h3 className='destaqueDicas'>As melhores Dicas, Histórias e Notícias do Universo Pet</h3>
                        <img className="PatasImg" src={PataCDireita}/>
                    </div>
                    <img className="DicasImg" src={Dicas}/>
                
                </div>    
                    <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

    
                    <div className="controls-top">
                        <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left"></i></a>
                        <a className="btn-floating" href="#multi-item-example" data-slide="next"><i
                            className="fas fa-chevron-right"></i></a>
                    </div>

                    <ol className="carousel-indicators">
                    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                    </ol> 
                
                <div className="carousel-inner" role="listbox">

                    
                    <div className="carousel-item active">

                        <div className="col-md-3 notice">
                            <div className="card mb-2">
                                <img className="card-img-top imgCard"
                                    src={cat4} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Gato de quatro orelhas ganha casa e conquista as redes sociais</h4>
                                    <p className="card-text">O gato Midas virou um sucesso nas redes sociais devido a uma característica rara: ele tem quatro orelhas.</p>
                                    <a target="_blank" href="https://noticias.uol.com.br/internacional/ultimas-noticias/2021/11/05/gato-de-quatro-orelhas-ganha-casa-e-conquista-as-redes-sociais.htm" className="btnNotice btn-primary">Leia Mais</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 notice" >
                            <div className="card mb-2">
                                <img className="card-img-top imgCard"
                                    src="https://t2.ea.ltmcdn.com/pt/posts/7/3/9/paralisia_de_laringe_em_caes_sintomas_causas_e_tratamento_23937_orig.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Paralisia de laringe em cães</h4>
                                    <p className="card-text">Sintomas, causas e tratamento</p>
                                    <a target="_blank" href="https://www.peritoanimal.com.br/paralisia-de-laringe-em-caes-sintomas-causas-e-tratamento-23937.html" className="btnNotice btn-primary">Leia Mais</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 notice">
                            <div className="card mb-2">
                                <img className="card-img-top imgCard"
                                    src="https://www.dicaspetz.com.br/wp-content/uploads/2020/05/como-cuidar-de-um-filhote-recem-nascido-orfao.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Como alimentar filhote de cachorro de 1 mês?</h4>
                                    <p className="card-text">Os cachorros, como mamíferos, devem ter um período de amamentação de cerca de um mês. O ideal é que, durante este período, eles fiquem com a mãe. Entretanto, há situações em que isso não é possível (devido à morte da mãe ou à rejeição dos filhotes). Nesses casos, é importante saber como e com o que alimentar os filhotes para que possam sobreviver sem a mãe.</p>
                                    <a target="_blank" href="https://www.peritoanimal.com.br/como-alimentar-filhote-de-cachorro-de-1-mes-23935.html" className="btnNotice btn-primary">Leia Mais</a>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-md-3 notice">
                            <div className="card mb-2">
                                <img className="card-img-top imgCard"
                                    src={coelho} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Comida para coelho filhote</h4>
                                    <p className="card-text">Os coelhos são animais que estão ganhando cada vez mais popularidade como animais de estimação. Por isso, se você acaba de adotar um coelho recém-nascido ou se tiver resgatado um coelho para cuidar, você deve saber que em cada etapa de suas vidas os coelhos requerem uma série de cuidados específicos, entre os quais se destaca o tipo de alimentação mais adequada.</p>
                                    <a target="_blank" href="https://www.peritoanimal.com.br/comida-para-coelho-filhote-22562.html" className="btnNotice btn-primary">Leia Mais</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    

                    
                    <div className="carousel-item">

                        <div className="col-md-3 notice">
                            <div className="card mb-2">
                                <img className="card-img-top imgCard"
                                    src="https://biofarm.com.br/wp-content/uploads/Alimenta%C3%A7%C3%A3o.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Benefícios da comida caseira para cachorros</h4>
                                    <p className="card-text">Se pensarmos na alimentação canina, é fácil pensar em rações e diferentes variedades de comida úmida enlatada. Nosso ritmo acelerado de vida atual nos faz alimentar nossos cachorros de uma maneira tão rápida e confortável como aquela que nos permite abrir um pacote ou uma lata e colocar o alimento pronto no comedouro. Mas a alimentação industrializada é a melhor opção?</p>
                                    <a target="_blank" href="https://www.peritoanimal.com.br/beneficios-da-comida-caseira-para-cachorros-23635.html" className="btnNotice btn-primary">Leia Mais</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 notice">
                            <div className="card mb-2">
                                <img className="card-img-top imgCard"
                                    src="https://static.vix.com/pt/sites/default/files/p/pato-mandarim-0720-1400x800.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">O que pato come? - A alimentação dos patos</h4>
                                    <p className="card-text">O que pato come? Neste artigo do PeritoAnimal há uma revisão geral sobre a alimentação dos patos, para que você saiba em que consiste a sua dieta e o que estas aves  tão populares podem ou não comer. </p>
                                    <a target="_blank" href="https://www.peritoanimal.com.br/beneficios-da-comida-caseira-para-cachorros-23635.html" className="btnNotice btn-primary">Leia Mais</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 notice">
                            <div className="card mb-2">
                                <img className="card-img-top imgCard"
                                    src="https://www.fatosdesconhecidos.com.br/wp-content/uploads/2019/11/cachorros-4.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">22 raças de cachorros raros</h4>
                                    <p className="card-text">É impressionante como o mundo animal é capaz de surpreende todos os dias. Aqui você vai encontrar algo muito peculiar e chamativo, os cachorros mais raros do mundo. Embora muitas das raças de cachorros que mostraremos abaixo sejam, sem dúvida, lindas, é inegável que elas também são um pouco estranhas ou diferentes do que costumamos conhecer.</p>
                                    <a target="_blank" href="https://www.peritoanimal.com.br/22-racas-de-cachorros-raros-23190.html" className="btnNotice btn-primary">Leia Mais</a>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-md-3 notice">
                            <div className="card mb-2">
                                <img className="card-img-top imgCard"
                                    src="https://s2.static.brasilescola.uol.com.br/be/2020/12/peixe.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Peixes ideais para principiantes</h4>
                                    <p className="card-text">Os peixes, regra geral, são animais sensíveis que precisam de cuidados específicos para sobreviver. Normalmente todos queremos aquários grandes e com muitos peixes exóticos e chamativos, no entanto, se não temos experiência no cuidado de peixes, não nos devemos guiar simplesmente pelo aspecto sem ter em conta se são espécies demasiado delicadas e que possam adoecer com facilidade. </p>
                                    <a target="_blank" href="https://www.peritoanimal.com.br/peixes-ideais-para-principiantes-21446.html" className="btnNotice btn-primary">Leia Mais</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <br />
                <br />
                   
                </div>

            </div>          
        </>
    )
}

export default PetDicas;