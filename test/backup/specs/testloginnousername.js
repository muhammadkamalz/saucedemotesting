const data = require('../pageobjects/datalogin')
const cek = require('../pageobjects/prosescek')


describe ('Login tanpa menggunakan username', () => {
    it('Login gagal & menampilkan error "Username is required', async () => {
        await data.open()
        await data.login('','secret_sauce')

        await browser.pause(1500)
        await expect(cek.ceknotifikasi1).toBeExisting()

        await browser.pause(1000)
        await expect(cek.ceknotifikasi1).toHaveTextContaining('Username is required')
    })
})