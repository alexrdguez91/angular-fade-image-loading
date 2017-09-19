# Angular Fade Image Loading
======
> This is a directive for AngularJS to show a progressive image loading as Medium of Instagram does.

# Demo
[Live demo on CodePen](https://codepen.io/juanmanuelromera/pen/bgovEV)

## Install

```shell
bower install angular-fade-image-loading
```

# Usage
We injected the `ngFadeImgLoading` module and added the directive file to your `html` files.

### Angular
```js
  angular.module('app', [ 'ngFadeImgLoading' ]);
```

### HTML
Add `<script>` to your code:
```html
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/angular-fade-image-loading/angular-fade-image-loading.min.js"></script>
```

Add a `fade-img-loading` element to your html:
```html
<div>
  <fade-img-loading blur="/image/small-image.jpg" image="/image/real-image.jpg" />
</div>
```

And add this in your application style:
```
@-webkit-keyframes imageBlur {
    0% {
        -webkit-filter: blur(5px);
    }
    50% {
        -webkit-filter: blur(2px );
    }
    100% {
        -webkit-filter: blur(0px );
    }
}

@keyframes imageBlur {
    0% {
        -webkit-filter: blur(5px);
    }
    50% {
        -webkit-filter: blur(2px);
    }
    100% {
        -webkit-filter: blur(0px);
    }
}

.blur {
    -webkit-filter: blur(5px);
}

.img-show {
    display: block;
    -webkit-animation-name: imageBlur;
    animation-name: imageBlur;
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
}

.img-hide {
    display: none;
}
```

# Params

|Param      |Type   |Required |Default |Details |
|-----------|-------|---------|--------|--------|
|blur     	| url  	|Yes      |none    | A small version of the source image |
|image   	| url  	|Yes  	  |none    | The source image |
