const data = require('../pageobjects/datalogin')
const cek = require('../pageobjects/prosescek')

    describe ('Login dengan memasukkan username & password', () => {
        it('Halaman Utama ditampilkan', async() => {
            await data.open()
            await data.login('standard_user', 'secret_sauce')

            await browser.pause(1500)
            await expect(cek.inventory).toBeExisting()
        })
    })





