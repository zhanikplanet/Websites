class AuthFactoryClass {
    /**
     * @type {boolean} Boolean to specity if user is logged in
     */
    loggedIn = false;
    localStorageIndex = 'authdata';

    // Persistent state of state manager
    init() {
        
        const data = localStorage.getItem(this.localStorageIndex);
        console.log('Init!', data);
        if (!data) return;
        try {
            const parsedData = this.fromJson(data);
            this.loggedIn = parsedData.loggedIn;
            console.log('parsedData', parsedData);
        }
        catch(e) {
            console.error('Cant parse locals', e);
            localStorage.removeItem(this.localStorageIndex);
        }
    }

    syncData() {
        localStorage.setItem(this.localStorageIndex, this.toJson());
    }

    toJson() {
        return JSON.stringify({
            loggedIn: this.loggedIn
        });
    }
    /**
     * 
     * @param {string} rawData 
     * @returns {{loggedIn: boolean} | null}
     */
    fromJson(rawData) {
        try {
            return JSON.parse(rawData);
        }
        catch(e) {
            return null;
        }
    }


    signIn() {
        // bla bla
        console.log('Signing user in!');
        this.loggedIn = true;
        this.syncData();
    }
    logout() {
        this.loggedIn = false;
        this.syncData();
    }
}

const AuthFactory = new AuthFactoryClass();
AuthFactory.init();