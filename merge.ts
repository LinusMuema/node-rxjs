import {interval, merge} from "rxjs";
import {mapTo} from "rxjs/operators";

//emits every second
const ones = interval(1000);
//emit every 2 seconds
const twos = interval(2000);

merge(
    ones.pipe(mapTo("Ones")),
    twos.pipe(mapTo("Twos"))
).subscribe(val => console.log(val));

//Output : "Ones", "Twos", "Ones, "Ones", "Twos", "Ones", "Ones"...
