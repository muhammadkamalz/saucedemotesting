const data = require('../pageobjects/datalogin')
const datakeranjang = require('../pageobjects/halamankeranjang')
const cek = require('../pageobjects/prosescek')
const cekkeranjang = require('../pageobjects/cekkeranjang.js')
const out = require('../pageobjects/checkout')


describe('Checkout barang Sampai selesai', () => {
    it('Berhasil CHeckout', async () => {
        await data.open()
        await data.login('standard_user', 'secret_sauce')

        await cekkeranjang.tambahbarang()
        await browser.pause(1000)

        await datakeranjang.bukakeranjang()
        await browser.pause(1000)

        await datakeranjang.checkout()
        await browser.pause(1000)

        await out.lanjutcheckout ('Budi','Wijaya','14045')
        await browser.pause(1000)

        await expect (out.ringkasancheckout).toBeExisting()
        await browser.pause(1000)

        await out.tidakcheckout()
        await browser.pause(1000)
        await expect(cek.inventory).toBeExisting()
    })
})
