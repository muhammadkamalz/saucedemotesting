const data = require('../pageobjects/datalogin')
const datakeranjang = require('../pageobjects/halamankeranjang')
const out = require('../pageobjects/checkout')

describe('Checkout barang tanpa ada barang didalam keranjang', () => {
    it('Halaman checkout tidak terbuka', async() => {
        await data.open()
        await data.login('standard_user', 'secret_sauce')

        await datakeranjang.bukakeranjang()
        await browser.pause(1000)
        
        await datakeranjang.checkout()
        await browser.pause(1000)
        await expect(out.formcheckout).not.toBeExisting()
    })      
})