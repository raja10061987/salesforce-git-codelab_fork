// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

system.debug('hello');

List<Id> actidsList = new List<Id>();
actidsList.add('0010l00001X7l5vAAB');
List<Contact> contList = MyContactsListController.getContacts(actidsList);
System.debug('contList: ' + contList);


















