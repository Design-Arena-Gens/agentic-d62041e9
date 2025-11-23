const products = [
  {
    id: 1,
    name: "Astra Lounge Chair",
    category: "Seating",
    description: "Italian wool upholstery and sculpted ash frame for everyday indulgence.",
    price: "$1,280",
    image:
      "https://images.unsplash.com/photo-1616627451345-5e3f05b45705?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    name: "Luma Arc Floor Lamp",
    category: "Lighting",
    description: "Soft diffusion with adaptive brightness to transform any living space.",
    price: "$590",
    image:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    name: "Aria Sideboard",
    category: "Storage",
    description: "Walnut veneer paired with smoked glass and concealed cable management.",
    price: "$1,580",
    image:
      "https://images.unsplash.com/photo-1616628182509-416829d0a06e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    name: "Nova Modular Sofa",
    category: "Seating",
    description: "Modular seating with performance linen and memory foam cushions.",
    price: "$2,460",
    image:
      "https://images.unsplash.com/photo-1616628188505-404670f83e47?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    name: "Halo Table Collection",
    category: "Tables",
    description: "Solid oak with softly curved edges and a floating inset glass top.",
    price: "$940",
    image:
      "https://images.unsplash.com/photo-1601933470094-33d61b68c4b6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    name: "Miro Wall Shelves",
    category: "Storage",
    description: "Adaptive shelving with powder-coated steel and walnut accent panels.",
    price: "$480",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
  }
];

const highlights = [
  {
    title: "Free Worldwide Delivery",
    description:
      "Carbon-neutral delivery with tracking to over 150 countries and premium unboxing experience."
  },
  {
    title: "Design Advisory",
    description:
      "Virtual styling sessions with our in-house designers to craft rooms that feel distinctly yours."
  },
  {
    title: "Lifetime Guarantee",
    description:
      "Every piece is backed by a lifetime craftsmanship warranty and five-year finish coverage."
  }
];

const featuredTestimonials = [
  {
    quote:
      "“Our living room feels like a boutique hotel lobby now. The craftsmanship is impeccable and every order comes with unexpected touches.”",
    author: "Maya Collins",
    title: "Interior Stylist, Stockholm"
  }
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <span className="hero-badge">New Season • SS25</span>
          <h1 className="hero-title">Considered design for elevated living</h1>
          <p className="hero-description">
            Luma curates modern furniture crafted by independent designers. Each
            collection is built to transform your rituals and inspire mindful
            living.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#shop">
              Shop the collection →
            </a>
            <a className="btn-secondary" href="#advisory">
              Book design advisory
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-value">65+</span>
              <span className="stat-label">Artisan studios</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">12k</span>
              <span className="stat-label">Five-star reviews</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">48h</span>
              <span className="stat-label">White-glove shipping</span>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <img
            alt="Modern living room interior with Luma furniture"
            src="https://images.unsplash.com/photo-1620626011761-996317f6c285?auto=format&fit=crop&w=1600&q=80"
          />
        </div>
      </section>

      <section id="shop">
        <div className="section-header">
          <h2 className="section-title">Signature arrivals</h2>
          <p className="section-description">
            Discover sculptural seating, expressive lighting, and modular
            storage crafted from sustainably sourced materials. Each piece is
            designed for timeless resonance and daily function.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img alt={product.name} src={product.image} />
              <div className="product-meta">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <button type="button">Add to cart</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="advisory">
        <div className="section-header">
          <h2 className="section-title">Luma membership</h2>
          <p className="section-description">
            Thoughtfully curated services designed to simplify renovations,
            styling, and sourcing. Our team partners with architects and
            designers to tailor every detail to your space.
          </p>
        </div>
        <div className="showcase">
          {highlights.map((highlight) => (
            <article className="showcase-card" key={highlight.title}>
              <h4>{highlight.title}</h4>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        {featuredTestimonials.map((testimonial) => (
          <article className="testimonial" key={testimonial.author}>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-author">
              <span className="avatar">{testimonial.author[0]}</span>
              <div className="author-details">
                <span className="author-name">{testimonial.author}</span>
                <span className="author-title">{testimonial.title}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="cta">
        <div>
          <h3>Join the design letter</h3>
          <p>
            Receive weekly mood boards, studio interviews, and limited release
            invitations curated by our design team.
          </p>
        </div>
        <form>
          <label>
            Email address
            <input placeholder="you@example.com" type="email" />
          </label>
          <button className="btn-primary" type="submit">
            Get weekly inspiration →
          </button>
          <span className="subtle">
            We respect your inbox. Unsubscribe anytime.
          </span>
        </form>
      </section>

      <footer className="footer">
        <div>
          <strong>Luma</strong>
          <p>
            427 Hudson Avenue <br />
            New York, NY 10013
          </p>
          <span className="copyright">
            © {new Date().getFullYear()} Luma Studio. All rights reserved.
          </span>
        </div>
        <nav>
          <strong>Explore</strong>
          <a href="#shop">New arrivals</a>
          <a href="#advisory">Design advisory</a>
          <a href="#">Journal</a>
          <a href="#">Gift cards</a>
        </nav>
        <nav>
          <strong>Support</strong>
          <a href="#">Shipping & returns</a>
          <a href="#">Material care</a>
          <a href="#">Trade program</a>
          <a href="#">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
