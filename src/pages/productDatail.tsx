import { useState } from "react";
import ProductExem from "../assets/capa-desktop.jpg"
import { Footer } from "../components/Footer";
import { Order } from "../types/types";


export function ProductDetail() {
    const [formData, setFormData] = useState<Order>({
        product: null,
        quantity: 1,
        observation: '',
        drinks: []

    });

    const handleProdQtd = (arg: boolean) => {
        if (arg) {
            setFormData({
                ...formData,
                quantity: formData.quantity! + 1
            });
        } else {
            if (formData.quantity! > 1) {
                setFormData({
                    ...formData,
                    quantity: formData.quantity! - 1
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
        // Atualizar o estado do formulário apenas no envio, usando o evento do formulário
        const formDataFromEvent: any= {
            name: "exemple",
            price: 8,
            quantity: parseInt( (event.target as any).quantity.defaultValue),
            observation: (event.target as any).observation.defaultValue,
            drinks: formData.drinks
        };
        setFormData(formDataFromEvent);

        // Faça algo com os dados do formulário, por exemplo, envie para um servidor
        console.log('Dados do formulário:', formDataFromEvent);
    }
    return (
        <>
            <header className="w-screen md:w-full h-[35vh] md:h-[45vh]">
                <img src={ProductExem} className="w-full h-full object-cover" alt="hamburgues" />
            </header>
            <main className="w-full md:w-2/3 mx-auto h-full min-h-[65vh] md:min-h-[55vh] flex flex-col items-center px-6 md:px-10 mb-6 bg-dark-900">
                <h1 className="w-full text-left  text-2xl text-orange-900 font-semibold font-titles mt-4 md:mt-10 mb-3">Duble Burguer</h1>
                <p className="w-full h-full text-whiter-900 text-left text-lg"> <span className=" font-bold text-orange-900">Ingredientes:</span> Pão,  2 carnes, queijo, tomate e alface.</p>

                <p className="w-full h-full text-xl text-whiter-900 text-left font-semibold mt-4">Preço: <span className="text-green-600">R$:8,00</span></p>


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
                                defaultValue={formData.quantity}
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

                    <div className="w-full flex flex-col items-center px-6 md:px-10  gap-y-10">
                        <div className="w-full flex justify-center items-center ">
                            <div className="w-full">
                                <label htmlFor="optRefrigerante" className="text-lg text-orange-900 font-semibold flex justify-between">Suco natural 500 ml <span className="text-green-600 ">R$ 7,00</span></label>
                                <div className="w-full bg-whiter-900 h-[2px] rounded "></div>
                            </div>
                            <input 
                                type="checkbox" 
                                name="Refrigerante" 
                                id="optRefrigerante" 
                                defaultValue={"Refrigerante 1l"} 
                                className="ml-4"
                                onChange={handleCheckboxChange}
                            />
                        </div>
                        <div className="w-full flex justify-center items-center ">
                            <div className="w-full">
                                <label htmlFor="optSucoNatural" className="text-lg text-orange-900 font-semibold flex justify-between">Refrigerante 1L <span className="text-green-600 ">R$ 7,00</span></label>
                                <div className="w-full bg-whiter-900 h-[2px] rounded "></div>
                            </div>
                            <input 
                                type="checkbox" 
                                name="SucoNatural" 
                                id="optSucoNatural" 
                                defaultValue={"Suco Natural"} 
                                className="ml-4"
                                onChange={handleCheckboxChange} 
                            />
                        </div>
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