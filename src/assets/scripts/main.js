
// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {

  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'about': 'about',
      'work' : 'work',
      'gallery' : 'gallery',
      'contact': 'contact'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');
      App.views['home'].render();
    },

    // About Route
    about: function() {
      console.log('Navigating to About Page');
      App.views['about'].render();
    },

     // work Route
    work: function() {
      console.log('Navigating to Work Page');
      App.views['work'].render();
    },

     // Casestudy Route
    gallery: function() {
      console.log('Navigating to case study Page');
      App.views['gallery'].render();
    },


    // Contact Route
    contact: function() {
      console.log('Navigating to Contact Page');
      App.views['contact'].render();
    },

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      about: new AboutView(),
      work: new WorkView(),
      gallery: new GalleryView(),
      contact: new ContactView(),
    };

  };

  // -----------------------------
  // Home View
  // -----------------------------

  var HomeView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#home',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>The Projects</h1>',
        image1 : '<a href="#"><img src="assets/images/portnew.jpg" ></a>',
        image2 : '<a href="#"><img src="assets/images/wwomen.jpg" ></a>',
        image3 : '<a href="#"><img src="assets/images/newtt.jpg" ></a>',
       
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // About View
  // -----------------------------

  var AboutView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#about',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>About Me</h1>',

      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // Work View-------------------

  var WorkView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#work',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>Recent Projects</h1>',

      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);

     //Particle (JavaScript/SASS)
      // Store reference to bobby element
      var bobby = $('.bobby');

      // Particle Array
      var particles = [];

      // Max Particles
      var numParticles = 500;

      // Y Axis Range Coordinates
      var minY = 0;
      var maxY = bobby.height();

      // X Axis Range Coordinates
      var minX = 0;
      var maxX = bobby.width();

      // Z Axis Range Coordinates
      var minZ = 0;
      var maxZ = 900;
       
      // Random number generator
      function randomNumber (min, max) {
        return Math.floor(Math.random() * max) + min;
      }

      // Random color generator
      function randomColor () {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
      }

      // Particle Class
      function Particle () {
        
        // Create particle element
        this.element = document.createElement('div');
        this.element.className = 'particle';
        
        // Get formatted position 
        this.position = function () { 
          return 'translate3d(' + this.x + 'px,' + this.y + 'px,' + this.z + 'px)';
        };
        
        // Prefix an attribute
        this.prefix = function (key, value) {
          var prefixes = 'Webkit Moz O ms Khtml'.split(' ');
          for (var i = 0; i <= prefixes.length; i++) {
            var prefix = prefixes[i] || ''
            this.element.style[prefix + key] = value;
          }
        }
        
        // Set particle attributes
        this.setAttributes = function () {
          
          this.prefix('TransitionDuration', randomNumber(5, 10) + 's');
          
          this.x = randomNumber(minX, maxX);
          this.y = randomNumber(minY, maxY);
          this.z = randomNumber(minZ, maxZ);
          
          this.speed = randomNumber(2000, 3000);
          this.color = randomColor();
          
          this.element.style.backgroundColor = this.color;
          this.element.style.transform = this.position();
          
        };

        // Animate particle
        this.animate = function () {
          var self = this;
          self.setAttributes();
          setTimeout(function () { self.animate(); }, self.speed);
        };
        
        // Insert particle into DOM and update reference
        this.element = bobby.append(this.element);
        
        // Begin animation
        this.animate();

      };

      // Particle creator / iterator
      for (var i=0; i < numParticles; i++) {
  
        particles.push(new Particle());
      }

    }

  });

//Case Study View

var GalleryView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#gallery',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>Photo Gallery</h1>',

      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // Contact View-----------------------------

  var ContactView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#contact',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>Contact Me</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });


 
    function initialize() {
      var mapOptions = {
        
        center: { lat: 43.6833, lng: -79.7667},
        zoom: 25,
        mapTypeId: google.maps.MapTypeId.HYBRID
      };
     
      var map = new google.maps.Map(document.getElementById('ggle'),
          mapOptions);  
    }
    google.maps.event.addDomListener(window, 'load', initialize);
 

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ pushState: true });

  // -----------------------------
  // Navigation Links
  // -----------------------------

  $(document).delegate('a', 'click', function(e) {
    e.preventDefault();
    App.router.navigate($(this).attr('href'), { trigger: true });

  });

});