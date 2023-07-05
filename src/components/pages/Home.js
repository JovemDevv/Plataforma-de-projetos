import styles from './Home.module.css'
import savings from '../../img/savings.png'
import LinkButton from '../layout/LinkButton'

function Home() {
    return ( 
    <section className={styles.home_container}>
        <h1>
            Bem-vindo ao <span>Flame</span>
        </h1>
        <p>Comece a gerenciar os seus projetos</p>
        <LinkButton to="/newproject" text="Criar Projeto" />
        <img src={savings} alt="Flame" />
    </section>
    )
} 

export default Home