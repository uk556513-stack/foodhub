
import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

// Images
import burgerCategory from "./assets/burger-category.jpg";
import pizzaCategory from "./assets/pizza-category.jpg";
import southCategory from "./assets/south-category.jpg";
import chineseCategory from "./assets/chinese-category.jpg";
import biryaniCategory from "./assets/biryani-category.jpg";
import dessertCategory from "./assets/dessert-category.jpg";
import drinksCategory from "./assets/drinks-category.jpg";

import burgerRestaurant from "./assets/burger-restaurant.jpg";
import pizzaRestaurant from "./assets/pizza-restaurant.jpg";
import southRestaurant from "./assets/south-restaurant.jpg";
import biryaniRestaurant from "./assets/biryani-restaurant.jpg";
import chineseRestaurant from "./assets/chinese-restaurant.jpg";
import dessertRestaurant from "./assets/dessert-restaurant.jpg";
import juiceRestaurant from "./assets/juice-restaurant.jpg";
import crispyBurger from "./assets/crispy-burger.jpg";

import classicBurger from "./assets/classic-burger.jpg";
import margheritaPizza from "./assets/margherita-pizza.jpg";
import chickenBiryani from "./assets/chicken-biryani.jpg";
import chocolateCake from "./assets/chocolate-cake.jpg";

import aboutFood from "./assets/about-food.jpg";

import udayAvatar from "./assets/uday.jpg";
import nikithaAvatar from "./assets/nikitha.jpg";
import umeshAvatar from "./assets/umesh.jpg";

import heroVideo from "./assets/food-hero.mp4";
import cartBackground from "./assets/cart-background.jpg";

// Categories
const categories = [
  { name: "All", image: burgerCategory },
  { name: "Burgers", image: burgerCategory },
  { name: "Pizza", image: pizzaCategory },
  { name: "South Indian", image: southCategory },
  { name: "Chinese", image: chineseCategory },
  { name: "Biryani", image: biryaniCategory },
  { name: "Desserts", image: dessertCategory },
  { name: "Drinks", image: drinksCategory },
];

// Restaurants
const restaurants = [
  {
    id: 1,
    name: "Burger House",
    category: "Burgers",
    cuisine: "Burgers, Fast Food",
    rating: "4.8",
    time: "20–30 min",
    price: 199,
    image: burgerRestaurant,
    offer: "50% OFF",
  },
  {
    id: 2,
    name: "Pizza Paradise",
    category: "Pizza",
    cuisine: "Pizza, Italian",
    rating: "4.6",
    time: "25–35 min",
    price: 299,
    image: pizzaRestaurant,
    offer: "FREE DELIVERY",
  },
  {
    id: 3,
    name: "Chennai Tiffin",
    category: "South Indian",
    cuisine: "Dosa, Idli, Meals",
    rating: "4.7",
    time: "15–25 min",
    price: 99,
    image: southRestaurant,
    offer: "20% OFF",
  },
  {
    id: 4,
    name: "Spice Biryani",
    category: "Biryani",
    cuisine: "Biryani, Indian",
    rating: "4.9",
    time: "25–35 min",
    price: 249,
    image: biryaniRestaurant,
    offer: "BESTSELLER",
  },
  {
    id: 5,
    name: "Wok Express",
    category: "Chinese",
    cuisine: "Noodles, Chinese",
    rating: "4.5",
    time: "20–30 min",
    price: 179,
    image: chineseRestaurant,
    offer: "30% OFF",
  },
  {
    id: 6,
    name: "Sweet Moments",
    category: "Desserts",
    cuisine: "Cakes, Desserts",
    rating: "4.8",
    time: "15–25 min",
    price: 149,
    image: dessertRestaurant,
    offer: "SWEET DEAL",
  },
  {
    id: 7,
    name: "Juice Junction",
    category: "Drinks",
    cuisine: "Juices, Shakes",
    rating: "4.4",
    time: "10–20 min",
    price: 89,
    image: juiceRestaurant,
    offer: "FRESH DAILY",
  },
  {
    id: 8,
    name: "Crispy Burger Co.",
    category: "Burgers",
    cuisine: "Burgers, Fries",
    rating: "4.6",
    time: "20–30 min",
    price: 229,
    image: crispyBurger,
    offer: "BUY 1 GET 1",
  },
];

// Popular dishes
const popularDishes = [
  { name: "Classic Burger", price: 149, image: classicBurger },
  { name: "Margherita Pizza", price: 229, image: margheritaPizza },
  { name: "Chicken Biryani", price: 249, image: chickenBiryani },
  { name: "Chocolate Cake", price: 129, image: chocolateCake },
];

// Customer reviews
const testimonials = [
  {
    name: "UDAY",
    place: "Krishnagiri",
    rating: "★★★★★",
    text: "Delicious food, affordable prices, and super-fast delivery. FoodHub makes every meal special!",
    avatar: udayAvatar,
  },
  {
    name: "NIKITHA",
    place: "Dharmapuri",
    rating: "★★★★★",
    text: "Finding my favourite restaurants is so easy. The special offers make ordering even better!",
    avatar: nikithaAvatar,
  },
  {
    name: "UMESH",
    place: "Bengaluru",
    rating: "★★★★★",
    text: "A smooth ordering experience with plenty of tasty options. My go-to platform for food delivery!",
    avatar: umeshAvatar,
  },
];

// Loading screen
function LoadingScreen({ progress }) {
  return (
    <div className="loading-screen">
      <div>
        <span className="loader-food">🍔</span>
        
      </div>

      <h1 className="brand-logo loader-brand">
        Food<span>Hub.</span>
      </h1>

      <p className="loader-tagline">GOOD FOOD. GOOD MOOD.</p>

      <div className="loader-progress">
        <div
          className="loader-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="loader-percent">{progress}%</div>

      <p className="loader-message">
        {progress < 100
          ? "Preparing something delicious..."
          : "Your food adventure starts now!"}
      </p>
    </div>
  );
}

// Restaurant card
function RestaurantCard({ restaurant, onAdd }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="restaurant-card" data-aos="fade-up">
      <div className="restaurant-image">
        <img src={restaurant.image} alt={restaurant.name} loading="lazy" />

        <span className="restaurant-offer">{restaurant.offer}</span>

        <button
          className={`favorite-button ${favorite ? "is-favorite" : ""}`}
          onClick={() => setFavorite(!favorite)}
          aria-label={`Favorite ${restaurant.name}`}
          aria-pressed={favorite}
        >
          ♥
        </button>
      </div>

      <div className="restaurant-info">
        <div className="restaurant-title-row">
          <h3>{restaurant.name}</h3>
          <span className="rating-pill">★ {restaurant.rating}</span>
        </div>

        <p>{restaurant.cuisine}</p>

        <div className="restaurant-bottom">
          <span>◷ {restaurant.time}</span>
          <span>From ₹{restaurant.price}</span>
        </div>

        <button
          className="add-food-button"
          onClick={() => onAdd(restaurant)}
        >
          Add to cart <span>＋</span>
        </button>
      </div>
    </article>
  );
}

// Order confirmation
function OrderConfirmation({ onClose, orderNumber, total }) {
  return (
    <div
      className="order-confirmation-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-confirmation-title"
    >
      <div className="order-confirmation-card">
        <div className="order-success-icon">✓</div>

        <span className="section-kicker">THANK YOU FOR ORDERING</span>

        <h2 id="order-confirmation-title">Order Confirmed!</h2>

        <p>
          Your FoodHub order has been confirmed successfully.
          Thank you for choosing FoodHub!
        </p>

        <div className="order-confirmation-details">
          <div>
            <span>Order Number</span>
            <strong>{orderNumber}</strong>
          </div>

          <div>
            <span>Order Status</span>
            <strong className="confirmed-status">Confirmed ✓</strong>
          </div>

          <div>
            <span>Order Total</span>
            <strong>₹{total}</strong>
          </div>
        </div>

        <button
          className="primary-button order-continue-button"
          onClick={onClose}
        >
          Continue Exploring ↗
        </button>

        <p className="demo-note">
          Demo confirmation only. No real order has been placed.
        </p>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const [toast, setToast] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Loading and AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    let current = 0;
    let hideTimer;

    const timer = window.setInterval(() => {
      current = Math.min(current + 4, 100);
      setProgress(current);

      if (current >= 100) {
        window.clearInterval(timer);

        hideTimer = window.setTimeout(() => {
          setLoading(false);
        }, 350);
      }
    }, 55);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.refreshHard();
      window.scrollTo(0, 0);
    }
  }, [loading]);

  // Toast message
  useEffect(() => {
    if (!toast) return;

    const timer = window.setTimeout(() => {
      setToast("");
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [toast]);

  // Restaurant filtering
  const filteredRestaurants = useMemo(() => {
    const query = search.trim().toLowerCase();

    return restaurants.filter((restaurant) => {
      const matchesCategory =
        activeCategory === "All" ||
        restaurant.category === activeCategory;

      const matchesSearch =
        !query ||
        restaurant.name.toLowerCase().includes(query) ||
        restaurant.category.toLowerCase().includes(query) ||
        restaurant.cuisine.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  // Cart calculations
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Add to cart
  function addToCart(restaurant) {
    setCart((previous) => {
      const existing = previous.find(
        (item) => item.id === restaurant.id
      );

      if (existing) {
        return previous.map((item) =>
          item.id === restaurant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...restaurant, quantity: 1 }];
    });

    setToast(`${restaurant.name} added to your cart!`);
  }

  // Change quantity
  function changeQuantity(id, amount) {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Checkout
  function handleCheckout() {
    if (cart.length === 0) {
      setToast("Your cart is empty!");
      return;
    }

    const orderDetails = {
      number: `FH${Date.now().toString().slice(-8)}`,
      total: cartTotal,
      items: cart.map((item) => ({ ...item })),
    };

    setConfirmedOrder(orderDetails);
    setOrderConfirmed(true);
    setCart([]);
    setToast("Order confirmed successfully!");
  }

  function closeOrderConfirmation() {
    setOrderConfirmed(false);

    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  // Location search
  function handleLocationSearch(event) {
    event.preventDefault();

    if (!location.trim()) {
      setToast("Please enter your delivery location.");
      return;
    }

    document.getElementById("restaurants")?.scrollIntoView({
      behavior: "smooth",
    });

    setToast(`Showing food options for ${location.trim()}`);
  }

  // Newsletter
  function handleNewsletter(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setToast("Thanks for joining the FoodHub family!");
    setEmail("");
  }

  // FAQ
  const faqs = [
    {
      question: "How do I order food on FoodHub?",
      answer:
        "Enter your delivery location, explore restaurants, choose your food and add items to your cart. This demo frontend lets you explore the ordering interface.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Estimated delivery times are shown on each restaurant card. Actual delivery time depends on your location, restaurant and traffic.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Order tracking can be connected to a backend API to show live order status, delivery progress and estimated arrival time.",
    },
    {
      question: "Are online payments available?",
      answer:
        "This frontend is a UI demo. Real online payments require a secure payment gateway and a backend integration.",
    },
  ];

  if (loading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div className="foodHub-app">

      {/* NAVBAR */}
      <header className="site-header">
        <div className="container nav-container">

          <a href="#home" className="brand-logo">
            
            Food<span>Hub.</span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
            {[
              ["Home", "#home"],
              ["Restaurants", "#restaurants"],
              ["Offers", "#offers"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                href={href}
                key={label}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="#restaurants" className="nav-search" aria-label="Search food">
              ⌕
            </a>

            <a href="#restaurants" className="login-button">
              Explore
            </a>

            <a href="#restaurants" className="signup-button">
              Order Now <span>↗</span>
            </a>

            <a href="#cart" className="cart-button" aria-label="Shopping cart">
              🛍️ <span>{cartCount}</span>
            </a>
          </div>
        </div>
      </header>

      <main>

        {/* HERO SECTION */}
        <section className="hero-section" id="home">

          <video
            className="hero-background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div className="hero-video-overlay"></div>

          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="container hero-grid">

            <div className="hero-content" data-aos="fade-right">

              <div className="hero-eyebrow">
                
                FRESH FOOD. FAST DELIVERY.
              </div>

              <h1>
                Cravings meet
                <br />
                <span>happiness.</span>
              </h1>

              <p className="hero-description">
                From your favourite comfort food to exciting new flavours,
                discover delicious meals delivered right to your doorstep.
              </p>

              <div className="hero-highlights">
                <span>✓ Freshly prepared</span>
                <span>✓ Easy ordering</span>
              </div>

              <form
                className="location-search"
                onSubmit={handleLocationSearch}
              >
                <span className="location-icon">⌖</span>

                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Enter your delivery location"
                  aria-label="Delivery location"
                />

                <button type="submit">
                  Find Food <span>→</span>
                </button>
              </form>

              <div className="hero-stats">
                <div>
                  <strong>100+</strong>
                  <span>Food choices</span>
                </div>

                <div>
                  <strong>30 min</strong>
                  <span>Est. delivery</span>
                </div>

                <div>
                  <strong>4.8 ★</strong>
                  <span>Food lovers</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" data-aos="zoom-in"></div>

          </div>

          <div className="hero-bottom-line">
            <span>GOOD FOOD</span>
            <span>GOOD MOOD</span>
            <span>GOOD TIMES</span>
          </div>

        </section>

        {/* CATEGORIES */}
        <section className="category-section section-padding" id="categories">
          <div className="container">

            <div className="section-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">WHAT ARE YOU CRAVING?</span>
                <h2>
                  Explore <span>categories.</span>
                </h2>
                <p>A little something for every kind of craving.</p>
              </div>

              <a className="text-link" href="#restaurants">
                Explore all <span>↗</span>
              </a>
            </div>

            <div className="category-grid">
              {categories
                .filter((category) => category.name !== "All")
                .map((category, index) => (
                  <button
                    className={
                      activeCategory === category.name
                        ? "category-card category-active"
                        : "category-card"
                    }
                    key={category.name}
                    onClick={() => {
                      setActiveCategory(category.name);

                      document.getElementById("restaurants")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    data-aos="fade-up"
                    data-aos-delay={index * 60}
                  >
                    <img
                      className="category-image"
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                    />

                    <strong>{category.name}</strong>
                    <span className="category-arrow">↗</span>
                  </button>
                ))}
            </div>

          </div>
        </section>

        {/* RESTAURANTS */}
        <section className="restaurants-section section-padding" id="restaurants">
          <div className="container">

            <div className="section-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">HANDPICKED FOR YOU</span>
                <h2>
                  Restaurants you'll <span>love.</span>
                </h2>
                <p>
                  Discover popular spots and your next favourite meal.
                </p>
              </div>

            </div>

            <div className="restaurant-toolbar">

              <div className="category-filters">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={
                      activeCategory === category.name
                        ? "filter-chip filter-chip-active"
                        : "filter-chip"
                    }
                  >
                    <img
                      className="filter-category-image"
                      src={category.image}
                      alt=""
                    />

                    {category.name}
                  </button>
                ))}
              </div>

              <label className="restaurant-search">
                <span>⌕</span>

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search restaurants..."
                  aria-label="Search restaurants"
                />
              </label>

            </div>

            <div className="restaurant-grid">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  onAdd={addToCart}
                />
              ))}
            </div>

            {filteredRestaurants.length === 0 && (
              <div className="empty-results">
                <span>🍽️</span>
                <h3>No restaurants found</h3>
                <p>Try a different search or category.</p>

                <button
                  className="primary-button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                >
                  Show all restaurants
                </button>
              </div>
            )}

          </div>
        </section>

        {/* POPULAR DISHES */}
        <section className="popular-section section-padding" id="popular">
          <div className="container">

            <div className="section-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">THE CROWD FAVOURITES</span>
                <h2>
                  Popular <span>picks.</span>
                </h2>
                <p>The delicious dishes everyone is talking about.</p>
              </div>
            </div>

            <div className="popular-grid">
              {popularDishes.map((dish, index) => (
                <div
                  className="popular-dish"
                  key={dish.name}
                  data-aos="zoom-in"
                  data-aos-delay={index * 80}
                >
                  <div className="popular-dish-image">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                    />
                  </div>

                  <div className="popular-dish-info">
                    <h3>{dish.name}</h3>
                    <p>Freshly made, full of flavour.</p>

                    <div className="popular-price-row">
                      <strong>₹{dish.price}</strong>

                      <button
                        onClick={() => {
                          setSearch(dish.name.split(" ")[0]);
                          setActiveCategory("All");

                          document.getElementById("restaurants")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        Explore ↗
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* OFFERS */}
        <section className="offers-section section-padding" id="offers">
          <div className="container">

            <div className="offer-banner" data-aos="zoom-in">

              <div className="offer-content">
                <span className="offer-label">A LITTLE TREAT FROM US</span>

                <h2>
                  More flavour.
                  <br />
                  <span>Less spending.</span>
                </h2>

                <p>
                  Discover delicious deals on your favourite food.
                  Your next great meal is just a click away.
                </p>

                <div className="offer-code">
                  <span>DEMO OFFER</span>
                  <strong>FOODHUB50</strong>
                </div>

                <a href="#restaurants" className="offer-button">
                  Explore restaurants ↗
                </a>
              </div>

              <div className="offer-visual">
                
                <span className="offer-big-emoji">🍔</span>
                <span className="offer-side-emoji">🍟</span>
                <span className="offer-sticker">TASTY<br />DEALS!</span>
              </div>

            </div>

            <div className="mini-offers-grid">

              <div className="mini-offer" data-aos="fade-up">
                <span>🚚</span>
                <div>
                  <h3>Delivery deals</h3>
                  <p>Explore restaurants with delivery offers.</p>
                </div>
              </div>

              <div className="mini-offer" data-aos="fade-up" data-aos-delay="100">
                <span>🎉</span>
                <div>
                  <h3>Foodie favourites</h3>
                  <p>Discover great food for every occasion.</p>
                </div>
              </div>

              <div className="mini-offer" data-aos="fade-up" data-aos-delay="200">
                <span>💛</span>
                <div>
                  <h3>Made for you</h3>
                  <p>Find something new to love today.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section section-padding" id="about">
          <div className="container about-grid">

            <div className="about-visual" data-aos="fade-right">

              <div className="about-photo">
                <img
                  src={aboutFood}
                  alt="Freshly prepared food served on a table"
                  loading="lazy"
                />
              </div>

              <div className="about-sticker">
                <span>♥</span>
                <strong>Made for<br />food lovers</strong>
              </div>

              <div className="about-caption">
                A WORLD OF FLAVOUR
              </div>

            </div>

            <div className="about-content" data-aos="fade-left">

              <span className="section-kicker">A LITTLE ABOUT US</span>

              <h2>
                Good food brings
                <br />
                people <span>together.</span>
              </h2>

              <p>
                At FoodHub, we believe every meal can make your day better.
                We're bringing the food you love closer to you with an easy,
                enjoyable way to explore restaurants and discover new flavours.
              </p>

              <p>
                Whether it is a quick lunch, a family dinner or a late-night
                craving, your next delicious moment starts here.
              </p>

              <div className="about-stats">
                <div>
                  <strong>100+</strong>
                  <span>Food options</span>
                </div>

                <div>
                  <strong>8</strong>
                  <span>Food categories</span>
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Explore anytime</span>
                </div>
              </div>

              <a href="#restaurants" className="primary-button">
                Discover your favourites ↗
              </a>

            </div>

          </div>
        </section>

        {/* BENEFITS */}
        <section className="benefits-section section-padding" id="why-us">
          <div className="container">

            <div className="center-heading" data-aos="fade-up">
              <span className="section-kicker">WHY FOODHUB?</span>

              <h2>
                Food ordering, <span>made better.</span>
              </h2>

              <p>
                Everything you need for a delightful food discovery experience.
              </p>
            </div>

            <div className="benefits-grid">

              {[
                ["⚡", "Quick & easy", "Find your favourite meals without the fuss."],
                ["🍱", "Loads of choices", "Explore cuisines, dishes and local favourites."],
                ["🔎", "Easy discovery", "Search and filter to find what you are craving."],
                ["💳", "Simple experience", "A clear and convenient ordering interface."],
              ].map(([emoji, title, description], index) => (
                <div
                  className="benefit-card"
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="benefit-icon">{emoji}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* APP SECTION */}
<section className="app-section section-padding" id="app">
  <div className="container app-banner" data-aos="fade-up">

    {/* APP CONTENT */}
    <div className="app-content">

      <span className="section-kicker">
        YOUR FOOD WORLD, ANYWHERE
      </span>

      <h2>
        Big cravings?
        <br />
        <span>We've got you.</span>
      </h2>

      <p>
        Imagine exploring menus, discovering restaurants and tracking
        your food order from one handy app.
      </p>

      {/* APP STORE BUTTONS */}
      <div className="app-store-buttons">

        {/* GOOGLE PLAY BUTTON */}
        <button
          className="store-button"
          onClick={() => setToast("Mobile app coming soon!")}
        >
          <svg
            viewBox="0 0 24 24"
            className="store-icon google-play-icon"
            aria-hidden="true"
          >
            <path
              fill="#34A853"
              d="M3.2 2.5 14 12 3.2 21.5c-.4-.3-.7-.8-.7-1.4V3.9c0-.6.3-1.1.7-1.4Z"
            />

            <path
              fill="#4285F4"
              d="m14 12 3.6-3.2 3.2 1.8c.9.5.9 1.5 0 2l-3.2 1.8L14 12Z"
            />

            <path
              fill="#FBBC04"
              d="m3.2 2.5 14.4 6.3L14 12 3.2 2.5Z"
            />

            <path
              fill="#EA4335"
              d="m3.2 21.5 14.4-6.3L14 12 3.2 21.5Z"
            />
          </svg>

          <div className="store-text">
            <small>GET IT ON</small>
            <strong>Google Play</strong>
          </div>
        </button>

        {/* APPLE APP STORE BUTTON */}
        <button
          className="store-button"
          onClick={() => setToast("Mobile app coming soon!")}
        >
          <svg
            viewBox="0 0 24 24"
            className="store-icon apple-store-icon"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M17.05 12.54c-.02-2.05 1.67-3.04 1.75-3.09-.95-1.4-2.43-1.59-2.95-1.61-1.25-.13-2.45.75-3.09.75-.65 0-1.63-.73-2.68-.71-1.37.02-2.65.81-3.35 2.04-1.43 2.48-.36 6.12 1.01 8.12.67.98 1.46 2.08 2.5 2.04 1-.04 1.38-.66 2.6-.66 1.21 0 1.56.66 2.61.64 1.08-.02 1.76-.98 2.41-1.97.77-1.12 1.08-2.22 1.09-2.28-.02-.01-2.09-.8-2.1-3.27ZM15.02 6.5c.55-.67.92-1.59.82-2.5-.8.03-1.8.53-2.37 1.19-.51.59-.96 1.53-.84 2.43.9.07 1.82-.46 2.39-1.12Z"
            />
          </svg>

          <div className="store-text">
            <small>DOWNLOAD ON THE</small>
            <strong>App Store</strong>
          </div>
        </button>

      </div>

      <small className="demo-note">
        App store buttons are demo UI elements.
      </small>

    </div>

    {/* PHONE MOCKUP */}
    <div className="app-phone-wrap">

      <div className="phone-mockup">

        <div className="phone-notch"></div>

        <div className="phone-brand">
          Food<span>Hub.</span>
        </div>

        <p className="phone-greeting">
          Hey, foodie! 👋
        </p>

        <div className="phone-search">
          ⌕ Search your cravings
        </div>

        <div className="phone-food">
          🍔 🍕 🍜 🍛
        </div>

        <div className="phone-order-image">
          🍔
        </div>

        <strong>
          Delicious, isn't it?
        </strong>

        <p>
          Discover your next favourite.
        </p>

        

      </div>

      <span className="phone-deco phone-deco-one">
        🍕
      </span>

      <span className="phone-deco phone-deco-two">
        🥤
      </span>

    </div>

  </div>
</section>


        {/* TESTIMONIALS */}
        <section className="testimonials-section section-padding" id="reviews">
          <div className="container">

            <div className="section-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">
                  KIND WORDS, HAPPY TUMMIES
                </span>

                <h2>
                  Foodies <span>say it best.</span>
                </h2>

                <p>Sample reviews for the FoodHub design demo.</p>
              </div>
            </div>

            <div className="testimonial-grid">

              {testimonials.map((review, index) => (
                <article
                  className="testimonial-card"
                  key={review.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="testimonial-stars">
                    {review.rating}
                  </div>

                  <p className="testimonial-text">
                    "{review.text}"
                  </p>

                  <div className="testimonial-person">

                    <img
                      className="testimonial-avatar"
                      src={review.avatar}
                      alt={review.name}
                      loading="lazy"
                    />

                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.place}</span>
                    </div>

                    <span className="verified-mark">✓</span>

                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section section-padding" id="faq">
          <div className="container faq-grid">

            <div className="faq-intro" data-aos="fade-right">

              <span className="section-kicker">GOT QUESTIONS?</span>

              <h2>
                Good to <span>know.</span>
              </h2>

              <p>
                A few quick answers to help you get started with FoodHub.
              </p>

            </div>

            <div className="faq-list" data-aos="fade-left">

              {faqs.map((faq, index) => (
                <div className="faq-item" key={faq.question}>

                  <button
                    className="faq-question"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq.question}</span>

                    <span>
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === index && (
                    <p className="faq-answer">
                      {faq.answer}
                    </p>
                  )}

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter-section" id="newsletter">
          <div className="container newsletter-inner" data-aos="zoom-in">

            <div>
              <span className="section-kicker">
                A LITTLE SOMETHING DELICIOUS
              </span>

              <h2>
                Stay in the <span>food loop.</span>
              </h2>

              <p>
                Sign up for foodie updates, fresh inspiration and special offers.
              </p>
            </div>

            <form
              className="newsletter-form"
              onSubmit={handleNewsletter}
            >
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                required
                aria-label="Email address"
              />

              <button type="submit">
                {subscribed ? "Subscribed ✓" : "Join FoodHub →"}
              </button>
            </form>

          </div>
        </section>

        {/* CART */}
        <section
          className="cart-section section-padding"
          id="cart"
          style={{
            backgroundImage: `linear-gradient(rgba(20,12,8,0.72), rgba(20,12,8,0.78)), url(${cartBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
        >
          <div className="container">

            <div className="section-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">YOUR FOOD BAG</span>

                <h2>
                  Your <span>cart.</span>
                </h2>

                <p>Your selected items appear here.</p>
              </div>

              <span className="results-count">
                {cartCount} items
              </span>
            </div>

            {cart.length === 0 ? (

              <div
                className="empty-cart"
                style={{
                  background: "rgba(255,255,255,0.94)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "20px",
                }}
              >
                <span>🛍️</span>

                <h3>Your cart is waiting for something tasty.</h3>

                <p>Explore our restaurants and add a favourite.</p>

                <a href="#restaurants" className="primary-button">
                  Explore food ↗
                </a>
              </div>

            ) : (

              <div
                className="cart-panel"
                style={{
                  background: "rgba(255,255,255,0.96)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "20px",
                  padding: "24px",
                }}
              >

                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>

                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />

                    <div className="cart-item-name">
                      <strong>{item.name}</strong>
                      <span>₹{item.price} each</span>
                    </div>

                    <div className="quantity-control">

                      <button
                        onClick={() => changeQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => changeQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>

                    </div>

                    <strong className="cart-item-total">
                      ₹{item.price * item.quantity}
                    </strong>

                  </div>
                ))}

                <div className="cart-summary">

                  <div>
                    <span>Subtotal</span>
                    <strong>₹{cartTotal}</strong>
                  </div>

                  <div>
                    <span>Delivery</span>
                    <strong>Calculated at checkout</strong>
                  </div>

                  <div className="cart-grand-total">
                    <span>Total</span>
                    <strong>₹{cartTotal}</strong>
                  </div>

                  <button
                    className="primary-button"
                    onClick={handleCheckout}
                  >
                    Continue to checkout ↗
                  </button>

                  <p className="demo-note">
                    Demo only: no real order or payment is processed.
                  </p>

                </div>

              </div>

            )}

          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section section-padding" id="contact">
          <div className="container contact-grid">

            <div data-aos="fade-right">

              <span className="section-kicker">
                WE'D LOVE TO HEAR FROM YOU
              </span>

              <h2>
                Let's talk <span>food.</span>
              </h2>

              <p>
                Have a question about this demo? Send a message or explore
                the sections above.
              </p>

              <a
                className="contact-email"
                href="mailto:uday@foodhub.example"
              >
                ✉ uday@foodhub.example
              </a>

            </div>

            <form
              className="contact-form"
              data-aos="fade-left"
              onSubmit={(event) => {
                event.preventDefault();
                setToast("Thanks! Connect a backend to receive messages.");
                event.currentTarget.reset();
              }}
            >

              <label>
                Your name
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Your message
                <textarea
                  placeholder="How can we help?"
                  rows="4"
                  required
                />
              </label>

              <button className="primary-button" type="submit">
                Send message ↗
              </button>

            </form>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="site-footer">

        <div className="container footer-main">

          <div className="footer-brand">

            <a href="#home" className="brand-logo">
              
              Food<span>Hub.</span>
            </a>

            <p>
              Good food, good mood. Discover delicious moments with FoodHub.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
            </div>

          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#restaurants">Restaurants</a>
            <a href="#popular">Popular dishes</a>
          </div>

          <div className="footer-column">
            <h3>Our Company</h3>
            <a href="#about">About us</a>
            <a href="#why-us">Why FoodHub</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Need help?</h3>
            <a href="#faq">FAQs</a>
            <a href="#offers">Offers</a>
            <a href="#newsletter">Newsletter</a>
            <a href="#cart">Your cart</a>
          </div>

        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 FoodHub.
            All rights reserved.
          </span>
        </div>

      </footer>

      {/* ORDER CONFIRMATION */}
      {orderConfirmed && confirmedOrder && (
        <OrderConfirmation
          orderNumber={confirmedOrder.number}
          total={confirmedOrder.total}
          onClose={closeOrderConfirmation}
        />
      )}

      {/* TOAST */}
      {toast && (
        <div className="toast-message" role="status">
          <span>✓</span>
          {toast}

          <button
            onClick={() => setToast("")}
            aria-label="Dismiss notification"
          >
            ×
          </button>
        </div>
      )}

    </div>
  );
}
