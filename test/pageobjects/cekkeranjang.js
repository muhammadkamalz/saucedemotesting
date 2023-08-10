const halaman = require('./halamanutama');

class cekkeranjang extends halaman {
    get cart() {
        return $('.cart_list')
    }

    get tambahbarang1(){
        return $('//button[contains(@data-test, "add-to-cart-sauce-labs-backpack")]')
    }

    get tambahbarang2(){
        return $('//button[contains(@data-test, "add-to-cart-sauce-labs-bike-light")]')
    }

    get barharga(){
        return $('//div[@class="pricebar"]')
    }

    get isicart() {
        return $('//div[@class="cart_item"]')
    }
    get remove1(){
        return $('//button[contains(@data-test, "remove-sauce-labs-backpack")]')
    }

    get remove2(){
        return $('//button[contains(@data-test, "remove-sauce-labs-bike-light")]')
    }

    get cartterhapus(){
        return $('//div[@class="removed_cart_item"]')
    }

    async tambahbarang() {
       await this.tambahbarang1.click()
       await this.tambahbarang2.click()
    }

    async hapusbarang1 (){
        await this.remove1.click()
    }

    async hapusbarang2() {
        await this.remove2.click()
    }

    async hapusbaranglangsung() {
        await this.remove1.click()
        await this.remove2.click()
    }
}

module.exports = new cekkeranjang();