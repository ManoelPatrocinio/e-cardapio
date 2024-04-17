import { useEffect, useState } from "react";
import ProductExem from "../assets/capa-desktop.jpg"
import { Footer } from "../components/Footer";
import { Order, Product } from "../types/types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Products } from "../datas/produtos";


export function ProductDetail() {
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null)
    const { productId } = useParams()

    const [formData, setFormData] = useState<Order>({
        product: null,
        quantity: 1,
        observation: '',
        drinks: []

    });

    useEffect(() => {
        const product = Products.find((item) => item.id === productId)
        product != undefined && setProduct(product)
        if (!product) {
            navigate("/cardapio");
        }
    }, [])



    function sendOrderBywhatsApp(order: Order) {
        const mensage = `
            ${order.quantity} - hamburgues, \n
            com a(s) bebida(s): ${order.drinks!.length > 0 ? order.drinks : "sem bebidas"},
            observações:${order.observation!.length > 0 ? order.observation : "sem ob"}


        `
        const wppNumber = import.meta.env.VITE_WHATSAPP_NUMBER
        window.location.href = `http://api.whatsapp.com/send?l=pt_BR&phone=+${wppNumber}?&text=${mensage} `;
    }
    const handleProdQtd = (arg: boolean) => {
        if (arg) {
            setFormData({
                ...formData,
                quantity: formData.quantity ? formData.quantity + 1 : 1

            });
        } else {
            if (formData.quantity! > 1) {
                setFormData({
                    ...formData,
                    quantity: formData.quantity ? formData.quantity - 1 : 1

                });
            }
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setFormData((prevFormData) => {
            if (checked) {
                return { ...prevFormData, drinks: [...prevFormData.drinks!, name] };
            } else {
                return { ...prevFormData, drinks: prevFormData.drinks!.filter((option) => option !== name) };
            }
        });
    };
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log("event", event)
        // Atualizar o estado do formulário apenas no envio, usando o evento do formulário
        const formDataFromEvent: any = {
            name: "exemple",
            price: 8,
            quantity: formData.quantity,
            observation: (event.target as any).observation.value,
            drinks: formData.drinks
        };

        // Faça algo com os dados do formulário, por exemplo, envie para um servidor
        console.log('Dados do formulário:', formDataFromEvent);
        sendOrderBywhatsApp(formDataFromEvent)
    }

    return (
        <>

            <header className="relative w-screen md:w-full h-[35vh] md:h-[45vh]">
                <Link
                    to="/cardapio"
                    className="absolute top-4 left-4 w-10 h-6 flex justify-center items-center bg-black bg-opacity-55  rounded-xl "
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.7501 8C14.7501 8.19891 14.6711 8.38968 14.5304 8.53033C14.3897 8.67098 14.199 8.75 14.0001 8.75H3.81007L6.53007 11.47C6.60376 11.5387 6.66286 11.6215 6.70385 11.7135C6.74485 11.8055 6.76689 11.9048 6.76866 12.0055C6.77044 12.1062 6.75192 12.2062 6.7142 12.2996C6.67647 12.393 6.62033 12.4778 6.54911 12.549C6.47789 12.6203 6.39306 12.6764 6.29967 12.7141C6.20628 12.7518 6.10625 12.7704 6.00555 12.7686C5.90485 12.7668 5.80553 12.7448 5.71353 12.7038C5.62153 12.6628 5.53873 12.6037 5.47007 12.53L1.47007 8.53C1.32962 8.38937 1.25073 8.19875 1.25073 8C1.25073 7.80125 1.32962 7.61062 1.47007 7.47L5.47007 3.47C5.61225 3.33752 5.80029 3.2654 5.9946 3.26882C6.1889 3.27225 6.37428 3.35096 6.51169 3.48838C6.64911 3.62579 6.72782 3.81118 6.73125 4.00548C6.73468 4.19978 6.66255 4.38782 6.53007 4.53L3.81007 7.25H14.0001C14.199 7.25 14.3897 7.32902 14.5304 7.46967C14.6711 7.61032 14.7501 7.80109 14.7501 8Z" fill="#F8F8F8" />
                    </svg>

                </Link>
                <img src={ProductExem} className="w-full h-full object-cover" alt="hamburgues" />
            </header>
            <main className="w-full md:w-2/3 mx-auto h-full min-h-[65vh] md:min-h-[55vh] flex flex-col items-center px-6 md:px-10 mb-6 bg-dark-900">
                <h1 className="w-full text-left  text-2xl text-orange-900 font-semibold font-titles mt-4 md:mt-10 mb-3">{product?.name}</h1>
                <p className="w-full h-full text-whiter-900 text-left text-lg"> <span className=" font-bold text-orange-900">Ingredientes:</span>{product?.ingredients}</p>

                <p className="w-full h-full text-xl text-whiter-900 text-left font-semibold mt-4">Preço: <span className="text-green-600">R$:{product?.price.toPrecision(3)}</span></p>


                <form onSubmit={(event: React.FormEvent) => handleSubmit(event)} className="w-full">
                    <div className="w-1/2 md:w-1/3 mx-auto flex flex-col items-center text-whiter-900 my-8">
                        <label htmlFor="prodQTD" className="font-semibold mb-2 text-xl">Quantidade</label>
                        <div className="w-full flex justify-start text-2xl font-semibold rounded border border-whiter-900  py-2 mb-4 md:mb-0  ">
                            <button
                                className="w-1/4 h-full text-center  "
                                type="button"
                                onClick={() => handleProdQtd(false)}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                className="w-1/2 h-full text-center text-lg text-orange-900 font-medium py-2 bg-transparent focus:border-none focus:outline-none"
                                value={formData.quantity}
                                readOnly
                                name="quantity"
                                id="prodQTD"
                            />

                            <button
                                className="w-1/4 h-full text-center  text-palm-700"
                                type="button"
                                onClick={() => handleProdQtd(true)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <h2 className="w-full text-center  text-xl text-orange-900 font-semibold font-titles mt-4 mb-3">Bebidas</h2>


                    <div className="w-full h-[128px] overflow-y-auto flex flex-col items-center  md:px-10  gap-y-10">
                        {Products.filter((item) => item.category === "bebidas")
                            .map((item) => (
                                <div className="w-full flex justify-center items-center" key={item.id}>
                                    <div className="w-full">
                                        <label htmlFor="optSucoNatural" className="text-lg text-orange-900 font-semibold flex justify-between">{item.name} <span className="text-green-600 text-nowrap ">R$ {item.price.toPrecision(3)}</span></label>
                                        <div className="w-full bg-whiter-900 h-[2px] rounded "></div>
                                    </div>
                                    <input
                                        type="checkbox"
                                        name="SucoNatural"
                                        id="optSucoNatural"
                                        className="ml-4"
                                        onChange={handleCheckboxChange}
                                    />
                                </div>
                        ))}
                    </div>

                    <div className="px-2  my-8 md:py-10">
                        <label htmlFor="" className="text-whiter-900 text-lg ">Observação sobre o pedido ?</label>
                        <textarea
                            id=""
                            name="observation"
                            cols={30}
                            rows={3}
                            className="w-full text-whiter-900 bg-transparent border border-gray-600 rounded-md mt-4 p-2 "
                            placeholder="Ex: Retirar o tomate, alface, milho etc.."
                            aria-expanded={false}>
                        </textarea>
                    </div>
                    <p className="w-full text-center text-xl text-white font-semibold mb-4">Total: <span className="text-green-600"> R$ 8,00</span></p>
                    <button
                        type="submit"
                        className="w-[90%] md:w-1/2 flex justify-center mx-auto px-3 py-3 gap-2 bg-green-600 text-xl text-whiter-900 font-semibold rounded-lg">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.05 4.91C18.1332 3.98392 17.0412 3.24967 15.8377 2.75005C14.6341 2.25043 13.3432 1.99546 12.04 2C6.58005 2 2.13005 6.45 2.13005 11.91C2.13005 13.66 2.59005 15.36 3.45005 16.86L2.05005 22L7.30005 20.62C8.75005 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.9501 17.38 21.9501 11.92C21.9501 9.27 20.92 6.78 19.05 4.91ZM12.04 20.15C10.56 20.15 9.11005 19.75 7.84005 19L7.54005 18.82L4.42005 19.64L5.25005 16.6L5.05005 16.29C4.2278 14.977 3.79119 13.4592 3.79005 11.91C3.79005 7.37 7.49005 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6175 6.85396 19.2257 7.76266 19.6394 8.76342C20.0531 9.76419 20.2641 10.8371 20.26 11.92C20.2801 16.46 16.58 20.15 12.04 20.15ZM16.56 13.99C16.31 13.87 15.09 13.27 14.87 13.18C14.64 13.1 14.48 13.06 14.31 13.3C14.14 13.55 13.67 14.11 13.53 14.27C13.39 14.44 13.24 14.46 12.99 14.33C12.74 14.21 11.94 13.94 11 13.1C10.26 12.44 9.77005 11.63 9.62005 11.38C9.48005 11.13 9.60005 11 9.73005 10.87C9.84005 10.76 9.98005 10.58 10.1 10.44C10.22 10.3 10.27 10.19 10.35 10.03C10.43 9.86 10.39 9.72 10.33 9.6C10.27 9.48 9.77005 8.26 9.57005 7.76C9.37005 7.28 9.16005 7.34 9.01005 7.33H8.53005C8.36005 7.33 8.10005 7.39 7.87005 7.64C7.65005 7.89 7.01005 8.49 7.01005 9.71C7.01005 10.93 7.90005 12.11 8.02005 12.27C8.14005 12.44 9.77005 14.94 12.25 16.01C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.69 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.03 14.27C16.96 14.16 16.81 14.11 16.56 13.99Z" fill="#F8F8F8" />
                        </svg>
                        Pedir agora
                    </button>

                </form>

            </main >
            <Footer />
        </>
    )
}