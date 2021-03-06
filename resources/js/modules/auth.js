import authApi from '../api/auth/auth.js';

export default {
    state: {
        // the auth state of the user
        loggedIn : false,
        // current logged in user 
        user : {},
    }, /* END OF STATE */

    getters: {
        loggedIn(state){
            return state.loggedIn;
        },

        user(state){
            return state.user;
        },
    },/* END OF GETTERS */

    mutations: {
        setLoggedIn(state, loggedIn){
            state.loggedIn = loggedIn;
        },

        setUser(state, user){
            state.user = user;
        }
    },/* END OF MUTATIONS */

    actions: {
        login({ commit }, credentials){
            return new Promise( (resolve, reject) => {
                authApi.login(credentials)
                    .then( res => {
                        commit('setLoggedIn', true);
                        resolve(res);
                    }).catch( error => {
                        reject(error);
                    });
            });
        },/* END OF LOGIN */


        logout({ commit }){
            return new Promise( (resolve, reject) => {
                authApi.logout()
                    .then( res => {
                        commit('setLoggedIn', false);
                        // set the user
                        resolve(res);
                    }).catch( error => {
                        reject(error);
                    });
            });
        },/* END OF LOGOUT */

        register({ commit }, credentials){
            return new Promise( (resolve, reject) => {
                authApi.register(credentials)
                    .then( res => {
                        commit('setLoggedIn', true);
                        // set the user
                        resolve(res);
                    }).catch( error => {
                        reject(error);
                    });
            });
        },/* END OF LOGOUT */
    },/* END OF ACTIONS */
}