const data = require('../pageobjects/datalogin')
const cek = require('../pageobjects/prosescek')


describe('Login tanpa menggunakan password', () => {
    it('Login gagal & menampilkan error "Password is required"', async() => {
        await data.open()
        await data.login('standard_user','')
        await browser.pause(1500)
        await expect(cek.ceknotifikasi1).toBeExisting()

        await browser.pause(1000)
        await expect(cek.ceknotifikasi1).toHaveTextContaining('Password is required');
    })
})