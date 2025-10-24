import Container from "@/components/container";
import BigCalendar from "@/components/ui/big-calendar";

export default function Home() {
  return (
    <div>
      <Container className="py-4">
        <div className="rounded-md border bg-card p-4">
          <BigCalendar />
        </div>
      </Container>
    </div>
  );
}
