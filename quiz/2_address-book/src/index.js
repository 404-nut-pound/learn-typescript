"use strict";
exports.__esModule = true;
// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts() {
    // TODO: 아래 변수의 타입을 지정해보세요.
    var contacts = [
        {
            name: 'Tony',
            address: 'Malibu',
            phones: {
                home: {
                    num: 11122223333
                },
                office: {
                    num: 44455556666
                }
            }
        },
        {
            name: 'Banner',
            address: 'New York',
            phones: {
                home: {
                    num: 77788889999
                }
            }
        },
        {
            name: '마동석',
            address: '서울시 강남구',
            phones: {
                home: {
                    num: 213423452
                },
                studio: {
                    num: 314882045
                }
            }
        },
    ];
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(contacts); }, 2000);
    });
}
// main
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        // TODO: 아래 변수의 타입을 지정해보세요.
        this.contacts = [];
        this.fetchData();
    }
    AddressBook.prototype.fetchData = function () {
        var _this = this;
        fetchContacts().then(function (response) {
            _this.contacts = response;
        });
    };
    /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
    AddressBook.prototype.findContactByName = function (name) {
        return this.contacts.filter(function (contact) { return contact.name === name; });
    };
    AddressBook.prototype.findContactByAddress = function (address) {
        return this.contacts.filter(function (contact) { return contact.address === address; });
    };
    // home, office, studio
    AddressBook.prototype.findContactByPhone = function (phoneNumber, phoneType) {
        return this.contacts.filter(function (contact) { return contact.phones[phoneType].num === phoneNumber; });
    };
    // findContactByPhone('officce');
    AddressBook.prototype.addContact = function (contact) {
        this.contacts.push(contact);
    };
    AddressBook.prototype.displayListByName = function () {
        return this.contacts.map(function (contact) { return contact.name; });
    };
    AddressBook.prototype.displayListByAddress = function () {
        return this.contacts.map(function (contact) { return contact.address; });
    };
    return AddressBook;
}());
new AddressBook();
