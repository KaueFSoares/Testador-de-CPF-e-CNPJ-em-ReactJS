import { useState } from "react"
import styles from "./Form.module.css"
import Result from "./result/Result"


function Form() {

    const [cpf, setCpf] = useState("cpf")
    const [cnpj, setCnpj] = useState("cnpj")

    const [selectedCpf, setSelectedCpf] = useState()
    const [selectedCnpj, setSelectedCnpj] = useState()

    function mostrarCpf(e){
        e.preventDefault()

        setSelectedCpf(cpf)
        setSelectedCnpj("")
    }

    function mostrarCnpj(e){
        e.preventDefault()

        setSelectedCnpj(cnpj)
        setSelectedCpf("")
    }


    return (

        <>
            <form className={styles.form}>

                <legend className={styles.legend}><h2>Testar CPF ou CNPJ?</h2></legend>

                <fieldset className={styles.appFieldset}>

                    <div className={styles.divOpcao}>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            value="cpf"
                            className={styles.invisibleInput}
                            onChange={(e) => setCpf(e.target.value)}
                        /* input invisível com valor pré setado */

                        />

                        <button
                            className={styles.botaoUm}
                            onClick={mostrarCpf}
                        >

                            <strong>CPF</strong>

                        </button>

                    </div>

                    <div className={styles.divOpcao}>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            value="cnpj"
                            className={styles.invisibleInput}
                            onChange={(e) => setCnpj(e.target.value)}
                        /* input invisível com valor pré setado */
                        />

                        <button
                            className={styles.botaoDois}
                            onClick={mostrarCnpj}
                        >

                            <strong>CNPJ</strong>

                        </button>

                    </div>

                </fieldset>

            </form>

            {selectedCpf && (
                <Result selected="cpf"  /> 
                
            )}

            {selectedCnpj && (
                <Result selected="cnpj"  /> 
                
            )}
        </>

    )
}

export default Form