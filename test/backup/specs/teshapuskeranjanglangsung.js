const data = require('../pageobjects/datalogin')
const datakeranjang = require('../pageobjects/halamankeranjang')
const cekkeranjang = require('../pageobjects/cekkeranjang.js')

describe('Membuka halaman keranjang', () => {
    it('Halaman keranjang ditampilkan', async() => {
        await data.open()
        await data.login('standard_user', 'secret_sauce')
        await browser.pause(1000)
        
        await datakeranjang.bukakeranjang()
        await browser.pause(1000)

        await expect(cekkeranjang.cart).toBeExisting()
    })
})
describe('Memasukkan Barang kedalam Keranjang', () => {
    it('Barang berhasil dimasukkan & Barang ada didalam keranjang', async() => {
        await datakeranjang.kembali()
        await browser.pause(1000)

        await cekkeranjang.tambahbarang()
        await browser.pause(1000)
        await expect (cekkeranjang.barharga).toHaveTextContaining('Remove')
        await browser.pause(1000)

        await datakeranjang.bukakeranjang()
        await browser.pause(1000)

        await expect(cekkeranjang.isicart).toBeExisting()
    })
})
describe ('Menghapus barang di keranjang melalui halaman utama', ()=> {
    it('Barang berhasil dihapus', async() => {
        await datakeranjang.kembali()
        await browser.pause(1000)

        await cekkeranjang.hapusbaranglangsung()
        await browser.pause(1000)

        await expect(cekkeranjang.barharga).toHaveTextContaining('Add to cart')
    })
})