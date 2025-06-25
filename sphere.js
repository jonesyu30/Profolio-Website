
class Sphere{
    constructor(x, y, radius, color) {
        this.div = document.createElement("div");
        this.div.className = "circle";
        this.div.style.left = x + "vw";
        this.div.style.top = y + "vh";
        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
        this.div.style.width = radius + "px";
        this.div.style.height = radius + "px";
        
        // dim color according to the radius
        // assuming color is in the format #RRGGBB
        // convert color to rgba
        var dim = -Math.floor(radius / 4);
        var r = Math.floor(parseInt(color.slice(1, 3), 16) - dim);
        var g = Math.floor(parseInt(color.slice(3, 5), 16) - dim);
        var b = Math.floor(parseInt(color.slice(5, 7), 16) - dim);
        var a = 1; // opacity
        // ensure values are within 0-255 range
        r = Math.max(0, Math.min(255, r));
        g = Math.max(0, Math.min(255, g));
        b = Math.max(0, Math.min(255, b));
        // color = `rgba(${r}, ${g}, ${b}, 1)`;
        // var dim = -Math.floor(radius / 4);
        // var r = Math.floor(parseInt(color.slice(5, 8)) - dim);
        // var g = Math.floor(parseInt(color.slice(10, 13)) - dim);
        // var b = Math.floor(parseInt(color.slice(15, 18)) - dim);
        // var a = 1;
        var color = "rgba(" + r + "," + g + "," + b + "," + a + ")";
        this.div.style.backgroundColor = color;

        this.radius = radius;
        this.div.style.zIndex = Math.floor(this.radius);
        this.update();
        Sphere.SPHERES.push(this);
        return this;
    }

    update(){
        this.div.style.transform = `translate(${this.x - this.startX}vw, ${this.y - this.startY}vh)`;
        // this.div.style.left = this.x + "vw";
        // this.div.style.top = this.y + "vh";
        this.div.style.zIndex = -this.radius;
    }
    move(y) {
        this.y = this.startY+y/4000*this.radius;

        // Wrap the position properly within 0 to 100 using modulo
        this.y = (this.y + 110 + 10) % 110-10
        
        this.update();
    }
}
Sphere.SPHERES = [];
Sphere.SPHERES.scroll = function(distance) {
    Sphere.SPHERES.forEach(function(sphere) {
        sphere.move(distance);
    });
}

// Create background spheres
function createSphere() {
    const root = document.documentElement;
    const rootStyles = getComputedStyle(root);
    const color = rootStyles.getPropertyValue('--primary-color');
    console.log(color)
    var sphere = new Sphere(Math.random() * 110, Math.random() * 110, Math.random() * 150 + 10, color);
    document.getElementById("background").appendChild(sphere.div);
}

for (var i = 0; i < 10; i++)
    createSphere();

// on scroll, move the spheres
window.addEventListener("scroll", function() {
    // Get the scroll position
    var scrollPosition = window.scrollY || window.pageYOffset;
    Sphere.SPHERES.scroll(-scrollPosition);
});