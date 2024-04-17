import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export function Location() {

    function whatsAppLink() {
        const wppNumber = import.meta.env.VITE_WHATSAPP_NUMBER
        window.location.href = `http://api.whatsapp.com/send?l=pt_BR&phone=+${wppNumber}?&text=Olá, Tudo bem ?`;
    }
    return (<>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.3447292586256!2d-43.143439825870686!3d-11.087664689080633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7667f80b2acbd83%3A0x955973286c4cf347!2sR.%20Visc.%20Bom%20Conselho%2C%20489%20-%20Barra%2C%20BA%2C%2047100-000!5e0!3m2!1spt-BR!2sbr!4v1705099815691!5m2!1spt-BR!2sbr"
            className="w-screen md:w-full h-[35vh] md:h-[45vh] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        <main className="w-screen md:w-full px-4 mb-8">

            <h1 className="w-full text-orange-900 text-center text-xl font-titles font-bold my-6">HAMBÚRGUER DE SIRI M & J</h1>

            <p className="w-full text-justify md:text-center text-whiter-900 text-lg font-[500] indent-6">Venha aproveitar e saborear nossa variedade de  lanches, com  o melhor preço da cidade e qualidade garantida. </p>
            <p className="w-full text-center text-whiter-900 text-lg font-semibold mt-6 mb-2">Rua Visconde do Bom Conselho, 489, Próximo a SAMU</p>
            <p className="w-full text-center text-whiter-900 text-lg font-semibold">Barra - Ba</p>

            <button
                onClick={() => whatsAppLink()}
                className="flex justify-center items-center gap-2 w-[80%] md:w-1/3 bg-green-600 text-whiter-900 text-lg text-center font-medium py-3 mx-auto mt-6 rounded-md"
            >
                Entre em contato pelo
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.05 4.91C18.1332 3.98392 17.0412 3.24967 15.8377 2.75005C14.6341 2.25043 13.3432 1.99546 12.04 2C6.58005 2 2.13005 6.45 2.13005 11.91C2.13005 13.66 2.59005 15.36 3.45005 16.86L2.05005 22L7.30005 20.62C8.75005 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.9501 17.38 21.9501 11.92C21.9501 9.27 20.92 6.78 19.05 4.91ZM12.04 20.15C10.56 20.15 9.11005 19.75 7.84005 19L7.54005 18.82L4.42005 19.64L5.25005 16.6L5.05005 16.29C4.2278 14.977 3.79119 13.4592 3.79005 11.91C3.79005 7.37 7.49005 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6175 6.85396 19.2257 7.76266 19.6394 8.76342C20.0531 9.76419 20.2641 10.8371 20.26 11.92C20.2801 16.46 16.58 20.15 12.04 20.15ZM16.56 13.99C16.31 13.87 15.09 13.27 14.87 13.18C14.64 13.1 14.48 13.06 14.31 13.3C14.14 13.55 13.67 14.11 13.53 14.27C13.39 14.44 13.24 14.46 12.99 14.33C12.74 14.21 11.94 13.94 11 13.1C10.26 12.44 9.77005 11.63 9.62005 11.38C9.48005 11.13 9.60005 11 9.73005 10.87C9.84005 10.76 9.98005 10.58 10.1 10.44C10.22 10.3 10.27 10.19 10.35 10.03C10.43 9.86 10.39 9.72 10.33 9.6C10.27 9.48 9.77005 8.26 9.57005 7.76C9.37005 7.28 9.16005 7.34 9.01005 7.33H8.53005C8.36005 7.33 8.10005 7.39 7.87005 7.64C7.65005 7.89 7.01005 8.49 7.01005 9.71C7.01005 10.93 7.90005 12.11 8.02005 12.27C8.14005 12.44 9.77005 14.94 12.25 16.01C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.69 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.03 14.27C16.96 14.16 16.81 14.11 16.56 13.99Z" fill="#F8F8F8" />
                </svg>

            </button>
            <p className="w-full text-center  text-white text-lg my-4">Ou</p>
            <Link
                to="https://www.instagram.com/hambuguer_de_siri_mj/"
                className="flex justify-center items-center gap-2 w-[80%] md:w-1/3 text-whiter-900 text-lg font-medium text-center  py-3 mx-auto rounded-md bg-gradient-to-r from-purple-500 to-pink-500"
                target="_blank"
            >
                Também pelo
                <svg width="26" height="26" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 14C11.4283 14 12.3185 13.6313 12.9749 12.9749C13.6313 12.3185 14 11.4283 14 10.5C14 9.57174 13.6313 8.6815 12.9749 8.02513C12.3185 7.36875 11.4283 7 10.5 7C9.57174 7 8.6815 7.36875 8.02513 8.02513C7.36875 8.6815 7 9.57174 7 10.5C7 11.4283 7.36875 12.3185 8.02513 12.9749C8.6815 13.6313 9.57174 14 10.5 14Z" stroke="#F8F8F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.625 14V7C2.625 5.83968 3.08594 4.72688 3.90641 3.90641C4.72688 3.08594 5.83968 2.625 7 2.625H14C15.1603 2.625 16.2731 3.08594 17.0936 3.90641C17.9141 4.72688 18.375 5.83968 18.375 7V14C18.375 15.1603 17.9141 16.2731 17.0936 17.0936C16.2731 17.9141 15.1603 18.375 14 18.375H7C5.83968 18.375 4.72688 17.9141 3.90641 17.0936C3.08594 16.2731 2.625 15.1603 2.625 14Z" stroke="#F8F8F8" strokeWidth="1.5" />
                    <path d="M15.3125 5.69763L15.3225 5.68663" stroke="#F8F8F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </Link>
            <Link
                    to="/"
                    className="block w-full text-center text-whiter-900 underline mt-6"
                >
                   Voltar

                </Link>
        </main>
        <Footer />
    </>)
}