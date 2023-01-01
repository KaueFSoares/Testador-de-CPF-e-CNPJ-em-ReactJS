import styles from "./Input.module.css"
import InputMask from "react-input-mask"
import { useState } from "react"

function Input(props) {

    const [textResult, setTextResult] = useState()
    const [value, setValue] = useState()

    function testCPF(e) {
        e.preventDefault()
        

        let numStr = value.replace(/[^0-9]/g, '');

        let numInt = num => Number(num);

        let numArray = Array.from(String(numStr), numInt);

        let c = 10;

        let sum = 0;

        for (let i = 0; i < 9; i++) {
            sum = sum + (numArray[i] * c);
            c--;
        }

        let r1 = sum % 11;

        let verify1 = 0;

        if (r1 === 0 || r1 === 1) {
            verify1 = 0;
        } else {
            verify1 = 11 - r1;
        }

        sum = 0;
        c = 10;

        if (verify1 === numArray[9]) {

            for (let i = 1; i < 10; i++) {
                sum = sum + (numArray[i] * c);
                c--
            }

            let r2 = sum % 11;

            let verify2 = 0;

            if (r2 === 0 || r2 === 1) {
                verify2 = 0;
            } else {
                verify2 = 11 - r2;
            }

            if (verify2 === numArray[10]) {
                setTextResult("Cpf válido!")
            } else {
                setTextResult("Cpf inválido!")
            }


        } else {
            setTextResult("Cpf inválido!")
        }

    }



    /* --------------------------------------------- */



    function testCNPJ(e) {

        e.preventDefault()



        let numStr = value.replace(/[^0-9]/g, ''); // pega só os números do input

        let numInt = num => Number(num); // converte o valor em int

        let numArray = Array.from(String(numStr), numInt); // transforma o número em um vetor

        let testArray = [0, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6]; // vetor com a sequência dos números de teste do cnpj na ordem contraria

        numArray.reverse(); // inverte o vetor com os números do cnpj


        // para testar o primeiro digito do cnpj, usam-se 12 digitos, 
        // enquanto para testar o segundo, usam-se 13. O digito adicionado
        // no teste do segundo digito é adicionado ao começo da sequência,
        // portanto, para usar apenas um vetor, inverti o os números do cnpj
        // para usar a mesma variável de controle no for

        //console.log(numArray)
        //console.log(testArray) 

        let sum = 0;

        for (let i = 1; i < 13; i++) {
            sum = sum + (numArray[i + 1] * testArray[i]);
            // console.log(numArray[i + 2] + " * " + testArray[i + 1])
        }

        let r1 = sum % 11;

        let verify1 = 0;

        if (r1 === 0 || r1 === 1) {
            verify1 = 0;
        } else {
            verify1 = 11 - r1;
        }

        if (verify1 === numArray[1]) {

            sum = 0;

            for (let i = 13; i > 0; i--) {
                sum = sum + (numArray[i] * testArray[i]);
            }

            let r2 = sum % 11;

            let verify2 = 0;

            if (r2 === 0 || r2 === 1) {
                verify2 = 0;
            } else {
                verify2 = 11 - r2;
            }

            if (verify2 === numArray[0]) {
                setTextResult("Cnpj válido!")
            } else {
                setTextResult("Cnpj inválido!")
            }
        } else {
            setTextResult("Cnpj inválido!")
        }
    }


    /* -------------------------------------------------------- */





    if (props.selected === "cpf") {
        return (
            <>
                <InputMask
                    mask="999.999.999-99"
                    className={styles.input}
                    placeholder="Digite seu cpf..."
                    onChange={(e) => setValue(e.target.value)}
                />

                <br></br>

                <button
                    className={styles.button}
                    onClick={testCPF}
                >

                    <h2>Testar</h2>

                </button>

                {value && (

                    <p
                        className={styles.textResult}
                    >

                        {textResult}

                    </p>

                )}
            </>
        )
    } else {
        return (
            <>
                <InputMask
                    mask="99.999.999/9999-99"
                    className={styles.input}
                    placeholder="Digite seu cnpj..."
                    onChange={(e) => setValue(e.target.value)}
                />

                <br></br>

                <button
                    className={styles.button}
                    onClick={testCNPJ}
                >

                    <h2>Testar</h2>

                </button>

                {value && (

                    <p
                        className={styles.textResult}
                    >

                        {textResult}

                    </p>

                )}
            </>
        )
    }

}

export default Input