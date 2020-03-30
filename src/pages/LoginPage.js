import React, { Component } from 'react';
import { connect } from 'react-redux';
import Utils from '../misc/Utils';
import { Link } from 'react-router-dom';
const mapReduxStateToProps = reduxState => ({

});

const mapReduxDispatchToProps = {

};

export default connect(mapReduxStateToProps, mapReduxDispatchToProps)(
    class LoginPage extends Component {
        constructor() {
            super();
            this.state = {
                username: '',
                password: ''
            }
        }

        handleChange = event => {
            this.setState({
                [event.target.name]: event.target.value
            });
        }

        handleSubmit = event => {
            event.preventDefault();
        }
        render() {
            return (
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div style={{ paddingTop: '100px' }}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">UnboxFlix</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Login</h6>
                                    <p className="card-text">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-row">
                                                <div className="col-md-12 mb-12">
                                                    <label for="username">E-Mail</label>
                                                    <input type="text" onChange={this.handleChange} name="username" className={`form-control ${Utils.isEmpty(this.state.username) ? 'is-invalid' : 'is-valid'}`} id="username" required />
                                                    <div className="invalid-feedback">
                                                        Campo Obrigatório
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-12">
                                                    <label for="password">Senha</label>
                                                    <input type="password" onChange={this.handleChange} name="password" className={`form-control ${Utils.isEmpty(this.state.password) ? 'is-invalid' : 'is-valid'}`} id="password" required />
                                                    <div className="invalid-feedback">
                                                        Campo Obrigatório
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary" type="submit">ENTRAR</button>
                                        </form>
                                    </p>
                                    <Link class="card-link" to={'/new-user'}>Não é cadastrado? Cadastre-se aqui</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
)