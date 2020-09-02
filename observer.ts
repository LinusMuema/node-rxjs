import {Observable} from 'rxjs'

const observable = new Observable(subscriber => {
    subscriber.next("Hello,")
    subscriber.next("My name is...")
    subscriber.next("Linus :)")
    subscriber.complete()
})

observable.subscribe({
    next: x =>  {console.log(x)},
    error: err => {console.log("Error : "+err)},
    complete: () => {console.log("Done...")}
})
