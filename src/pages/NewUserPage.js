import React, { Component } from 'react';
import { connect } from 'react-redux';
import Utils from '../misc/Utils';
import { Link } from 'react-router-dom';
import AuthActions from '../actions/AuthActions';
const mapReduxStateToProps = reduxState => ({

});

const mapReduxDispatchToProps = {
    registerNewUser: AuthActions.registerNewUser
};

export default connect(mapReduxStateToProps, mapReduxDispatchToProps)(
    class NewUserPage extends Component {
        constructor() {
            super();
            this.state = {
                name: '',
                username: '',
                password: '',
                passwordConfirmation: ''
            }
        }

        handleChange = event => {
            this.setState({
                [event.target.name]: event.target.value
            });
        }

        isFormValid = () => {
            return !Utils.isEmpty(this.state.name) 
            && !Utils.isEmpty(this.state.username) 
            && !Utils.isEmpty(this.state.password) 
            && !Utils.isEmpty(this.state.passwordConfirmation)
            && this.state.password === this.state.passwordConfirmation
        }

        handleSubmit = event => {
            event.preventDefault();
            if(this.isFormValid){
                this.props.registerNewUser({
                    name: this.state.name,
                    username: this.state.username,
                    password: this.state.password
                });
            }
        }
        render() {
            return (
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div style={{ paddingTop: '100px' }}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">UnboxFlix</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Cadastrar Novo Usuário</h6>
                                    <p className="card-text">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-row">
                                                <div className="col-md-12 mb-12">
                                                    <label for="username">Nome</label>
                                                    <input type="text" onChange={this.handleChange} name="name" className={`form-control ${Utils.isEmpty(this.state.name) ? 'is-invalid' : 'is-valid'}`} id="name" required />
                                                    <div className="invalid-feedback">
                                                        Campo Obrigatório
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-12">
                                                    <label for="username">E-Mail</label>
                                                    <input type="email" onChange={this.handleChange} name="username" className={`form-control ${Utils.isEmpty(this.state.username) ? 'is-invalid' : 'is-valid'}`} id="username" required />
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
                                                <div className="col-md-12 mb-12">
                                                    <label for="passwordConfirmation">Confirmação da Senha</label>
                                                    <input type="password" onChange={this.handleChange} name="passwordConfirmation" className={`form-control ${Utils.isEmpty(this.state.passwordConfirmation) || this.state.passwordConfirmation !== this.state.password ? 'is-invalid' : 'is-valid'}`} id="passwordConfirmation" required />
                                                    <div className="invalid-feedback">
                                                        {Utils.isEmpty(this.state.passwordConfirmation) &&
                                                            <>Campo Obrigatório</>
                                                        }
                                                        {this.state.password !== this.state.passwordConfirmation &&
                                                            <>O campo Confirmação da Senha deve ter o mesmo conteúdo do campo Senha</>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary" type="submit" disabled={!this.isFormValid()}>CADASTRAR</button>
                                        </form>
                                    </p>
                                    <Link class="card-link" to={'/login'}>Voltar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
)