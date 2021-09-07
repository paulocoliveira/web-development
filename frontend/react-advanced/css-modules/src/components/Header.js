import style from "./Header.module.css"

const Header = () => {
    return(
        <header className={style.header}>
            <h1>Welcome!</h1>
            <button className={style.btn}>Test Button</button>
        </header>
    )
}

export default Header