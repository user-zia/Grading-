/* Garding  System */
let total= 850
let obtained = 637
let per = ( obtained / total ) * 100 ;
console.log(per);

if (per >= 90 && per < 100 )  {
     console.log( 'grade is A+') ;
}
else if (per >= 80 && per < 90  ) { 
    console.log('grade is A1') ;
} 
else if (per >= 70 && per <80  ) { 
    console.log('grade is A') ;
} 
else if (per >= 60 && per < 70 )  {
    console.log('grade is B') ;
}
else if( per >=50 && per < 60  ) {
    console.log('Grade is C');
}
else if (per >=40 && per <50 ) {
 console.log ('Grade is D');
}
else if( per >=30 && per < 40 ){
    console.log('Grade is E')
}
// else {
//     console.log ('You are FAIL') ;
// } 