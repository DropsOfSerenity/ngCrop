# ngCrop

*WARNING: This library is not released yet, it is highly in flux until first
release.*

ngCrop is an angular library that aims to fill a current hole in the cropping
library landscape. It aims to provide an easy drop in solution to avatar
cropping flow, since this is a use case extremely common to web applications.

## The Goal

When dealing with user avatars, 99% of the time you need a tool for the user to
upload an image and crop it to their liking (most of the time in a square aspect
ratio). Again 99% of the time you either want this image sent to the server, or
you want a Base 64 Data URL back that you can send to the server.

This library aims to make this common use case as simple as possible by
providing an `ngCrop` service.

As a summary the goals I am trying to address here:

* Provide a one step solution similar to facebook/twitter/linkedin's avatar
upload process.
* Provide a solution for avatar upload that launches a modal, handles cropping
and returns a base64 image for the caller to do whatever they want with.
* Allow locked cropping based on aspect ratio with the default being a square,
since this is the most common avatar.
* Tie together technology that makes it easier for this to be a drop in solution
previously we needed to get a modal provider, get a image cropping library,
tie the two together, hook up the base64 image, etc. etc. etc. This library
aims to provide an opinionated but flexible one stop solution for this common
problem.
* The library should be well covered with tests, and integrated with CI, to
ensure dependibility in production environments.

## Usage

```js
ngCrop.show().then(function(croppedImg) {
  // returns a base 64 data uri, easy to send to the server or display.
  $scope.croppedImg = croppedImg;
});
```

## Contributing

Please submit pull requests and I will get to them as soon as I can.