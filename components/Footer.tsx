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
              <span className="hover:cursor-pointer">𝕏</span><span className="hover:cursor-pointer">◎</span><span className="hover:cursor-pointer">⌁</span><span className="hover:cursor-pointer">ⓘ</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-xs text-muted">
              <li className="hover:cursor-pointer">Home</li>
              <li className="hover:cursor-pointer">About Us</li>
              <li className="hover:cursor-pointer">Blog</li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold">More</div>
            <ul className="mt-3 space-y-2 text-xs text-muted">
              <li className="hover:cursor-pointer">Review</li>
              <li className="hover:cursor-pointer">Contact</li>
              <li className="hover:cursor-pointer">License</li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold hover:cursor-pointer">Legal & Policy Links</div>
            <ul className="mt-3 space-y-2 text-xs text-muted">
              <li className="hover:cursor-pointer">Privacy Policy</li>
              <li className="hover:cursor-pointer">Terms & Condition</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
