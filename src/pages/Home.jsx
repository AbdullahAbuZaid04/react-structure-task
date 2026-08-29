import Button from "../components/ui/Button";

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
    </div>
  );
}
