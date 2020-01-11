let number = max (5, 10);
console.log(number);

function max (a, b){
    // if (a > b) return a;
    // return b;

    return (a > b ) ? a:b;
}




function isLandscape(width, height) {
    
    if (width > height) return true;

    else if (width = height)
    console.log('Boom');

    else if (width < height) return false;
    return(width > height);
}
console.log(isLandscape(700, 600));




const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
    return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz'
    
    if (input % 3 === 0)
    return 'Fizz';
    
    if (input % 5 === 0)
    return 'Buzz'
    
    return input;
};

checkSpeed(77);

function checkSpeed(speed) {
    const speedLimit =70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint) {
        console.log('OK');
        return;
    }
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else 
        console.log('Points', points);
    }



showNumbers(20);


function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        // if (i % 2 === 0) console.log(i, 'EVEN');
        // else console.log(i, 'ODO');

        const message = (i % 2 === 0 ) ? 'EVEN' : 'ODO'
        console.log(i, message);
    }
}




const array = [1,undefined,2,4,'',3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
       if(value)
       count++;
    return count;
}



const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for(let key in obj)
    {
       if(typeof obj[key] === 'string')
       console.log(key, obj[key]);
    }
};


console.log(sum(100));

function sum(limit) {
    let sum = 0;

    for(let i = 0; i <= limit; i++)
      if (i % 3 === 0 || i % 5 === 0)
        sum += i;

        return sum;
}


const marks = [80, 80, 50];

console.log(caculateGrade(marks));

function caculateGrade(marks) {
    const average = calculateAverage(marks)

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';

}

function calculateAverage(array) {
    let sum = 0;
    for ( let value of array)
        sum += value;
    let average = sum / array.lenght;

}




showStars(2);

function showStars(rows) {
 for (let row = 1; row <= rows; row++){
     let pattern = '';
     for (let i = 0; i < row; i++)
     pattern += '*';
     console.log(parent);
 }
}




showPrimes(10);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) 
        if (isPrime(number)) console.log(number);
}

function isPrime(number){
    
    for (let factor = 2; factor < number; factor++) 
        if (number % factor === 0) 
            return false
    return true;
};
