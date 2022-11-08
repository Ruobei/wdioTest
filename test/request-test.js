const expect = require('chai').expect
describe('somethings', function () {
    it("request test", async () => {
        browser.url("https://www.amazon.in/")
        await browser.setupInterceptor(); 

        let input = await $("#twotabsearchtextbox")
        input.setValue("mobile")
        await browser.pause(3000)

        await browser.expectRequest("GET", "/api/2017/suggestions", "200")

        let searchSuggestions = await browser.getRequest(
            "GET",
            "https://completion.amazon.in/api/2017/suggestions"
        )

        console.log("Response Headers", searchSuggestions)
        expect(searchSuggestions).have.length.above(0)
    })
})