import React from 'react';
import { Link } from 'react-router-dom';

import heroesImg from '../../assets/logo@3x.png';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={heroesImg} alt="Be The Hero" />
                <spam>Bem vinda, APAD</spam>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso Teste</p>

                    <strong>Descricao</strong>
                    <p>Descricao teste</p>

                    <strong>Valor:</strong>
                    <p>120</p>

                    <button type="button">
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso Teste</p>

                    <strong>Descricao</strong>
                    <p>Descricao teste</p>

                    <strong>Valor:</strong>
                    <p>120</p>

                    <button type="button">
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso Teste</p>

                    <strong>Descricao</strong>
                    <p>Descricao teste</p>

                    <strong>Valor:</strong>
                    <p>120</p>

                    <button type="button">
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso Teste</p>

                    <strong>Descricao</strong>
                    <p>Descricao teste</p>

                    <strong>Valor:</strong>
                    <p>120</p>

                    <button type="button">
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}