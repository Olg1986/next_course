import A from '../components/A';
import Head from 'next/head';
const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"ulbi, next.js" + keywords}></meta>
                <title>Главная</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text="Главная"/>
                <A href={'/users'} text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                    {`
                    .navbar {
                        background-color: red;
                        padding: 15px;
                    }
                    `}
            </style>
        </>
    )
}

export default MainContainer;