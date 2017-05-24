import {addUser} from './usersHelper'

test('addUser should add user to the list', () => {
    const startUsers = [
        {
            username: 'harru',
            password: 'letmein',
            firstName: 'harminder',
            lastName: 'kaur',
            fullName: 'Harminder Kaur',
            email: 'harminder.kaur@yahoo.com.au'
        }
    ]

    const newUser = [{
                    username: 'pooji',
                    password: 'aloha',
                    firstName: 'Pooja',
                    lastName: 'Sharma',
                    fullName: 'Pooja Sharma',
                    email: 'pooja.sharma@hotmail.com'
                }]

    const expected = [
                {
                    username: 'harru',
                    password: 'letmein',
                    firstName: 'harminder',
                    lastName: 'kaur',
                    fullName: 'Harminder Kaur',
                    email: 'harminder.kaur@yahoo.com.au'
                }, {
                    username: 'pooji',
                    password: 'aloha',
                    firstName: 'Pooja',
                    lastName: 'Sharma',
                    fullName: 'Pooja Sharma',
                    email: 'pooja.sharma@hotmail.com'
                }
            ]

     const result = addUser(startUsers,newUser)     

     expect(result).toEqual(expected);  
})