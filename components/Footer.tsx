import { Container } from "../ui/Container";

export default function Footer() {
  return (
    <footer id="contact" className="pb-10 pt-8">
      <Container>
        <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs text-muted">
              Paraspar provides care & professional mental health support for your journey.
            </p>
            <div className="mt-6 text-xs text-muted">Our Social Links</div>
            <div className="mt-2 flex gap-3 text-sm text-muted">
              <span>𝕏</span><span>◎</span><span>⌁</span><span>ⓘ</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-xs text-muted">
              <li>Home</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold">More</div>
            <ul className="mt-3 space-y-2 text-xs text-muted">
              <li>Review</li>
              <li>Contact</li>
              <li>License</li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold">Legal & Policy Links</div>
            <ul className="mt-3 space-y-2 text-xs text-muted">
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
