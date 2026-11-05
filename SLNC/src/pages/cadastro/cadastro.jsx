
import { useState } from "react";
import { MdPersonAdd } from "react-icons/md";
import "./cadastro.css";

export default function Cadastro({ onBack }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrar() {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    alert("Cadastro demonstrativo concluído!");
  }

  return (
    <section className="intro-screen cadastro-screen">
      <div className="cadastro-icon">
        <MdPersonAdd />
      </div>

      <p className="eyebrow">SE LIGA NA CHUVA</p>

      <h1>Crie sua<br />conta</h1>

      <p className="intro-description">
        Cadastre-se para ter acesso às informações
        e aos alertas da plataforma.
      </p>

      <div className="cadastro-form">
        <label htmlFor="nome">Nome completo</label>
        <input
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="cadastro-email">E-mail</label>
        <input
          id="cadastro-email"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="cadastro-senha">Senha</label>
        <input
          id="cadastro-senha"
          type="password"
          placeholder="Crie uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      <button className="primary-button" onClick={cadastrar}>
        Criar conta
      </button>

      <button className="secondary-button" onClick={onBack}>
        Voltar
      </button>
    </section>
  );
}
