import addUser from './usersReducer'

test('addUser should add user to the list', () => {
    const startUsers = [
        {
            username: 'harminder.kaur@yahoo.com.au',
            password: 'letmein',
            firstName: 'harminder',
            lastName: 'kaur',
            fullName: 'Harminder Kaur',
            email: 'harminder.kaur@yahoo.com.au'
        }
    ]

    const newUser = {
                    username: 'pooja.sharma@hotmail.com',
                    password: 'aloha',
                    firstName: 'Pooja',
                    lastName: 'Sharma',
                    fullName: 'Pooja Sharma',
                    email: 'pooja.sharma@hotmail.com'
                }

    const expected = [
                {
                    username: 'harminder.kaur@yahoo.com.au',
                    password: 'letmein',
                    firstName: 'harminder',
                    lastName: 'kaur',
                    fullName: 'Harminder Kaur',
                    email: 'harminder.kaur@yahoo.com.au'
                }, {
                    username: 'pooja.sharma@hotmail.com',
                    password: 'aloha',
                    firstName: 'Pooja',
                    lastName: 'Sharma',
                    fullName: 'Pooja Sharma',
                    email: 'pooja.sharma@hotmail.com'
                }
            ]
     var action = {
         type: 'ADD_USER',
         users: newUser
     }
     const result = addUser(startUsers,action)     

     expect(result).toEqual(expected);  
})