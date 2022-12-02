import { useEffect, useState } from "react";

export function IntegratedClassThirteenth() {
    const [pedido, setPedido] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setPedido("Pizza de calabresa");
        }, 2000);
    }, []);

    function cancelarPedido() {
        alert("Pedido cancelado!");
        setPedido("");
    }

    return (
        <div>
            <p>Seu pedido: {pedido}</p>
            <button onClick={cancelarPedido}>Cancelar pedido</button>
        </div>
    );
}