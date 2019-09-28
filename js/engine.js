
var Engine =  (function test(global) {
   
    
     var doc = global.document,
     win = global.window,

        canvas = document.createElement('canvas'),
        
        
        ctx = canvas.getContext('2d'),
        lastTime;
    canvas.width = 505;
    canvas.height = 606;
    canvas.setAttribute("class","canvas");
    document.body.appendChild(canvas);
    
   
    function main() {
        
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        update(dt);
        render();

        
        lastTime = now;

       
        win.requestAnimationFrame(main);
    }

   
    function init() {
        lastTime = Date.now();
        main();
    }

    
    function update(dt) {
        updateEntities(dt);
        checkCollisions();
    }
    

   
    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
        
    }

    
    function render() {
        
        var rowImages = [
                'images/water-block.png',   // Top row is water
                'images/stone-block.png',   // Row 1 of 3 of stone
                'images/stone-block.png',   // Row 2 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                'images/grass-block.png',   // Row 1 of 2 of grass
                'images/grass-block.png',    // Row 2 of 2 of grass
            ],
            numRows = 6,
            numCols = 5,
            row, col;
         


        ctx.clearRect(0,0,canvas.width,canvas.height);
      
       
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
               
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        renderEntities();
    }

    
    function renderEntities() {
        
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

        player.render();
        selector.render();
        checkCollisions() 
            
        
            
    }

    function checkCollisions(){
        allEnemies.forEach(enemy => {
           if((player.y - enemy.y  == 80 && player.y - enemy.y >-3 || player.y == 150) && (player.x - enemy.x <90 && player.x - enemy.x >-50 )){
                reset();
                
                
           }
           
           
        });
    
    }

    
        


    
   
    


    
    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-horn-girl.png',
        'images/char-boy.png',
        'images/Selector.png',
        'images/char-cat-girl.png',
        'images/char-pink-girl.png',
        'images/char-princess-girl.png',
        'images/char-eleven.png',
        'images/char-princess-girl.png',
        'images/char-iron.png',
        'images/char-arya.png',
        'images/char-spong.png',
                            
        
        
    ]);
    Resources.onReady(init);

    global.ctx = ctx;

})(this);
