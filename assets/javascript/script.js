  /**
 * Add a navigation section to the DOM
 */
   const navSidebar = `

   <h1>JARED MASON</h1>
   <h2><a onclick="filterSelection('all')" class="button header active">PORTFOLIO</a></h2>
   <p><a onclick="filterSelection('game')" class="button subheader">GAME DESIGN</a>
   <a onclick="filterSelection('2DArt')" class="button subheader">2D ART</a>
   <a onclick="filterSelection('3DArt')" class="button subheader">3D ART</a>
   <a onclick="filterSelection('HTML')" class="button subheader">HTML</a>
   <a onclick="filterSelection('video')" class="button subheader">VIDEOS</a><p/>

   <h2> <a onclick="showAboutMe()" class="button header">ABOUT ME</a></h2>

`;

document.querySelector(".sidenav").innerHTML = navSidebar;




const journeyWest = `
            <div class="content justify" >
                <br><br>
                <h3>The Journey West</h3>

                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/378941177?color=ffffff&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                <br>
                <p>Blender animation showcasing a bull&#039;s long journey to a new life.<br />
                <br />
                The Journey West aims to compare the trip along the Oregon Trail with the harsh reality of everyday life. 
                It does this by telling the tale of a lone bull who&rsquo;s only job was to pull a wagon westward. 
                He travels through many different harsh environments until finally reaching the destination. 
                At the end, when the bull finally believes he is given a chance to rest and enjoy his new, &ldquo;better&rdquo; life on the west coast, the bull is killed. 
                He has now served his purpose and is now only useful as food.  <br>
                This small look into the bull&rsquo;s life aims to parallel a depressed take on life itself. 
                Travelling along a monotonous journey only to be rewarded with death at the end. 
                The way the bull&#039;s head remains fixed in the center aims to show a lack of emotion and responsiveness. 
                Similar to someone who is merely coasting through life, hoping it will get better, yet never putting in the effort to bring about the change themselves.<br />
                <br />
                2019, Blender</p>
                <br />
            </div>
`;

const landscapeIllustrations = `
      <div class="content justify" >
      <br /><br />

      <h3>Landscape Illustrations</h3>

      <img src="images/bookCoralReef.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Great Barrier Reef"><br />
      <img src="images/bookIceBergs.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Arctic Sea Ice"><br />
      <img src="images/bookTrashOcean.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Pacific Ocean"><br />
      <img src="images/bookBeachTrash.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Galapagos Islands"><br />
      <img src="images/bookMountEverest.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Mount Everest"><br />
      <img src="images/bookBoatLake.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Aral Sea"><br />
      <img src="images/bookEverglades.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Everglades"><br />
      <img src="images/bookJungle.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Amazon Rainforest"><br />
      <p>
      These illustrations were created as part of a larger book project.
      The book showcased many places in nature that humans have polluted or destroyed.
      Each place is first described as it once was at its peak, then the illustration of how it is now after being touched by mankind.<br />
      <br />
      The full book can be found as a pdf below.
      </p>
      <form method="get" action="pages/TheEbbingEcosystem.pdf">
      <button type="submit">The Ebbing Ecosystem</button>
      </form>
      <br />
      <p>2020, Adobe Illustrator and Adobe InDesign</p>
      <br>
      </div>
`;

const thesisPrototype = `
      <div class="content justify" >
      <br /><br />

      <h3>An Escape</h3>
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/703152349?color=ffffff&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      <p>
      This game was created as my senior thesis project at Penn State University.
      <br><br>
      An Escape follows the imagination of a young child trying to escape reality. 
      They recently moved to a new town after their father's unexpected death and are now experiencing the combined pressures of an overprotective mother and a new school. 
      To cope, they have retreated into their imagination, where everything is depicted by a more fantastical representation of itself. 
      <br><br>
      In order to ensure the game could act as an escape from reality for both the main character and the player, the gameplay itself offers a fun experience focused on combat and exploration. 
      Using the Metroidvania genre allowed me to showcase character progression through gameplay focused ways like unlockable powerups while offering the player momentary relief from the real world.
      <br><br>
      Below you can find the full documentation and a link to download the game itself.

      </p>
      <br/><br/>
      <form method="get" action="pages/EscapeDesignDocument.pdf">
          <button type="submit">Design Document</button>
      </form>
      <br/><br/>

      <iframe frameborder="0" src="https://itch.io/embed/1303138?linkback=true&amp;border_width=0&amp;bg_color=222222&amp;fg_color=d6d6d6&amp;link_color=E4CF6B&amp;border_color=333333" width="550" height="165"><a href="https://shadienigmar.itch.io/an-escape">An Escape by ShadiEnigmar</a></iframe>

      <br><br>

      <p>2021, Unity and Adobe Illustrator</p>
      <br>
      </div>
`;

const blenderScenes = `
          <div class="content justify" >
                <br /><br />

                <h3>3D Blender Scenes</h3>
			
                <img src="images/SceneCactus.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Cactus Scene"><br />
                <img src="images/SceneWhale.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Underwater Whale Scene"><br />
                <img src="images/SceneSink.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Bathroom Sink Scene"><br />
                <img src="images/SceneBrushCloseup.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="HairBrush Closeup"><br />
                <img src="images/SceneLighting.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Glowing Mushroom Scene"><br />
                <img src="images/SceneDesk.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Desk Scene"><br />
                
                <p>
                Modeled and rendered to advance skills within blender.<br />
                <br />
                2019 - 2021, Blender</p>
                <br>
            </div>
`;

const beanMan = `
        <div class="content justify" >
        <br /><br />

        <h3>Bean Man</h3>
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/453774892?color=ffffff&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        <p>Animation of a &quot;Bean Man&#039;s&quot; long trip to work. <br />
        <br />
        Bean Man was created to highlight the monotony of everyday working life. 
        The slow motions of the main character contrast against the quick movements of the camera. 
        This highlights the reluctance in his actions as he drags himself to work.
        At the end, the viewer can discover that the main character is working to produce this very animation.
        <br />
        <br />
        2019, Adobe Animate</p>
        <br>
        </div>
        </div>
`;

const cagedBird = `
            <div class="content justify" >
                <br /><br />

                <h3>Caged Bird Never Learns</h3>
                
                <img src="images/cagedBird.jpg" class="image2 featured" style="display:inline;left:0%;width:45%" onclick="onClick(this)" alt="Caged Bird Never Learns">
                
                <video width="45%" autoplay loop><source src="images/cagedBirdAnimation.webm" type="video/webm">Caged Bird Never Learns Animation.</video><br />
                <p>
                This image showcases a drinking bird toy who has been placed inside a cage. 
                This toy is designed to "drink" forever. 
                Because this bird is destined to repeat the same task over and over again, he will never learn and will be trapped at this point in life forever.
                The image was then animated to better showcase the effect.
                <br />
                <br />
                2019, Adobe Illustrator and Adobe Animate</p>
                <br>
            </div>
`;

const catRotoscope = `
        <div class="content justify" >
        <br /><br />

        <h3>Cat Rotoscope</h3>
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/305279641?color=ffffff&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        <p>Rotoscoped video of a cat jumping. Footage originated from two separate videos.<br />
        <br />
        2018, Adobe After Effects</p>
        <br>
        </div>
`;

const conquest = `
      <div class="content justify" >
                <br /><br />

                <h3>Conquest</h3>
			
			<img src="images/GameCoverCropped.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Conquest"><br />
			
                <p>
                Mockup video game cover designed based on a study of major trends in the gaming industry.
                The study discovered that competitive online multiplayer games remained popular over the longest periods of time.
                Conquest acts as a combination of the Battle Royale and MOBA genres, the two most popular competitive game genres at the time.
                The game took loot collecting and large player counts from Battle Royale games and combined it with teamplay centered around objectives and base defense taken from MOBAs.
                The cover also aims to imitate that of popular games, with the main mascot character striking a pose on the front in an environment from the game. 
                <br />
                <br />
                2019, Blender and Adobe Illustrator</p>
                <br>
            </div>
`;

const dayAtWork = `
      <div class="content justify" >
      <br /><br />

      <h3>Day At Work</h3>


      <img src="images/dayAtWork.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Day at Work"><br />

        <p>Playable <a style="text-decoration: underline" href="https://shadienigmar.itch.io/day-at-work">HERE</a>.<br />
          <br />
          
          Use the mouse to flick the ball of paper across your office. <br />
          <br />
          This simulates a single working day in an office environment. 
          The player is supposed to flick the paper ball across the office in order to reach the briefcase of work on the other side. 
          Along the way the player can run into distractions that act as mini games that need to be completed. 
          During the game, an eight hour timer is running in the top corner. 
          However, this timer counts down significantly faster while inside a distraction. 
          After reaching the end, the player is told how much of their day they wasted before beginning their work.
          <br /><br />
          2020, Unity and Adobe Illustrator</p>
      <br>
      </div>
`;

const fieldOfFocus = `
      <div class="content justify" >
                <br /><br />

                <h3>Field of Focus</h3>

                <img src="images/fieldOfFocus.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Field of Focus"><br />
				
			
            <p>Playable <a style="text-decoration: underline" href="https://shadienigmar.itch.io/field-of-focus">HERE</a>.<br />
			<br />
			
			Controls:<br/>
			<br />
			Use A & D to move the student.<br/>
			Use the arrow keys to move the mouse cursor.<br/>
			Press space to answer the phone messages.<br/>
			Catch and reply to anything Green.<br/>
			Avoid and Ignore anything Red.<br/>
			<br/>
			This game represents a students attempt at multitasking in class.
			The green objects represent positive tasks for them to complete, while the red represent distractions.
			After each level, the player is given a grade for each class they participated in where green objects add to their grade and red objects subtract from it.
			On the third stage, if the player fails to respond to the phone messages correctly three times they will be kicked from class and receive a game over. 

			<br/><br/>
			2020, Unity and Adobe Illustrator</p>
`;

const fontPosters = `
      <div class="content justify" >
                <br /><br />

                <h3>Font Posters</h3>
			
                <img src="images/fertigoPoster.png" class="image2 featured" style="position:relative;left:0%;width:90%" onclick="onClick(this)" alt="Fertigo Poster"><br />
                <img src="images/akronimTypefacePoster2.jpg" class="image2 featured" style="position:relative;left:0%;width:90%" onclick="onClick(this)" alt="Akronim Typeface Poster"><br />
                <img src="images/akronimTypefacePoster.png" class="image2 featured" style="position:relative;left:0%;width:90%" onclick="onClick(this)" alt="Akronim Typeface Poster 2"><br />
                <p>
                Series of font posters. Posters get more abstract as they go.<br />
                <br />
                The first poster is meant to showcase the distinctive aspects of the font Fertigo Pro. 
                This font was created in 2004 by Jos Buivenga. 
                The lowercase f, being both the first letter in Fertigo and the most unique letter of the typeface, is displayed largely across the poster. 
                The layout as a whole was designed to follow a strict, grid structure.
                <br /><br />
                The other two posters feature the font Akronim by Grzegorz Klimczewski.
                As this font is more abstract, these posters followed a more postmodern approach to design.
                The first Akronim poster aimed to recreate the fonts flowing nature through leaves draped down a wall. 
                <br />
                      The second emphasized the broken nature of the letters. 
                      Each letter in Akronim is created with several completely separate lines. 
                These lines were turned into holes in what is supposed to look like paper that has been cut up and scattered. 
                <br />
                <br />
                2019, Adobe Illustrator.</p>
                <br>
            </div>
`;

const hedgeMaze = `
      <div class="content justify" >
                <br /><br />

                <h3>Hedge Maze</h3>
			
                <a href="pages/HedgeMazeFiles/index.html" class="image2 featured"><img src="images/thumbnails/hedgeMaze.png" class="image2 featured" style="position:relative;left:0%;width:100%" alt="Interactive website created using HTML"></a><br />
          
                
                <p>
                This was created for an assignment that involved walking the user through an HTML based narrative. The user navigates through a hedge maze by answering questions about various animals. 
                <br /><br />
                It can be accessed <a style="text-decoration: underline" href="pages/HedgeMazeFiles/index.html">here</a>.
                <br />
                <br />
                2019, HTML and CSS</p>
                <br>
            </div>
`;

const humanModel = `
      <div class="content justify" >
                <br /><br />

                <h3>Human Model</h3>

                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/495404885?color=ffffff&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                <p></p>
              

                <video width="100%" autoplay loop><source src="images/characterRotate1.webm" type="video/webm">Character Rotate 1".</video><br /><br />
                <video width="100%" autoplay loop><source src="images/characterRotate2.webm" type="video/webm">Character Rotate 2".</video><br />

                <p>
                Character designed, modeled, textured, rigged, and animated over the course of a semester.<br />
                She is supposed to represent a city girl who has grown tired of all the pollution that modern life brings.
                In response to this, she has decided to leave on a journey into the forest.
                However, she has never been there before and is incredibly underprepared.
                <br />
                <br />
                2020, Blender and Substance Painter</p>
                <br>
            </div>
`;

const museumOfNature = `
      <div class="content justify" >
                <br /><br />

                <h3>Museum of Nature</h3>
			
                <img src="images/museumOfNature1.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Museum of Nature 1"><br />
                <img src="images/museumOfNature2.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Museum of Nature 2"><br />
                <img src="images/museumOfNature3.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Museum of Nature 3"><br />
                <p>
          
                This simulated museum showcases different aspects of nature, specifically coral reefs, arctic glaciers, and honey bees.
                The displays all present environments with a before and after shot.
                On the left is the environment before human influence and on the right is how they have changed since.<br />
                <br />
                2019, Blender</p>
                <br>
            </div>
`;

const plasticWaste = `
      <div class="content justify" >
                <br /><br />

                <h3>Series On Plastic Waste</h3>
			
                <img src="images/ExcessWasteBoxes.jpg" class="image2 featured" style="position:relative;left:0%;width:90%" onclick="onClick(this)" alt="INFLUX"><br />
                <img src="images/excessWasteDolphin.png" class="image2 featured" style="position:relative;left:0%;width:90%" onclick="onClick(this)" alt="Washed Up"><br />
                <img src="images/excessWasteBottles.jpg" class="image2 featured" style="position:relative;left:0%;width:90%" onclick="onClick(this)" alt="Less than 10% of plastic is recycled"><br />
                <p>
                The pieces in this series use different strategies to convey the negative aspects of plastic waste.
                <br />
                The first aims to showcase the excessive amount of packaging material that is often used. 
                It does so with a balance of text and image by allowing both to be simple and bold.
                <br />
                The second showcases plastic's harmful effects on the oceans by displaying a washed up dolphin recreated from plastic waste. 
                This piece relies heavily on the image.
                <br />
                The third image relies on the text to explain that less than 10% of plastic is recycled. 
                The image helps to put this in perspective by displaying 10 water bottles and having the last one be most of the way green. 
                This green represents the portion of all these bottles that is expected to be recycled based on the aforementioned statistic.
                <br />
                <br />
                2019, Adobe Illustrator and Photoshop</p>
                <br>
            </div>
`;

const policity = `
      <div class="content justify" >
                <br /><br />

                <h3>PoliCity</h3>

                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/493643945?color=ffffff&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                <p>Created with <a style="text-decoration: underline" href="https://sites.psu.edu/priyaejurasinski/">Priya Jurasinski</a>.<br />
                <br />
                Policity, a mobile phone game, demonstrates the complexity of decision-making pertaining to our world. In this app, players must swipe across the screen to view different areas of a city while looking for glowing objects. The glowing objects can be clicked on, which leads to a question regarding the city. Players answer the question, which impacts the world slightly. Over time, these slight changes add up to produce an entirely different looking world by the end of the game.<br />
                <br /></p>
                
                
          
                <form method="get" action="PoliCity/PoliCityIndependentStudyReflection.pdf">
                <button type="submit">Download Full Write Up</button>
                </form><br />
            
                <form method="get" action="PoliCity/PoliCity-arm7-release.apk">
                <button type="submit">PoliCity-arm7-release.apk</button>
                </form><br />
            
                <form method="get" action="PoliCity/PoliCity-arm64-release.apk">
                <button type="submit">PoliCity-arm64-release.apk</button>
                </form><br />
            
                <form method="get" action="PoliCity/PoliCity-x86-release.apk">
                <button type="submit">PoliCity-x86-release.apk</button>
                </form><br />
                <p>
                2020, OpenFrameworks and Android Studios
                </p>
                <br>
            </div>
`;

const snailAnimation = `
      <div class="content justify" >
                <br /><br />

                <h3>Snail Animation</h3>
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/453774616?color=ffffff&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                <p>This snail animation was created in order to learn the fundamentals of Adobe Animate. The snail was chosen as its motions and expressions are easy to depict through simple gestures and expressions. <br />
                <br />
                2019, Adobe Animate</p>
                <br>
            </div>
`;

const printing3D = `
      <div class="content justify" >
                <br /><br />

                <h3>3D Printing</h3>

                <!-- Use it like any other HTML element -->
                
                <video width="100%" autoplay loop><source src="images/3Dmodels/ArtistBased.webm" type="video/webm">3D Model.</video><br /><br />
                <video width="100%" autoplay loop><source src="images/3Dmodels/Cup.webm" type="video/webm">3D Model.</video><br /><br />
                <video width="100%" autoplay loop><source src="images/3Dmodels/Box.webm" type="video/webm">3D Model.</video><br /><br />
                <video width="100%" autoplay loop><source src="images/3Dmodels/Watch.webm" type="video/webm">3D Model.</video><br /><br />
                <video width="100%" autoplay loop><source src="images/3Dmodels/SandCastle.webm" type="video/webm">3D Model.</video><br /><br />
                <video width="100%" autoplay loop><source src="images/3Dmodels/NonDestructive.webm" type="video/webm">3D Model.</video><br /><br />
                <video width="100%" autoplay loop><source src="images/3Dmodels/FoundObjects.webm" type="video/webm">3D Model.</video><br /><br />

                <p>
                Objects modeled with the goal of 3D printing. All of which were succesfully printed afterwards.
                <br /><br />
                2020, Blender</p>
                <br>
            </div>
`;

const birdCall = `
      <div class="content justify" >
                <br /><br />

                <h3>Bird Call</h3>

                <img src="images/birdCall.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Bird Call"><br />
          
          
          <p>
          Playable <a style="text-decoration: underline" href="https://shadienigmar.itch.io/bird-call">HERE</a>.<br />
          Created with <a style="text-decoration: underline" href="https://sites.psu.edu/priyaejurasinski/">Priya Jurasinski</a>.<br />
          <br />

          <br />
          Use the arrow keys to move the player and space to interact with a bird or a hole in the tree.<br />
          <br />
    
          The player in this game, Robin, is about to graduate from high school and is going around asking friends and family about what she should do afterwards.
          The other birds all give their own thoughts and opinions about the different possibilities ahead of her. She also stops to peer out though holes in the tree through which she can see people conversing.
          She does not understand their words or actions, but she enjoys the sounds they produce. This is parallel to how humans enjoy bird songs even though we cannot understand the messages.
    
          <br /><br />
          Below you can find a compilation of the sprite sheets used for the animations.
          <br /><br />
          <img src="/images/spriteSheet.png" class="image2 featured" style="position:relative;left:0%;width:100%" onclick="onClick(this)" alt="Combined Sprite Sheet"><br /><br />
    
          2020, Unity and Adobe Photoshop</p>
                <br>
            </div>
`;





// Get the modal
//var modals = document.querySelectorAll(".modal");

var modal = document.querySelector(".modal");
var modalInside = document.querySelector(".conInside");

var lightbox = document.querySelector(".lightbox");
var lightboxContent = document.querySelector(".lightboxContent");

// Get the button that opens the modal
var btn = document.querySelectorAll(".modal-button");

// Get the <span> element that closes the modal
var closeX = document.querySelector(".closeArrow");
var closeXLight = document.querySelector('.lightX')
var backArrow = document.querySelector(".backArrow");
var nextArrow = document.querySelector(".nextArrow");


var parent;



// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function(e) {
     e.preventDefault();

     parent = e.target.closest('.sortHide');

     console.log(parent);
     modalInside.innerHTML = eval(e.target.getAttribute("href"));
     modal.style.display = "block";

  }
 }

// When the user clicks on <span> (x), close the modal

  closeX.onclick = function() {
    modal.style.display = "none";
    modalInside.innerHTML = null;
  }

  closeXLight.onclick = function() {
    lightbox.style.display = "none";
    lightboxContent.src = null;
  }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    modal.style.display = "none";
    modalInside.innerHTML = null;
  }
  if (event.target.classList.contains('lightbox') || event.target.classList.contains('lightboxContent')) {
    lightbox.style.display = "none";
    lightboxContent.src = null;
  }


}


backArrow.onclick = function(){

  let placeholder = parent.previousElementSibling;

  while (placeholder){
    if (placeholder.classList.contains('show')) {
      parent = placeholder;
      break;
    }
  
    placeholder = placeholder.previousElementSibling;
  }


  modalInside.innerHTML = eval(parent.getAttribute("href"));
  modal.style.display = "block";

}

nextArrow.onclick = function(){

  let found;

  let placeholder = parent.nextElementSibling;

  while (placeholder){
    if (placeholder.classList.contains('show')) {
      parent = placeholder;
      break;
    }
  
    placeholder = placeholder.nextElementSibling;
  }

  modalInside.innerHTML = eval(parent.getAttribute("href"));
  modal.style.display = "block";

}



function openmenu() {
    document.querySelector(".sidenav").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
    document.getElementById("invis").style.display = "none";
  }
   
  function closemenu() {
    document.querySelector(".sidenav").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
  }

  // Modal Image Gallery
function onClick(element) {
  lightbox.style.display = "block";
  lightboxContent.src = element.src;
  modal.style.display = "block";
}





function shutterOpen(){
  document.getElementById("shutters").className = "openedPage";
}



filterSelection("all")
function filterSelection(c) {
  document.querySelector(".sidenav").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
  var x, i, classWidth;
  x = document.getElementsByClassName("sortHide");
  if (c == "all") {
    c = "";
    classWidth = "col-4";
  }
  else classWidth = "col-6";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    removeClass(x[i], "col-4");
    removeClass(x[i], "col-6");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], classWidth);
  }
  removeClass(document.getElementsByClassName("aboutMe")[0], "show");

}

function showAboutMe() {
  var x, i;
  x = document.getElementsByClassName("sortHide");

  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
  }

  addClass(document.getElementsByClassName("aboutMe")[0], "show");

}


function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.querySelector(".sidenav");
var btns = btnContainer.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


