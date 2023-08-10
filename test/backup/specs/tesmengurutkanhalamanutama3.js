const data = require('../pageobjects/datalogin')
const cek = require('../pageobjects/prosescek')



describe('Mengurutkan dari z - a', () => {
    it('Berhasil terurut dari z - a', async() => {
        await data.open()
        await data.login('standard_user', 'secret_sauce')

        await browser.pause(1500)
        await expect(cek.inventory).toBeExisting()
        
        await data.pilihtinggi()
        await browser.pause(1000)

        await expect(cek.urutan).toHaveTextContaining('high to low')
    })
})