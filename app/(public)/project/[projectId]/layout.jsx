import "@/app/globals.css";

export const metadata = {
  title: "Detail news pages -Ecorise Global Initiative",
  description: "An Eco and healthy environment website",
};

const RootLayout = ({ children }) => {
  return <div className="min-h-screen overflow-auto">{children}</div>;
};

export default RootLayout;
