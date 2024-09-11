import style from './../css/header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerRed}>
                <div className={style.headerImg}>
                    <img src="./images/pokedex.png" alt="" />
                </div>
            </div>
            <div className={style.headerBlack}></div>
            <div className={style.headerCircle}>
                <div className={style.headerCircleIntern}></div>
            </div>
        </header>
    )
}