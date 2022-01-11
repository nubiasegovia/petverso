import "./UserDashboard.css";


const UserDashboard = () => {
    

    return (
        <div className="user-data">
            <div className="title">
                Minha conta
            </div>
            <aside className="aside-left">
                <div className="profile-options">
                    <div className="myprofile">Meu perfil</div>
                    <div className="historic">Histórico de compras</div>
                    <div className="petcoins">PetCoins</div>
                </div>
            </aside>
            <main className="infos">
                <div className="profile">
                    
                </div>
            </main>
            
        </div>
    )
}

export default UserDashboard;