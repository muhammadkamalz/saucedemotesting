const data = require('../pageobjects/datalogin')
const datakeranjang = require('../pageobjects/halamankeranjang')
const cek = require('../pageobjects/prosescek')
const cekkeranjang = require('../pageobjects/cekkeranjang.js')
const out = require('../pageobjects/checkout')

describe('Checkout barang tanpa nama depan', () => {
    it('Checkout gagal & muncul notifikasi "First Name is Required"', async () => {
        await data.open()
        await data.login('standard_user', 'secret_sauce')

        await cekkeranjang.tambahbarang()
        await browser.pause(1000)

        await datakeranjang.bukakeranjang()
        await browser.pause(1000)

        await datakeranjang.checkout()
        await browser.pause(1000)
        
        await out.lanjutcheckout ('Budi','Wijaya','')
        await browser.pause(1000)

        await expect (cek.ceknotifikasi1).toHaveTextContaining('Postal Code is required')
        await browser.pause(1000)
    })
})