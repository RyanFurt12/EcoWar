
export default async function Test(){
    const res = await fetch(`http://localhost:3000/api`); 
    // Verifique o status da resposta
    if (!res.ok) {
      const text = await res.text(); // Obter a resposta como texto
      console.error('Erro na API:', text);
      return <h1>Erro ao buscar dados</h1>;
    }

    const message = await res.json();
    console.log(message)
    return(
        <h1>{message.hello}</h1>
    )
}
