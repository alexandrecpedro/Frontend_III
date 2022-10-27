import batataGif from './../../../assets/images/batata.gif'
import youtubeImage from './../../../assets/images/youtube-home.png'

export const posts = [
    {
        id: 1,
        author: {
            name: 'Betty S.',
            picture: 'https://i.pinimg.com/564x/64/92/09/6492098fc4d32b1e092cbd38686cf6b2.jpg'
        },
        location: 'São Paulo',
        media: 'https://i.pinimg.com/550x/25/d9/a0/25d9a03d9fa83dafca13be3d953c1a9b.jpg',
        likes: 22,
        description: 'Ele se prendeu',
        comments: [
            {
                author: {
                    name: 'Stephanie J. Williams'
                },
                text: '🖤💜💚💛'
            }
        ]
    },
    {
        id: 2,
        author: {
            name: 'Stephanie J. Williams',
            picture: 'https://i.pinimg.com/564x/1b/8f/8e/1b8f8eac32ef5e3367748182af89cb35.jpg'
        },
        location: 'Rio Grande do Sul',
        media: 'https://i.pinimg.com/564x/7d/0e/2d/7d0e2dff94eca2b75b2de47e5e3e8ef3.jpg',
        likes: 201,
        description: 'Miar :(',
        comments: [
            {
                author: {
                    name: 'Betty S.'
                },
                text: 'Ah não, o gato cowboy está triste :('
            }
        ]
    },
    {
        id: 3,
        author: {
            name: 'Alfredo J. Henderson',
            picture: 'https://i.pinimg.com/564x/f4/dd/6d/f4dd6d22cfb99aa809d1b39da37c14e3.jpg'
        },
        location: 'Maranhão',
        media: 'https://i.pinimg.com/564x/78/be/0b/78be0b6c91c6e0c32ec11157bac14a5f.jpg',
        likes: 44,
        description: 'Tem alguma coisa de errado com o Claudio',
        comments: [
            {
                author: {
                    name: 'Betty S.'
                },
                text: 'Acho que ele precisa de um exorcismo'
            },
            {
                author: {
                    name: 'Stephanie J. Williams'
                },
                text: 'Alguém chama um padre'
            }
        ]
    },
    {
        id: 4,
        author: {
            name: 'Jose M. Ponds',
            picture: 'https://i.pinimg.com/564x/bb/c6/be/bbc6be66e52c44c738a3f8afbafbedba.jpg'
        },
        location: 'Brasília',
        media: 'https://i.pinimg.com/564x/9b/b8/45/9bb8453a09698400af77580ab4c9df1d.jpg',
        likes: 72,
        description: '🐱🍷',
        comments: [
            {
                author: {
                    name: 'Alfredo J. Henderson'
                },
                text: 'Alguém não está curtindo muito a festa'
            }
        ]
    }
]