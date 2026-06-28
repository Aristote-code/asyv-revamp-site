import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpenText,
  CalendarBlank,
  CaretDown,
  CheckCircle,
  CompassRose,
  EnvelopeSimple,
  HandHeart,
  Heart,
  HouseLine,
  List,
  MapPin,
  Pause,
  Play,
  SpeakerHigh,
  SpeakerX,
  Tree,
  UsersThree,
  X,
} from "@phosphor-icons/react";
import {
  asset,
  videoAsset,
  events,
  faqs,
  impactStats,
  modelPillars,
  navGroups,
  pages,
  stories,
} from "./content";

const externalDonateUrl = "https://fundraise.asyv.org/campaign/803534/donate";

function pathFromWindow() {
  return window.location.pathname === "/index.html" ? "/" : window.location.pathname;
}

function useRoute() {
  const [path, setPath] = useState(pathFromWindow);

  useEffect(() => {
    const onPop = () => setPath(pathFromWindow());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (nextPath) => {
    if (nextPath === pathFromWindow()) return;
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return [path, navigate];
}

function IconFor({ type, size = 34 }) {
  const props = { size, weight: "light", "aria-hidden": true };
  if (type === "book") return <BookOpenText {...props} />;
  if (type === "heart") return <Heart {...props} />;
  if (type === "compass") return <CompassRose {...props} />;
  if (type === "tree") return <Tree {...props} />;
  return <HouseLine {...props} />;
}

function NavLink({ item, onNavigate, className = "" }) {
  return (
    <a
      className={className}
      href={item.path}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(item.path);
      }}
    >
      {item.label}
    </a>
  );
}

function Header({ path, onNavigate, onDonate }) {
  const [openGroup, setOpenGroup] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomeHero = path === "/" && !scrolled;

  return (
    <header className={`site-header ${isHomeHero ? "over-hero" : "solid"}`}>
      <a
        href="/"
        className="brand"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("/");
          setMenuOpen(false);
        }}
      >
        <img src={asset("asyv-logo.png")} alt="Agahozo-Shalom Youth Village" />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navGroups.map((group) => (
          <div
            className="nav-group"
            key={group.label}
            onMouseEnter={() => setOpenGroup(group.label)}
            onMouseLeave={() => setOpenGroup(null)}
          >
            <a
              href={group.path}
              className="nav-trigger"
              onFocus={() => setOpenGroup(group.label)}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(group.path);
              }}
            >
              {group.label}
              {group.links.length > 1 && <CaretDown size={13} weight="bold" aria-hidden />}
            </a>
            {group.links.length > 1 && openGroup === group.label && (
              <div className="mega-menu">
                {group.links.map((item) => (
                  <NavLink key={item.path} item={item} onNavigate={onNavigate} />
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="header-actions">
        <button className="button button-outline header-donate" type="button" onClick={onDonate}>
          Donate
        </button>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <List size={26} weight="light" aria-hidden />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="mobile-menu-top">
            <img src={asset("asyv-logo.png")} alt="Agahozo-Shalom Youth Village" />
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={24} weight="light" aria-hidden />
            </button>
          </div>
          <div className="mobile-menu-links">
            {navGroups.map((group) => (
              <div className="mobile-group" key={group.label}>
                <NavLink
                  className="mobile-group-title"
                  item={{ label: group.label, path: group.path }}
                  onNavigate={(next) => {
                    onNavigate(next);
                    setMenuOpen(false);
                  }}
                />
                {group.links.length > 1 && (
                  <div className="mobile-sub-links">
                    {group.links.map((item) => (
                      <NavLink
                        key={item.path}
                        item={item}
                        onNavigate={(next) => {
                          onNavigate(next);
                          setMenuOpen(false);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            className="button button-primary mobile-donate"
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onDonate();
            }}
          >
            Donate
          </button>
        </div>
      )}
    </header>
  );
}

function VideoHero({ onDonate, onNavigate, staticCapture = false }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const timeLabel = useMemo(() => {
    const seconds = Math.floor(progress || 0);
    const total = Math.floor(duration || 0);
    const fmt = (value) => `${Math.floor(value / 60)}:${String(value % 60).padStart(2, "0")}`;
    return `${fmt(seconds)} / ${duration ? fmt(total) : "1:38"}`;
  }, [duration, progress]);

  return (
    <section className="hero-video" aria-label="ASYV welcome">
      {staticCapture ? (
        <img className="hero-media" src={asset("hero-students.jpg")} alt="" />
      ) : (
        <video
          ref={videoRef}
          className="hero-media"
          src={videoAsset("mandali-hero.mp4")}
          poster={asset("hero-students.jpg")}
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          onTimeUpdate={(event) => setProgress(event.currentTarget.currentTime)}
        />
      )}
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">Agahozo-Shalom Youth Village</p>
        <h1>
          Thriving{" "}
          <span>futures start{" "}</span>
          <em>here</em>
        </h1>
        <p className="hero-copy">
          We walk alongside Rwandan students from vulnerable backgrounds, providing the
          holistic support and education they need to heal, learn, and lead.
        </p>
        <div className="hero-actions">
          <button className="button button-primary" type="button" onClick={onDonate}>
            Donate
          </button>
          <button
            className="button button-glass"
            type="button"
            onClick={() => onNavigate("/stories")}
          >
            Watch the Story
            <Play size={14} weight="fill" aria-hidden />
          </button>
        </div>
      </div>

      <a className="scroll-cue" href="#mission">
        Scroll
        <span />
      </a>
    </section>
  );
}

function CountUp({ value, suffix }) {
  return (
    <span>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

function ImpactBand() {
  return (
    <section className="impact-band">
      <div className="impact-grid">
        {impactStats.map((stat) => (
          <div className="impact-item" key={stat.label}>
            <strong>
              <CountUp value={stat.value} suffix={stat.suffix} />
            </strong>
            <span className="impact-label">{stat.label}</span>
            <p>{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function NewsletterForm({ compact = false }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      className={`newsletter-form ${compact ? "compact" : ""}`}
      onSubmit={(event) => {
        event.preventDefault();
        if (!email.trim()) return;
        setSent(true);
      }}
    >
      {sent ? (
        <div className="form-success" role="status">
          <CheckCircle size={22} weight="fill" aria-hidden />
          You are on the Village list.
        </div>
      ) : (
        <>
          <label className="sr-only" htmlFor={compact ? "footer-email" : "home-email"}>
            Email address
          </label>
          <input
            id={compact ? "footer-email" : "home-email"}
            type="email"
            value={email}
            placeholder="Email address"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button className="button button-primary" type="submit">
            Subscribe
          </button>
        </>
      )}
    </form>
  );
}

function HomePage({ onNavigate, onDonate, staticCapture = false }) {
  return (
    <>
      <VideoHero onDonate={onDonate} onNavigate={onNavigate} staticCapture={staticCapture} />

      <section id="mission" className="mission-statement">
        <div className="section-inner narrow">
          <p className="eyebrow">Our mission</p>
          <h2>
            Agahozo-Shalom Youth Village provides a safe, nurturing home and a
            continuum of care that empowers Rwandan youth to overcome trauma and
            build <em>thriving</em> futures for themselves and their communities.
          </h2>
          <button className="text-link" type="button" onClick={() => onNavigate("/about")}>
            Learn more about ASYV <ArrowRight size={16} aria-hidden />
          </button>
        </div>
      </section>

      <section className="photo-break" aria-label="The Village">
        <img src={asset("village-view.jpg")} alt="A wide view of the ASYV campus in Rwanda" />
      </section>

      <section className="model-section">
        <div className="section-inner">
          <div className="section-heading center">
            <p className="eyebrow">Our model</p>
            <h2>Whole-child support. Lifelong impact.</h2>
          </div>
          <div className="pillar-grid">
            {modelPillars.map((pillar) => (
              <article className="pillar" key={pillar.title}>
                <IconFor type={pillar.icon} />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImpactBand />

      <section className="featured-in-section">
        <div className="featured-card">
          <h2 className="featured-title">The Agahozo-Shalom Youth Village has been featured in...</h2>
          <div className="logos-grid">
            <div className="logo-card" title="CNN"><img src={asset("logos/cnn.svg")} alt="CNN Logo" /></div>
            <div className="logo-card" title="ELLE"><img src={asset("logos/elle.svg")} alt="ELLE Logo" /></div>
            <div className="logo-card" title="Forbes"><img src={asset("logos/forbes.svg")} alt="Forbes Logo" /></div>
            <div className="logo-card" title="i24 News"><img src={asset("logos/i24news.svg")} alt="i24 News Logo" /></div>
            <div className="logo-card" title="JTA"><img src={asset("logos/jta.svg")} alt="JTA Logo" /></div>
            <div className="logo-card" title="KT Press"><img src={asset("logos/ktpress.svg")} alt="KT Press Logo" /></div>
            <div className="logo-card" title="National Geographic"><img src={asset("logos/natgeo.svg")} alt="National Geographic Logo" /></div>
            <div className="logo-card" title="The New Times"><img src={asset("logos/thenewtimes.svg")} alt="The New Times Logo" /></div>
            <div className="logo-card" title="Reuters"><img src={asset("logos/reuters.svg")} alt="Reuters Logo" /></div>
            <div className="logo-card" title="Tablet"><img src={asset("logos/tablet.svg")} alt="Tablet Logo" /></div>
            <div className="logo-card" title="Teen Vogue"><img src={asset("logos/teenvogue.svg")} alt="Teen Vogue Logo" /></div>
          </div>
        </div>
      </section>

      <section className="feature-story">
        <div className="feature-copy">
          <p className="eyebrow">Stories from the Village</p>
          <h2>A future worth building</h2>
          <p>
            Students arrive carrying deep loss. At ASYV, they study, heal, make
            families, and discover the next generation they can become.
          </p>
          <button className="text-link" type="button" onClick={() => onNavigate(`/stories/${stories[0].slug}`)}>
            Read Yvette's story <ArrowRight size={16} aria-hidden />
          </button>
        </div>
        <img src={asset("alumni-tech.webp")} alt="ASYV alumna working in a technology setting" />
      </section>

      <section className="split-cta">
        <button
          className="split-panel visit-panel"
          type="button"
          onClick={() => onNavigate("/visit-the-village")}
          style={{ backgroundImage: `url(${asset('students-walking.jpg')})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        >
          <span className="eyebrow">Visit the Village</span>
          <strong>Come and see the Village</strong>
          <span>Experience ASYV and the beauty of Rwanda for yourself.</span>
          <span className="panel-link">Plan your visit <ArrowRight size={15} aria-hidden /></span>
        </button>
        <button 
          className="split-panel give-panel" 
          type="button" 
          onClick={onDonate}
          style={{ backgroundImage: `linear-gradient(135deg, rgba(7, 61, 49, 0.92), rgba(8, 44, 36, 0.98)), url(${asset('family.jpg')})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        >
          <span className="eyebrow">Make an impact</span>
          <strong>Give a gift of possibility</strong>
          <span>Your support today helps a young person heal, learn, and lead.</span>
          <span className="panel-link">Donate now <ArrowRight size={15} aria-hidden /></span>
        </button>
      </section>


    </>
  );
}

function PageHero({ page, onPrimary }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <p className="eyebrow">{page.kicker}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <button className="button button-primary" type="button" onClick={onPrimary}>
          {page.cta}
        </button>
      </div>
      <img src={page.image} alt="" />
    </section>
  );
}

function StandardPage({ page, onDonate, onNavigate }) {
  const isVisit = page.path === "/visit-the-village";
  const isContact = page.path === "/contact-us";
  const usesInquiry = isVisit || isContact || page.path === "/careers" || page.path === "/become-a-fellow";
  const handlePrimary = () => {
    if (usesInquiry) {
      document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    onDonate();
  };

  return (
    <>
      <PageHero page={page} onPrimary={handlePrimary} />
      <section className="quote-section">
        <p>{page.quote}</p>
      </section>
      <section className="content-sections">
        <div className="section-inner two-col">
          <div>
            <p className="eyebrow">{page.kicker}</p>
            <h2>What this means in practice</h2>
          </div>
          <div className="section-list">
            {page.sections.map((section) => (
              <article key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {page.path === "/impact" && <ImpactBand />}
      {page.path === "/asyv-model" && (
        <section className="model-section alt">
          <div className="section-inner">
            <div className="pillar-grid">
              {modelPillars.map((pillar) => (
                <article className="pillar" key={pillar.title}>
                  <IconFor type={pillar.icon} />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {usesInquiry && <InquiryForm intent={isVisit ? "visit" : "contact"} />}
      <section className="next-step-band">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>Keep exploring the Village.</h2>
        </div>
        <div className="next-actions">
          <button className="button button-secondary" type="button" onClick={() => onNavigate("/stories")}>
            Read Stories
          </button>
          <button className="button button-primary" type="button" onClick={onDonate}>
            Donate
          </button>
        </div>
      </section>
    </>
  );
}

function InquiryForm({ intent }) {
  const [sent, setSent] = useState(false);

  return (
    <section className="form-section" id="inquiry">
      <div className="section-inner two-col">
        <div>
          <p className="eyebrow">{intent === "visit" ? "Plan a visit" : "Contact us"}</p>
          <h2>{intent === "visit" ? "Tell us when you would like to come." : "Send a message to the team."}</h2>
          <p>
            Share a few details and the team can follow up with the right next step.
          </p>
        </div>
        <form
          className="inquiry-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="form-success large" role="status">
              <CheckCircle size={28} weight="fill" aria-hidden />
              Thank you. The Village team will be in touch.
            </div>
          ) : (
            <>
              <label>
                Name
                <input type="text" required />
              </label>
              <label>
                Email
                <input type="email" required />
              </label>
              <label>
                Message
                <textarea rows="5" required />
              </label>
              <button className="button button-primary" type="submit">
                Send
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function StoriesPage({ onNavigate }) {
  return (
    <>
      <section className="page-hero stories-hero">
        <div className="page-hero-copy">
          <p className="eyebrow">The Latest</p>
          <h1>Stories that move at Village pace.</h1>
          <p>
            Meet students, alumni, staff, and supporters through stories told with
            care, space, and dignity.
          </p>
        </div>
        <img src={asset("graduates.jpg")} alt="" />
      </section>
      <section className="story-index">
        <div className="section-inner">
          {stories.map((story, index) => (
            <article className={`story-row ${index % 2 ? "reverse" : ""}`} key={story.slug}>
              <div className="story-row-img-wrap">
                <img src={story.image} alt="" />
              </div>
              <div>
                <p className="eyebrow">{story.kicker}</p>
                <h2>{story.title}</h2>
                <p>{story.excerpt}</p>
                <button className="text-link" type="button" onClick={() => onNavigate(`/stories/${story.slug}`)}>
                  Read story <ArrowRight size={16} aria-hidden />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function StoryDetail({ story, onNavigate }) {
  return (
    <>
      <section className="article-hero">
        <img src={story.image} alt="" />
        <div className="article-hero-copy">
          <p className="eyebrow">{story.kicker}</p>
          <h1>{story.title}</h1>
          <p>{story.date}</p>
        </div>
      </section>
      <article className="article-body">
        {story.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <button className="text-link" type="button" onClick={() => onNavigate("/stories")}>
          Back to stories <ArrowRight size={16} aria-hidden />
        </button>
      </article>
    </>
  );
}

function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-copy">
          <p className="eyebrow">Events</p>
          <h1>Gather around the Village.</h1>
          <p>
            Join ASYV through in-person and digital events that connect supporters
            with students, alumni, and staff.
          </p>
        </div>
        <img src={asset("family.jpg")} alt="" />
      </section>
      <section className="events-list">
        <div className="section-inner">
          {events.map((event) => (
            <article className="event-item" key={event.title}>
              <CalendarBlank size={28} weight="light" aria-hidden />
              <div>
                <p className="eyebrow">{event.date}</p>
                <h2>{event.title}</h2>
                <p>{event.text}</p>
                <span>
                  <MapPin size={15} aria-hidden /> {event.location}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function FaqPage() {
  const [open, setOpen] = useState(0);
  const faqPage = pages.find((item) => item.path === "/about");

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-copy">
          <p className="eyebrow">FAQs</p>
          <h1>Good questions, clear answers.</h1>
          <p>
            A simple guide to ASYV, visiting, giving, and the Village's holistic
            model of care.
          </p>
        </div>
        <img src={faqPage.image} alt="" />
      </section>
      <section className="faq-section">
        <div className="section-inner narrow">
          {faqs.map((item, index) => (
            <article className="faq-item" key={item.question}>
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
                {item.question}
                <CaretDown size={18} weight="bold" aria-hidden />
              </button>
              {open === index && <p>{item.answer}</p>}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function DonateModal({ open, onClose }) {
  const [amount, setAmount] = useState(250);
  const [frequency, setFrequency] = useState("monthly");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", open);
    return () => document.body.classList.remove("modal-open");
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Donate to ASYV">
      <div className="donate-modal">
        <button className="close-modal" type="button" onClick={onClose} aria-label="Close donation form">
          <X size={22} weight="light" aria-hidden />
        </button>
        {complete ? (
          <div className="donate-complete">
            <CheckCircle size={42} weight="fill" aria-hidden />
            <h2>Thank you for standing with the Village.</h2>
            <p>
              Continue to ASYV's secure giving page to complete your gift.
            </p>
            <a className="button button-primary" href={externalDonateUrl} target="_blank" rel="noreferrer">
              Continue to secure giving
            </a>
          </div>
        ) : (
          <>
            <p className="eyebrow">Make an impact</p>
            <h2>Give a gift of possibility.</h2>
            <p>
              Choose a giving rhythm and amount. Every gift helps provide home,
              education, wellness, and long-term care.
            </p>
            <div className="frequency-toggle" aria-label="Donation frequency">
              {["monthly", "once"].map((item) => (
                <button
                  type="button"
                  className={frequency === item ? "active" : ""}
                  key={item}
                  onClick={() => setFrequency(item)}
                >
                  {item === "monthly" ? "Monthly" : "One time"}
                </button>
              ))}
            </div>
            <div className="amount-grid">
              {[50, 100, 250, 500].map((item) => (
                <button
                  type="button"
                  className={amount === item ? "active" : ""}
                  key={item}
                  onClick={() => setAmount(item)}
                >
                  ${item}
                </button>
              ))}
            </div>
            <form
              className="donate-form"
              onSubmit={(event) => {
                event.preventDefault();
                setComplete(true);
              }}
            >
              <label>
                Email
                <input type="email" required />
              </label>
              <button className="button button-primary" type="submit">
                Give ${amount} {frequency === "monthly" ? "monthly" : "today"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Footer({ onNavigate }) {
  return (
    <section className="video-footer-wrapper">
      <video className="footer-video-bg" src={videoAsset("mandali-hero.mp4")} autoPlay loop muted playsInline />
      <div className="footer-video-shade" />
      
      <div className="newsletter-band">
        <div>
          <EnvelopeSimple size={30} weight="light" aria-hidden />
          <p className="eyebrow">Stay connected</p>
          <h2>Get stories from the Village straight to your inbox.</h2>
        </div>
        <NewsletterForm />
      </div>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={asset("asyv-logo.png")} alt="Agahozo-Shalom Youth Village" />
          <p>Healing hearts. Educating minds. Building futures.</p>
        </div>
        <div className="footer-columns">
          <div>
            <h3>Explore</h3>
            {["/asyv-model", "/about", "/visit-the-village", "/ways-to-give", "/stories"].map((path) => {
              const item =
                navGroups.flatMap((group) => group.links).find((link) => link.path === path) ||
                navGroups.find((group) => group.path === path);
              return item ? <NavLink key={path} item={item} onNavigate={onNavigate} /> : null;
            })}
          </div>
          <div>
            <h3>Connect</h3>
            <p>P.O. Box 7299<br />Kigali, Rwanda</p>
            <p>info@asyv.org<br />+250 788 305 931</p>
          </div>
          <div>
            <h3>Transparency</h3>
            <NavLink item={{ label: "Reports", path: "/financials" }} onNavigate={onNavigate} />
            <NavLink item={{ label: "FAQs", path: "/faqs" }} onNavigate={onNavigate} />
            <NavLink item={{ label: "Contact", path: "/contact-us" }} onNavigate={onNavigate} />
          </div>
          <div>
            <h3>Video credit</h3>
            <p>
              Hero video: Christian Yakubu, Wikimedia Commons, CC BY-SA 4.0.
            </p>
          </div>
        </div>
        <p className="copyright">© 2026 Agahozo-Shalom Youth Village. All rights reserved.</p>
      </footer>
    </section>
  );
}

export function App() {
  const [path, navigate] = useRoute();
  const [donateOpen, setDonateOpen] = useState(false);
  const staticCapture = new URLSearchParams(window.location.search).has("qa-static");

  const currentPage = pages.find((item) => item.path === path);
  const storySlug = path.startsWith("/stories/") ? path.replace("/stories/", "") : null;
  const currentStory = storySlug ? stories.find((story) => story.slug === storySlug) : null;

  let content;
  if (path === "/") {
    content = <HomePage onNavigate={navigate} onDonate={() => setDonateOpen(true)} staticCapture={staticCapture} />;
  } else if (path === "/stories") {
    content = <StoriesPage onNavigate={navigate} />;
  } else if (currentStory) {
    content = <StoryDetail story={currentStory} onNavigate={navigate} />;
  } else if (path === "/events") {
    content = <EventsPage />;
  } else if (path === "/faqs") {
    content = <FaqPage />;
  } else if (currentPage) {
    content = (
      <StandardPage
        page={currentPage}
        onDonate={() => setDonateOpen(true)}
        onNavigate={navigate}
      />
    );
  } else {
    content = (
      <section className="not-found">
        <p className="eyebrow">Page not found</p>
        <h1>Let's get you back to the Village.</h1>
        <button className="button button-primary" type="button" onClick={() => navigate("/")}>
          Return home
        </button>
      </section>
    );
  }

  return (
    <>
      <Header path={path} onNavigate={navigate} onDonate={() => setDonateOpen(true)} />
      <main>{content}</main>
      <Footer onNavigate={navigate} />
      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </>
  );
}
