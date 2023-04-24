import Navbar from './Navbar';

export const metadata = {
  title: 'Pool App - Client',
  description: 'Pool Design App',
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section className="p-24 w-full  flex justify-center items-center ">
        <div className="max-w-6xl">{children}</div>
      </section>
    </>
  );
}
