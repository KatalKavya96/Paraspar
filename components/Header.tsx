import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export default function Header() {
  return (
    <header className="pt-6">
      <Container>
        <div className="flex items-center justify-between">
          <div className="font-serif text-lg text-brand">Paraspar</div>

          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a className="hover:text-text" href="#about">About</a>
            <a className="hover:text-text" href="#service">Service</a>
            <a className="hover:text-text" href="#contact">Contact</a>
          </nav>

          <Button className="px-5">Book A Session</Button>
        </div>
      </Container>
    </header>
  );
}
