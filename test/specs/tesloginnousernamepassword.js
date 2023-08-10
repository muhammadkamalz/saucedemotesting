const data = require('../pageobjects/datalogin')
const cek = require('../pageobjects/prosescek')

    describe('Login tanpa menggunakan username & password', () => {
        it('Login gagal', async() => {
            await data.open()
            await data.login('','')
            await browser.pause(1000)
            await expect(cek.ceknotifikasi1).toBeExisting()
            await browser.pause(1000)
            await expect(cek.ceknotifikasi1).toHaveTextContaining('Username is required')
        }
        )
    })
