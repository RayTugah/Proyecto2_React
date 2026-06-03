import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/formulario/formulario";
import "./Contacto.css";

const Contacto = () => {
    return (
        <>
            <Header />
            <main className="contacto-main">
                <h1 className="contacto-title">Contacto</h1>

                <div className="contacto-grid">
                    {/* ── Info panel ── */}
                    <section className="contacto-info">
                        <div className="contacto-info-text">
                            <h2>¿Hablamos?</h2>
                            <p>
                                Estamos abiertos a cualquier sugerencia, colaboración o
                                pregunta. No dudes en escribirnos.
                            </p>
                        </div>

                        <ul className="contacto-links">
                            <li>
                                <span className="contacto-icon">✉</span>
                                <a href="mailto:ayoubarramdani091@gmail.com">ayoubarramdani091@gmail.com</a>
                            </li>
                            <li>
                                <span className="contacto-icon">🐙</span>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <span className="contacto-icon">💼</span>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </section>                    {/* ── Review form ── */}
                    <section className="contacto-form-wrapper">
                        <Formulario />
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contacto;
