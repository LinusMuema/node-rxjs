import {from} from 'rxjs'
import {map} from "rxjs/operators";

// @ts-ignore
from([1,2,3,4,5]).pipe(map(val => Math.pow(val, 2)))
.subscribe({
    next: (val) => {console.log(val)}
})

//Output : 1,4,9,16,25

