
import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    name: "All",
    image: "https://i.pinimg.com/1200x/61/48/4d/61484de6b9eb2fac445e335b71598d11.jpg",
  },
  {
    name: "Burgers",
    image: "https://i.pinimg.com/736x/07/03/9b/07039b6d92d1fedad474f289de8de2aa.jpg",
  },
  {
    name: "Pizza",
    image: "https://i.pinimg.com/736x/de/87/e0/de87e019ce546dbd7b6dec1e83acef4c.jpg",
  },
  {
    name: "South Indian",
    image: "https://i.pinimg.com/736x/ba/f1/9e/baf19e3c66edc07aa06d882fe4422a99.jpg",
  },
  {
    name: "Chinese",
    image: "https://i.pinimg.com/736x/d1/6b/dd/d16bdd5524ca8b12e2104aa11a18ab6f.jpg",
  },
  {
    name: "Biryani",
    image: "https://i.pinimg.com/736x/e7/e4/1c/e7e41c6111a5c09217ad500527c49b74.jpg",
  },
  {
    name: "Desserts",
    image: "https://i.pinimg.com/736x/98/76/42/98764224d9a265de34701da27eadf430.jpg",
  },
  {
    name: "Drinks",
    image: "https://i.pinimg.com/736x/c0/d3/32/c0d332575b824b0442823968d5769dcd.jpg",
  },
];

const restaurants = [
  {
    id: 1,
    name: "Burger House",
    category: "Burgers",
    cuisine: "Burgers, Fast Food",
    rating: "4.8",
    time: "20–30 min",
    price: 199,
    image: "https://i.pinimg.com/736x/c9/c5/01/c9c5013a47c78dde12d22a8659cdb945.jpg",
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
    image: "https://i.pinimg.com/736x/73/d8/0d/73d80d7106f3a70f9bdaa383d6fd4f31.jpg",
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
    image: "https://i.pinimg.com/736x/19/dc/0c/19dc0ce76bf9d02edac55196445af428.jpg",
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
    image: "https://i.pinimg.com/736x/49/66/3d/49663d1699c22035521535fed6866932.jpg",
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
    image: "https://i.pinimg.com/736x/ac/e1/30/ace1309df3647bd066b9890809d4bc4d.jpg",
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
    image: "https://i.pinimg.com/1200x/42/3b/68/423b68460bfc65ad9a164d0a66e390c5.jpg",
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
    image: "https://i.pinimg.com/736x/5c/b0/96/5cb0969185c846e7f02b25f41d9fcf77.jpg",
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
    image: "https://i.pinimg.com/736x/66/fd/fc/66fdfc6fb93ad3ed26b4f8b2cd994347.jpg",
    offer: "BUY 1 GET 1",
  },
];

const popularDishes = [
  {
    name: "Classic Burger",
    price: 149,
    image: "https://i.pinimg.com/1200x/65/fb/c1/65fbc17a708bb46e66258e94d64b324b.jpg",
  },
  {
    name: "Margherita Pizza",
    price: 229,
    image: "https://i.pinimg.com/1200x/0a/eb/dd/0aebdd54c76aea040773883a745b8e59.jpg",
  },
  {
    name: "Chicken Biryani",
    price: 249,
    image: "https://i.pinimg.com/736x/94/fd/76/94fd76a0637602b7b5ea59fc5a76e4ad.jpg",
  },
  {
    name: "Chocolate Cake",
    price: 129,
    image: "https://i.pinimg.com/736x/ec/59/27/ec5927d291e23f9d65b6b910e5167d8a.jpg",
  },
];

const testimonials = [
  {
    name: "UDAY",
    place: "Krishnagiri",
    rating: "★★★★★",
    text: "Delicious food, affordable prices, and super-fast delivery. FoodHub makes every meal special!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "NIKITHA",
    place: "Dharmapuri",
    rating: "★★★★★",
    text: "Finding my favourite restaurants is so easy. The special offers make ordering even better!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "UMESH",
    place: "Bengaluru",
    rating: "★★★★★",
    text: "A smooth ordering experience with plenty of tasty options. My go-to platform for food delivery!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
  },
];

function LoadingScreen({ progress }) {
  return (
    <div className="loading-screen">
      <div className="loader-orbit">
        <span className="loader-food">🍔</span>
        <span className="orbit-dot dot-one">🍕</span>
        <span className="orbit-dot dot-two">🍟</span>
        <span className="orbit-dot dot-three">🥤</span>
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

function RestaurantCard({ restaurant, onAdd }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="restaurant-card" data-aos="fade-up">
      <div className="restaurant-image">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          loading="lazy"
        />

        <span className="restaurant-offer">{restaurant.offer}</span>

        <button
          className={`favorite-button ${favorite ? "is-favorite" : ""}`}
          aria-label={`Favorite ${restaurant.name}`}
          aria-pressed={favorite}
          onClick={() => setFavorite((previous) => !previous)}
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

  // NEW: Order confirmation state
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

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
        hideTimer = window.setTimeout(() => setLoading(false), 350);
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

  useEffect(() => {
    if (!toast) return undefined;

    const timer = window.setTimeout(() => setToast(""), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

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

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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

  function handleCheckout() {
    if (cart.length === 0) {
      setToast("Your cart is empty!");
      return;
    }

    // Store the order details before clearing the cart
    const orderDetails = {
      number: `FH${Date.now().toString().slice(-8)}`,
      total: cartTotal,
      items: cart.map((item) => ({ ...item })),
    };

    setConfirmedOrder(orderDetails);
    setOrderConfirmed(true);
    setCart([]);
    setToast("🎉 Order confirmed successfully!");
  }

  function closeOrderConfirmation() {
    setOrderConfirmed(false);
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  }

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

  function handleNewsletter(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setToast("Thanks for joining the FoodHub family!");
    setEmail("");
  }

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
      <header className="site-header">
        <div className="container nav-container">
          <a href="#home" className="brand-logo">
            <span className="brand-icon"></span> Food<span>Hub.</span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((previous) => !previous)}
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
        <section className="hero-section" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-grid">
            <div className="hero-content" data-aos="fade-right">
              <div className="hero-eyebrow">
                <span className="live-dot" />
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

              <form className="location-search" onSubmit={handleLocationSearch}>
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

            <div className="hero-visual" data-aos="zoom-in">
              <div className="hero-image-frame">
                <img
                  src="https://i.pinimg.com/736x/35/07/37/350737e9a0f7478492927bbf015b7514.jpg"
                  alt="Delicious burger ready to enjoy"
                />
              </div>

              <div className="floating-food floating-food-one">🍟</div>
              <div className="floating-food floating-food-two">🍕</div>

              <div className="floating-review">
                <div className="review-avatars">👩🏻 👨🏽 👩🏼</div>
                <div>
                  <strong>Foodie approved!</strong>
                  <span>4.8/5 happy customers</span>
                </div>
              </div>

              <div className="floating-delivery">
                <span>🛵</span>
                <div>
                  <strong>Fast delivery</strong>
                  <small>At your doorstep</small>
                </div>
              </div>

              <div className="hero-circle-text">
                MADE WITH LOVE · SERVED FRESH ·
              </div>
            </div>
          </div>

          <div className="hero-bottom-line">
            <span>GOOD FOOD</span>
            <span>GOOD MOOD</span>
            <span>GOOD TIMES</span>
          </div>
        </section>

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

        <section className="restaurants-section section-padding" id="restaurants">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">HANDPICKED FOR YOU</span>
                <h2>
                  Restaurants you'll <span>love.</span>
                </h2>
                <p>Discover popular spots and your next favourite meal.</p>
              </div>

              <span className="results-count">
                {filteredRestaurants.length} places to explore
              </span>
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
                    <img src={dish.image} alt={dish.name} loading="lazy" />
                  </div>

                  <div className="popular-dish-info">
                    <h3>{dish.name}</h3>
                    <p>Freshly made, full of flavour.</p>

                    <div className="popular-price-row">
                      <strong>₹{dish.price}</strong>

                      <button
                        aria-label={`Find ${dish.name}`}
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
                  Discover delicious deals on your favourite food. Your next
                  great meal is just a click away.
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
                <span className="offer-sparkle sparkle-one">✳</span>
                <span className="offer-big-emoji">🍔</span>
                <span className="offer-side-emoji">🍟</span>
                <span className="offer-sticker">
                  TASTY
                  <br />
                  DEALS!
                </span>
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

        <section className="about-section section-padding" id="about">
          <div className="container about-grid">
            <div className="about-visual" data-aos="fade-right">
              <div className="about-photo">
                <img
                  src="https://i.pinimg.com/736x/15/f1/21/15f1217b079578837da221d351bb5e49.jpg"
                  alt="Freshly prepared food served on a table"
                  loading="lazy"
                />
              </div>

              <div className="about-sticker">
                <span>♥</span>
                <strong>
                  Made for
                  <br />
                  food lovers
                </strong>
              </div>

              <div className="about-caption">A WORLD OF FLAVOUR</div>
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

        <section className="app-section section-padding" id="app">
          <div className="container app-banner" data-aos="fade-up">
            <div className="app-content">
              <span className="section-kicker">YOUR FOOD WORLD, ANYWHERE</span>

              <h2>
                Big cravings?
                <br />
                <span>We've got you.</span>
              </h2>

              <p>
                Imagine exploring menus, discovering restaurants and tracking
                your food order from one handy app.
              </p>

              <div className="app-store-buttons">
                <button onClick={() => setToast("Mobile app coming soon!")}>
                  <span>▶</span>
                  <div>
                    <small>GET IT ON</small>
                    <strong>Google Play</strong>
                  </div>
                </button>

                <button onClick={() => setToast("Mobile app coming soon!")}>
                  <span>●</span>
                  <div>
                    <small>DOWNLOAD ON THE</small>
                    <strong>App Store</strong>
                  </div>
                </button>
              </div>

              <small className="demo-note">
                App store buttons are demo UI elements.
              </small>
            </div>

            <div className="app-phone-wrap">
              <div className="phone-mockup">
                <div className="phone-notch" />
                <div className="phone-brand">
                  Food<span>Hub.</span>
                </div>
                <p className="phone-greeting">Hey, foodie! 👋</p>
                <div className="phone-search">⌕ Search your cravings</div>
                <div className="phone-food">🍔 🍕 🍜 🍛</div>
                <div className="phone-order-image">🍔</div>
                <strong>Delicious, isn't it?</strong>
                <p>Discover your next favourite.</p>
                <div className="phone-nav">⌂　♡　🛍️　☻</div>
              </div>

              <span className="phone-deco phone-deco-one">🍕</span>
              <span className="phone-deco phone-deco-two">🥤</span>
            </div>
          </div>
        </section>

        <section className="testimonials-section section-padding" id="reviews">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <div>
                <span className="section-kicker">KIND WORDS, HAPPY TUMMIES</span>
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
                  <div className="testimonial-stars">{review.rating}</div>

                  <p className="testimonial-text">"{review.text}"</p>

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

        <section className="faq-section section-padding" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro" data-aos="fade-right">
              <span className="section-kicker">GOT QUESTIONS?</span>
              <h2>
                Good to <span>know.</span>
              </h2>
              <p>A few quick answers to help you get started with FoodHub.</p>
              <div className="faq-illustration">💬🍔</div>
            </div>

            <div className="faq-list" data-aos="fade-left">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={faq.question}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq.question}</span>
                    <span>{openFaq === index ? "−" : "+"}</span>
                  </button>

                  {openFaq === index && (
                    <p className="faq-answer">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter-section" id="newsletter">
          <div className="container newsletter-inner" data-aos="zoom-in">
            <div>
              <span className="section-kicker">A LITTLE SOMETHING DELICIOUS</span>
              <h2>
                Stay in the <span>food loop.</span>
              </h2>
              <p>
                Sign up for foodie updates, fresh inspiration and special offers.
              </p>
            </div>

            <form className="newsletter-form" onSubmit={handleNewsletter}>
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

        <section
          className="cart-section section-padding"
          id="cart"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(20, 12, 8, 0.72),
                rgba(20, 12, 8, 0.78)
              ),
              url("https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1800&q=90")
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
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

              <span className="results-count">{cartCount} items</span>
            </div>

            {cart.length === 0 ? (
              <div
                className="empty-cart"
                style={{
                  background: "rgba(255, 255, 255, 0.94)",
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
                  background: "rgba(255, 255, 255, 0.96)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "20px",
                  padding: "24px",
                }}
              >
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} loading="lazy" />

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

                  {/* UPDATED CHECKOUT BUTTON */}
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

        <section className="contact-section section-padding" id="contact">
          <div className="container contact-grid">
            <div data-aos="fade-right">
              <span className="section-kicker">WE'D LOVE TO HEAR FROM YOU</span>

              <h2>
                Let's talk <span>food.</span>
              </h2>

              <p>
                Have a question about this demo? Send a message or explore the
                sections above.
              </p>

              <a className="contact-email" href="mailto:uday@foodhub.example">
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
                <input type="text" placeholder="Enter your name" required />
              </label>

              <label>
                Email address
                <input type="email" placeholder="you@example.com" required />
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

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand-logo">
              <span className="brand-icon"></span> Food<span>Hub.</span>
            </a>

            <p>
              Good food, good mood. Discover delicious moments with FoodHub.
            </p>

            <div className="social-links">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ig
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                ▶
              </a>
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
            <h3>FoodHub</h3>
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
            © 2026 FoodHub. <br />
            All rights reserved.
          </span>
        </div>
      </footer>

      {/* ORDER CONFIRMATION POPUP */}
      {orderConfirmed && confirmedOrder && (
        <OrderConfirmation
          orderNumber={confirmedOrder.number}
          total={confirmedOrder.total}
          onClose={closeOrderConfirmation}
        />
      )}

      {toast && (
        <div className="toast-message" role="status">
          <span>✓</span> {toast}
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
