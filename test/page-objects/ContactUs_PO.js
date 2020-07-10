var config = require('../../config/main-config')
var dataGenerators = require('../../utils/dataGenerators')
import Base_PO from './Base_PO'

class ContactUs_PO extends Base_PO {

    open() {
        super.open("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    }

    get firstName() {
        return $('//*[@name="first_name"]');
    }

    get lastName() {
        return $('//*[@name="last_name"]');
    }

    get emailAddress() {
        return $('//*[@name="email"]');
    }

    get comments() {
        return $('//*[@name="message"]');
    }

    get submitButton() {
        return $('//*[@value="SUBMIT"]');
    }

    get successfulContactHeader() {
        return $("//div[@id='contact_reply']/h1");
    }

    setFirstName(firstname){
        this.firstName.waitForDisplayed(5000);
        this.firstName.setValue(firstname);    
    }

    setLastName(lastname){
        this.lastName.waitForDisplayed(5000);
        this.lastName.setValue(lastname);   
    }

    setEmail(email){
        this.emailAddress.waitForDisplayed(5000);
        this.emailAddress.setValue(email);  
    }

    setComments(comments){
        this.comments.waitForDisplayed(5000);
        this.comments.setValue(comments);  
    }

    submit(){
        this.submitButton.waitForDisplayed(5000);
        this.submitButton.click();    
    }

    getSuccessfulContactHeader(){
        this.successfulContactHeader.waitForDisplayed(5000);
        return this.successfulContactHeader.getText();
    }

    submitInformation() {
        this.setFirstName(config.firstName);
        this.setLastName(config.lastName);
        this.setEmail(dataGenerators.generateRandomEmailAddress());
        this.setComments(dataGenerators.generateRandomString());
        this.submit();
        expect(this.getSuccessfulContactHeader()).to.contain('Thank You for your Message!');
    }


}

export default new ContactUs_PO()