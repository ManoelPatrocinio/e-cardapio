import { Link } from "react-router-dom";
import cardapio_header from "../assets/header_cardapio.jpg"
import { Product as ProdType } from "../types/types";

type Prop ={
    item:ProdType;
}
export function Product({item}:Prop) {

    function whatsAppLink(){
        const wppNumber = import.meta.env.VITE_WHATSAPP_NUMBER
        window.location.href = `http://api.whatsapp.com/send?l=pt_BR&phone=+${wppNumber}?&text=Olá`;
    }
    return (
        <div className="w-full flex justify-start items-start gap-4 pb-4 mb-  border-b-2 border-[#1d1d1d]  rounded-md ">
            <Link to={"/duble/123"} className="w-[5rem] md:w-[7rem] h-[5rem] md:h-[7rem] rounded-full mt-4"><img src={cardapio_header} alt="hambúrguer" className="w-full h-full rounded-full" /></Link>
            <div className="w-[65%] md:w-[80%]">
                <header className="w-full flex flex-col">
                    <div className="w-full flex justify-between">

                        <h2 className="text-base text-left text-orange-900 font-titles ">{item.name}</h2>
                        <p className="text-lg text-left text-green-600 font-bold">R$ {item.price}</p>
                    </div>
                    <div className="w-full h-[1px] bg-white mt-1"></div>
                </header>
                <p className="w-full text-left text-whiter-900 my-2">{item.ingredients}</p>

                <button 
                    onClick={()=>whatsAppLink()}
                    className="flex px-2 py-1 bg-green-600 text-whiter-900 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.05 4.91C18.1332 3.98392 17.0412 3.24967 15.8377 2.75005C14.6341 2.25043 13.3432 1.99546 12.04 2C6.58005 2 2.13005 6.45 2.13005 11.91C2.13005 13.66 2.59005 15.36 3.45005 16.86L2.05005 22L7.30005 20.62C8.75005 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.9501 17.38 21.9501 11.92C21.9501 9.27 20.92 6.78 19.05 4.91ZM12.04 20.15C10.56 20.15 9.11005 19.75 7.84005 19L7.54005 18.82L4.42005 19.64L5.25005 16.6L5.05005 16.29C4.2278 14.977 3.79119 13.4592 3.79005 11.91C3.79005 7.37 7.49005 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6175 6.85396 19.2257 7.76266 19.6394 8.76342C20.0531 9.76419 20.2641 10.8371 20.26 11.92C20.2801 16.46 16.58 20.15 12.04 20.15ZM16.56 13.99C16.31 13.87 15.09 13.27 14.87 13.18C14.64 13.1 14.48 13.06 14.31 13.3C14.14 13.55 13.67 14.11 13.53 14.27C13.39 14.44 13.24 14.46 12.99 14.33C12.74 14.21 11.94 13.94 11 13.1C10.26 12.44 9.77005 11.63 9.62005 11.38C9.48005 11.13 9.60005 11 9.73005 10.87C9.84005 10.76 9.98005 10.58 10.1 10.44C10.22 10.3 10.27 10.19 10.35 10.03C10.43 9.86 10.39 9.72 10.33 9.6C10.27 9.48 9.77005 8.26 9.57005 7.76C9.37005 7.28 9.16005 7.34 9.01005 7.33H8.53005C8.36005 7.33 8.10005 7.39 7.87005 7.64C7.65005 7.89 7.01005 8.49 7.01005 9.71C7.01005 10.93 7.90005 12.11 8.02005 12.27C8.14005 12.44 9.77005 14.94 12.25 16.01C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.69 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.03 14.27C16.96 14.16 16.81 14.11 16.56 13.99Z" fill="#F8F8F8" />
                    </svg>
                    Pedir agora
                </button>
            </div>
        </div>
    )
}