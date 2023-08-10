

const halaman = require('./halamanutama');

class halamanlogin extends halaman {

    get username () {
        return $('#user-name');
    }

    get password () {
        return $('#password');
    }

    get submit () {
        return $('input[type="submit"]');
    }

    get keranjang() {
        return $('//div[@id="shopping_cart_container"]/a[@class="shopping_cart_link"]')
    }

    get urut(){
        return $('//select[contains(@data-test, "product_sort_container")]')
    }

    async bukakeranjang() {
        await this.keranjang.click();
    }

    async login (username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.submit.click();
    }

    async pilihza(){
        await this.urut.selectByAttribute('value', 'za')
    }

    async pilihrendah(){
        await this.urut.selectByAttribute('value', 'lohi')
    }

    async pilihtinggi(){
        await this.urut.selectByAttribute('value', 'hilo')
    }

    open () {
        return super.open('');
    }
}

module.exports = new halamanlogin();
