import React, { useState } from 'react';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = (event) => {
    event.preventDefault();

    if (altura && peso) {
      const alturaEmMetros = altura / 100; // Convertendo cm para metros
      const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      setImc(imcCalculado);
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label htmlFor="altura">Altura (cm):</label>
          <input
            type="number"
            id="altura"
            name="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="peso">Peso_I (kg):</label>
          <input
            type="number"
            id="peso"
            name="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      
      {imc && (
        <div className="resultado">
          <h2>Resultado</h2>
          <table>
            <thead>
              <tr>
                <th>IMC</th>
                <th>Classificacao</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{imc}</td>
                <td>{classificarIMC(imc)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const classificarIMC = (imc) => {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc >= 18.5 && imc <= 24.9) return "Peso normal";
  if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
  if (imc >= 30 && imc <= 34.9) return "Obesidade Grau 1";
  if (imc >= 35 && imc <= 39.9) return "Obesidade Grau 2";
  if (imc >= 40) return "Obesidade Grau 3";
};

export default App;
