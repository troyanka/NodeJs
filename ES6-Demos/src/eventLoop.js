
     import color_logger from './utils/color_logger'

     const p = color_logger('eventLoop.js')
     
     
     p.magenta('Hello event Loop !!!');
      
      /*var prizes = ['a', 'b', 'c', 'd'];
        console.log(prizes.length);
        for(var i = 0; i <= prizes.length; i++){
            console.log( prizes[i] );
        }*/

        /*setTimeout( ()=> console.log('hello'), 0 );
        [...'word'].map( str => console.log(str));
        console.log('!');*/

        /*console.log('Kick-of');
        setTimeout ( () => console.log('timeout'), 0)

        Promise.resolve()
            .then( () => console.log('promise 1'))
            .then( () => console.log('promise 2'))
            .then( () => console.log('promise 3'))

        console.log('The End');*/

        /*console.log('Kick-of');
        setImmediate ( () => console.log('setImmediate'), 0)

        Promise.resolve()
            .then( () => console.log('promise 1'))
            .then( () => console.log('promise 2'))
            .then( () => console.log('promise 3'))

        console.log('The End');*/

        /*console.log('Kick-of');
        process.nextTick ( () => console.log('nextTick'), 0)

        Promise.resolve()
            .then( () => console.log('promise 1'))
            .then( () => console.log('promise 2'))
            .then( () => console.log('promise 3'))

        console.log('The End');*/

        const bob = {name: 'Bob'};
        const alice = {name: 'Alice'};
        const foundAt = [bob, alice].findIndex(({name:{length:l}}) => l > 3);

        console.log(foundAt);
