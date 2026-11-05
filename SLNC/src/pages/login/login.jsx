
import { useState } from "react";
import { MdCloud } from "react-icons/md";
import "./login.css";

export default function Login({ onNext, onBack }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (!email.trim() || !senha.trim()) {
      alert("Preencha seu e-mail e sua senha.");
      return;
    }

    onNext();
  }

  return (
    <section className="intro-screen login-screen">
      <div className="login-logo">
        <MdCloud />
      </div>

      <p className="eyebrow">SE LIGA NA CHUVA</p>

      <h1>Bem-vindo<br />de volta!</h1>

      <p className="intro-description">
        Entre na sua conta para acompanhar os alertas
        e as informações da sua região.
      </p>

      <div className="login-form">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      <button className="primary-button" onClick={entrar}>
        Entrar
      </button>

      <button className="secondary-button" onClick={onBack}>
        Voltar
      </button>

      <button className="text-button" onClick={onNext}>
        Ainda não tenho cadastro
      </button>
    </section>
  );
}

