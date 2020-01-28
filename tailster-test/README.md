# Dog Snack Calculator:

You're a developer at an awesome pet startup and the CEO has asked you to help him build a program that will calculate how many dog snacks he needs to take with him when walking his dog, Newton, around London.
Newton is very snack driven: so **for every metre you go uphill, he must be given one snack**. However, **for every metre you go downhill, the dog can store that momentum to eventually walk back up one metre uphill**. **Walking on even ground requires no snacks** because he just kinda glides along. (Newton is a bit weird and defies some laws of physics.) You can assume that the dog starts immediately at the first point in the route and that no snacks are required to bring the dog to the starting point.
To complete this test, we are providing the following REST endpoints:

- `https://infinite-lake-80504.herokuapp.com/api/routes`
- `https://infinite-lake-80504.herokuapp.com/api/routes/{id}`


Each 3D point is an object of 3 items, with the following values: "latitude, longitude and altitude". Every route is guaranteed to have at least one point and can contain up to 100.
Also, to simplify the test, the altitude will always be an integer.

## Requirements:
Given walking routes as an array of 3D points, build a mini-site (preferably in AngularJS v1) that:

- on the home view, displays a list of walking routes that link to a specific walk route view
- calculates and displays how many dog snacks are needed on the specific walk route view
- displays the dog walk route using google maps on the specific walk route view
- allows users to directly view a specific walking route via a URL
You can use the following `Google API KEY: AIzaSyBp7- 48qKl3mat1o4U5zDMP_oLwY2alq8M`

--


###### What went well?

![snack screenshot](https://www.dropbox.com/s/zekrn0re81saagc/tail.png?raw=1)

- I really enjoyed the test;
- I learned how to use better *Angular Google Maps*;
- I am pretty happy with the styles and design;

> Bonus: I wanted to push myself a bit more so I added a feature to calculate the **total distance** covered by Newton for each route:

```
    calculateDistance(): void {
        const latLng: google.maps.LatLng[] = this.markers.map((item) => {
            return new google.maps.LatLng(item.lat, item.lng);
        });
        this.distance = +google.maps.geometry.spherical.computeLength(latLng).toFixed(1);
    }
```

> Bonus 2: I really enjoyed this task so I added a button to set the **current location**:

```
    setCurrentLocation(): void {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.zoom = 18;
            });
        }
    }
```

> Bonus 3: **Error handing template**. You never know what could go wrong

```
<ng-container *ngIf="isError
then error
else response">
</ng-container>

<ng-template #error>
    <div class="container alert alert-danger" role="alert">
        <h4 class="alert-heading">{{ status }} - {{ statusText }}</h4>
        <hr>
        <p class="mb-0">{{ errorMsg }}</p>
    </div>
</ng-template>

<ng-template #response>
    <main class="container">
        <div class="row">
            <section class="col-md-12">
                <div class="row">
                    <div class="col-md-6 col-lg-4 text-center" *ngFor="let route of routes; index as i">
                        <a [routerLink]="['/routes', route.id]">
                            <img src="../../../assets/images/image{{i+1}}.jpg" class="img-fluid img-thumbnail">
                            <button class="btn btn-primary btn-md mt-3 mb-2">{{ route.name }}</button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </main>
</ng-template>


``` 

###### What could be improved?

- Add Marker after calling the `setCurrentLocation()` method;
- Add more unit test
- Add the _autocomplete placeholder_ but I couldn't because of the actual `Google API KEY`


###### What went badly?

- I spent too much time trying to fix unit test: in particulary the one with _ActivatedRoute_
- It took me a while to figure it out calculate the number of snack.


## Development server

Run `npm i && ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
