import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="w-full py-4 text-center">
            <Link
                to="https://www.instagram.com/hambuguer_de_siri_mj/"
                className="w-full flex justify-center items-center gap-2 text-center text-base text-whiter-900"
            >
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 14C11.4283 14 12.3185 13.6313 12.9749 12.9749C13.6313 12.3185 14 11.4283 14 10.5C14 9.57174 13.6313 8.6815 12.9749 8.02513C12.3185 7.36875 11.4283 7 10.5 7C9.57174 7 8.6815 7.36875 8.02513 8.02513C7.36875 8.6815 7 9.57174 7 10.5C7 11.4283 7.36875 12.3185 8.02513 12.9749C8.6815 13.6313 9.57174 14 10.5 14Z" stroke="#F8F8F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.625 14V7C2.625 5.83968 3.08594 4.72688 3.90641 3.90641C4.72688 3.08594 5.83968 2.625 7 2.625H14C15.1603 2.625 16.2731 3.08594 17.0936 3.90641C17.9141 4.72688 18.375 5.83968 18.375 7V14C18.375 15.1603 17.9141 16.2731 17.0936 17.0936C16.2731 17.9141 15.1603 18.375 14 18.375H7C5.83968 18.375 4.72688 17.9141 3.90641 17.0936C3.08594 16.2731 2.625 15.1603 2.625 14Z" stroke="#F8F8F8" strokeWidth="1.5" />
                    <path d="M15.3125 5.69763L15.3225 5.68663" stroke="#F8F8F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Siga-nos no Instagram
            </Link>
            <a href="https://manoelpatrocinio.vercel.app/" className="text-whiter-900 text-xs" target="_blank">Copyright &copy; - Criado por Manoel Patrocínio, {new Date().getFullYear()}</a>
        </footer>
    )
}