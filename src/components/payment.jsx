import React from "react";
import { useState } from "react";

export const Payment = () => {
    const paymentOptions = [45, 90, 135, 180, 225, 270];
    const [currentOption, setCurrentOption] = useState(45);
    const listPix = [
        `00020101021126360014br.gov.bcb.pix0114+5541998490893520400005303986540545.005802BR5923GABRIEL RYAN DOS SANTOS6008CURITIBA62070503***63047FD1`
    ];

    const handleCurrentOption = (option) => {
        setCurrentOption(option);
    };

    const handleCopyPixLink = () => {
        // Copiar para a área de transferência
        navigator.clipboard.writeText(listPix[0]);
        alert("Chave Pix copiada!");
    };

    return (
        <article className="payment-conteinner">
            <h2 className="payment-title">Pagamento da Tag Veicular</h2>
            <section className="payment-innerConteinner">
                <h4>Selecione a quantidade de tag(s) adquiridas</h4>
                <ul>
                    {paymentOptions.map((option, index) => (
                        <li
                            key={index}
                            className={option === currentOption ? "selected" : ""}
                            onClick={() => handleCurrentOption(option)}
                        >
                            {index + 1}
                        </li>
                    ))}
                </ul>
                <h3>Valor: {currentOption} BRL</h3>
                <img src="../images/qrcode-45.jpeg" alt="QR Code" />
                <div
                    className="button payment-button"
                    onClick={handleCopyPixLink}
                >
                    Copiar chave-pix
                </div>
            </section>

            <section className="payment-info">
                <h3>Atenção</h3>
                <p>
                    Após o pagamento favor enviar o comprovante via <b>WhatsApp</b>{" "}
                    disponível no botão abaixo:
                </p>
                <a
                    className="button payment-info-button"
                    href="https://api.whatsapp.com/send?phone=554195054375"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="../images/whatsapp-logo.png" alt="WhatsApp logo" />
                    WhatsApp
                </a>
                <p>Assim confirmaremos o pagamento no sistema. Alguma dúvida? Entre em contato conosco!</p>
            </section>
        </article>
    );
};
