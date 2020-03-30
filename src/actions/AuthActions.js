export default class AuthActions {

    static registerNewUser = (data) => {
        return dispatch => {
            fetch('http://localhost:8080/api/v1/auth/register-new-user', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
            )
                .then(response => {
                    console.log('Resposta: ', response);
                    if (response.ok) {
                        return dispatch({ type: 'REGISTER', response: {hasError: false} });
                    } else {
                        return dispatch({ type: 'REGISTER', response: {hasError: true} });
                    }
                })
                .catch(function (error) {
                    throw error;
                });

        }
    }
}