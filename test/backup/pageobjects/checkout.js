
const halaman = require('./halamanutama');

class checkout extends halaman {
    get namadepan() {
        return $('#first-name')
    }

    get namabelakang(){
        return $('#last-name')
    }

    get kodepos(){
        return $('#postal-code')
    }   

    get formcheckout(){
        return $('//div[@id="checkout_info_container]')
    }

    get submit () {
        return $('input[type="submit"]')
    }

    get ringkasancheckout() {
        return $('#checkout_summary_container')
    }
    get cekselesaicheckout(){
        return $('#checkout_complete_container')
    }

    get tombolbatalcheckout(){
        return $('//button[contains(@data-test, "cancel")]')
    }

    get tombolselesaicheckout(){
        return $('//button[contains(@data-test, "back-to-products")]')
    }
    get tomboltamatcheckout(){
        return $('//button[contains(@data-test, "finish")]')
    }

    async lanjutcheckout(namadepan,namabelakang,kodepos){
        await this.namadepan.setValue(namadepan);
        await this.namabelakang.setValue(namabelakang);
        await this.kodepos.setValue(kodepos);
        await this.submit.click();
    }

    async tidakcheckout(){
       await this.tombolbatalcheckout.click()
    }

    async selesaicheckout() {
    await this.tombolselesaicheckout.click()
    }
    async tamatcheckout(){
        await this.tomboltamatcheckout.click()
    }
}

module.exports = new checkout()