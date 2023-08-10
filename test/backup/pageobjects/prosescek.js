

const halaman = require('./halamanutama');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class teslogin extends halaman {
    /**
     * define selectors using getter methods
     */
    get ceklogo() {
        return $('//div[@class="login_wrapper"]');
    }

    get ceknotifikasi1() {
        return $('//h3[contains(@data-test, "error")]');
    }

    get inventory(){
        return $('#inventory_container');
    }
    get halamanlogin() {
        return $('//div[@class="login-box"]')
    }

    get cart(){
        return $('#cart_contents_container')
    }
    get tombolbar() {
        return $('#react-burger-menu-btn')
    }
    get tombolout() {
        return $('//div[@class="bm-menu"]/nav[@class="bm-item-list"]/a[@id="logout_sidebar_link"]')
    }

    get tomboltambah() {
        return $('//div[@class="inventory_item"]/div[@class="inventory_item_description"]/div[@class="pricebar"]/button[@id="add-to-cart-sauce-labs-bike-light"]')
    }
    get tomboltambah2(){
        return $('//div[@class="inventory_item"]/div[@class="inventory_item_description"]/div[@class="pricebar"]/button[@id="add-to-cart-sauce-labs-backpack"]')
    }

    get tombolremove(){
        return $('//div[@class="inventory_item"]/div[@class="inventory_item_description"]/div[@class="pricebar"]/button[@id="remove-sauce-labs-bike-light"]')
    }
    get tombolremove2(){
        return $('//div[@class="inventory_item"]/div[@class="inventory_item_description"]/div[@class="pricebar"]/button[@id="remove-sauce-labs-backpack"]')
    }

    get removed(){
        return $('//div[@class="inventory_item"]/div[@class="inventory_item_description"]/div[@class="pricebar"]')
    }

    get urutan(){
        return $('//span[@class="select_container"]')
    }
    async tambahbarang(){
        await this.tomboltambah.click()
        await this.tomboltambah2.click()
    }

    async klik (){
        await this.tombolbar.click();
    }

    async logout() {
        await this.tombolout.click();
    }

    get loginlogo() {
        return $('$login-logo')
    }


}

module.exports = new teslogin();
