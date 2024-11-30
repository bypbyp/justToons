
export default {
    home: {
        path:'/',
        controller:'homeController' 
    },
    currentPath: {
        path: '',
        controller: ''
    },
    rickMorty: {
        path: '/rickMorty',
        controller:'rickMortyController'
    },
    singleCharacter: {
        path:'/c/\[0-9]+',
        controller: 'singleController'
    }
};