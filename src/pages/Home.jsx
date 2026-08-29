import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import heroImg from "../assets/hero.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold">Welcome to Home Page</h1>
      <p className="text-lg">This is the home page of our application.</p>
      <div className="flex gap-4">
        <Button
          text="Click Me"
          onClick={() => alert("Button Clicked!")}
          variant="primary"
          disabled={false}
        />
        <Button
          text="Click Me"
          onClick={() => alert("Button Clicked!")}
          variant="secondary"
          disabled={true}
        />
      </div>
      <div className="flex gap-4 mt-8">
        <Card
          title="Card 1 Title"
          description="This is a description of the card."
          image={heroImg}
        />
        <Card
          title="Card 2 Title"
          description="This is a description of the card."
        >
          <h3 className="text-lg font-semibold">Card with Children</h3>
          <p>This card contains children elements.</p>
        </Card>
      </div>
    </div>
  );
}
