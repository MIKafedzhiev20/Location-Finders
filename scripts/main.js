var dataTab = {
    0: 'Bulgaria',
    1: 'Greece',
    2: 'Romania',
    3: 'Macedonia',
    4: 'Serbia',
    5: 'Turkey'
};
function render() {
    var canvas = document.getElementById('appCanvas');
    var context = canvas.getContext('2d');
    var circles = [];
    var theCircle = function(x, y, radius) {
        this.left = x - radius;
        this.top = y - radius;
        this.right = x + radius;
        this.bottom = y + radius;
    };
    var draw = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext) {
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.fillStyle = fillcolor;
        context.fill();
        context.lineWidth = linewidth;
        context.strokeStyle = strokestyle;
        context.stroke();
        
        context.fillStyle = fontcolor;
        context.font = fonttype;
        context.textAlign = textalign;
        
        context.fillText(filltext, x, y);
    };
    var drawCircle = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext, circles) {
        draw(context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext);
        var circle = new theCircle(x, y, radius);
        circles.push(circle);
    };
    drawCircle(context, 500, canvas.height / 2, "white", 100, 5, "white", "#000", "center", "bold 30px Arial", "Bulgaria", circles);
    drawCircle(context, 240, canvas.height - 295, "white", 80, 5, "white", "#000", "center", "bold 30px Arial", "Greece", circles);
    drawCircle(context, 445, 250, "white", 170, 5, "white", "#000", "white", "bold 30px Arial", "Romania", circles);
    drawCircle(context, 240, canvas.height - 520, "white", 50, 5, "white", "#000", "center", "bold 30px Arial", "Macedonia", circles);
    drawCircle(context, 160, canvas.height - 795, "white", 70, 5, "white", "#000", "center", "bold 30px Arial", "Serbia", circles);
    drawCircle(context, 840, canvas.height - 255, "white", 150, 5, "white", "#000", "center", "bold 30px Arial", "Turkey", circles);
    $('#appCanvas').click(function (e) {
        var clickedX = e.pageX - this.offsetLeft;
        var clickedY = e.pageY - this.offsetTop;
        let flag="";
        for (var i = 0; i < circles.length; i++) {
            if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
                if(i==0)
                {
                    flag="Bulgaria";
                    openCloseFlag(flag);
                }
                if(i==1)
                {
                    flag="Greece";
                    openCloseFlag(flag);
                }
                if(i==2)
                {
                    flag="Romania";
                    openCloseFlag(flag);
                }
                if(i==3)
                {
                    flag="Macedonia";
                    openCloseFlag(flag);
                }
                if(i==4)
                {
                    flag="Serbia";
                    openCloseFlag(flag);
                }
                if(i==5)
                {
                    flag="Turkey";
                    openCloseFlag(flag);
                }
            }
        }
    });
}