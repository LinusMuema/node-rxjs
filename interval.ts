import { interval } from 'rxjs';

//Emits a number after every 2 seconds
interval(2000).subscribe(val => console.log(val));

//Output : 0,1,2,3,4....
