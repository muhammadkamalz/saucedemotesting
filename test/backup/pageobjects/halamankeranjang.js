const halaman = require('./halamanutama');

class keranjang extends halaman {
    get tombolkeranjang() {
        return $('//a[@class="shopping_cart_link"]')
    }
    get tombolkembali() {
        return $('//button[contains(@data-test, "continue-shopping")]')
    }
    
    get tombolcheckout(){
        return $('//button[contains(@data-test,"checkout")]')
    }

    async bukakeranjang(){
        await this.tombolkeranjang.click()
    }

    async checkout() {
        await this.tombolcheckout.click()
    }
    async kembali(){
        await this.tombolkembali.click()
    }
}

module.exports = new keranjang();