interface AppProps {
  config?: { title: string; description: string; theme: string };
}

export default function App({ config }: AppProps): JSX.Element {
  return (
    <>
      <div className="w-96 rounded-md mx-auto mt-20 p-20 bg-gray-800 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl">Hello, World</h1>
        <h3 className="text-2xl">{config?.title}</h3>
        <p>Description: {config?.description}</p>
        <p>Theme: {config?.theme}</p>
      </div>
    </>
  );
}
