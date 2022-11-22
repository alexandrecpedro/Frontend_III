import { useEffect, useState } from "react";
import { FourteenthClassItem } from "../../components/FourteenthClassItem";
import "./style.scss";

export function FourteenthClass() {
    const registers = [
        { id: 1, title: "First register" }
    ];

    /** REACT HOOKS **/
    // useState
    const [registerListVisible, setRegisterListVisible] = useState(true);

    // useEffect

    /** FUNCTIONS **/
    function deleteRegisterFromList(returnedRegister) {}

    return (
        <>
            <h1>Register List</h1>
            <button onClick={() => setRegisterListVisible(!registerListVisible)}>{`${registerListVisible ? "Hide" : "Display" } List`}</button>

            {
                registerListVisible && (
                    <ul>
                        {
                            // Map using "registers" array
                            registers.map(register => (
                                <FourteenthClassItem
                                    key={register.id}
                                    registerData={register}
                                    deleteRegister={returnedRegister => deleteRegisterFromList(returnedRegister)}
                                />
                            ))
                        }
                    </ul>
                )
            }
        </>
    );
}